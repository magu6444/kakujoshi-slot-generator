// 格助詞デモ - メインスクリプト

const PARTICLES = ['が', 'を', 'に', 'で', 'と', 'へ'];

// 現在の画面とゲーム状態
let currentScreen = 1;
let slot1Stopped = false;
let slot2Stopped = false;
let selectedParticle1 = '';
let selectedParticle2 = '';
let spinInterval1 = null;
let spinInterval2 = null;

// 初期化
document.addEventListener('DOMContentLoaded', init);

function init() {
    // イベントリスナーの設定
    document.addEventListener('click', handleClick);

    // スロットリールの初期化
    initSlotReels();
}

// スロットリールの初期設定
function initSlotReels() {
    const reel1 = document.querySelector('#slot1 .slot-reel');
    const reel2 = document.querySelector('#slot2 .slot-reel');

    // リールに助詞を追加（ループ表示用に3セット）
    for (let i = 0; i < 3; i++) {
        PARTICLES.forEach(particle => {
            const span1 = document.createElement('span');
            span1.textContent = particle;
            reel1.appendChild(span1);

            const span2 = document.createElement('span');
            span2.textContent = particle;
            reel2.appendChild(span2);
        });
    }
}

// クリックハンドラー
function handleClick(e) {
    if (currentScreen === 1) {
        // 画面1 → 画面2 へ遷移
        transitionTo(2);
        startSlots();
    } else if (currentScreen === 2) {
        // スロット停止処理
        if (!slot1Stopped) {
            stopSlot(1);
        } else if (!slot2Stopped) {
            stopSlot(2);
        }
    } else if (currentScreen === 3) {
        // 画面3 → 画面1 へ戻る（リセット）
        resetGame();
    }
}

// 画面遷移
function transitionTo(screenNumber) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const targetScreen = document.getElementById(`screen${screenNumber}`);
    targetScreen.classList.add('active');

    currentScreen = screenNumber;
}

// スロット開始
function startSlots() {
    const reel1 = document.querySelector('#slot1 .slot-reel');
    const reel2 = document.querySelector('#slot2 .slot-reel');

    reel1.classList.add('spinning');
    reel2.classList.add('spinning');

    let position1 = 0;
    let position2 = 0;
    const itemHeight = 120; // CSS の slot-reel span の height と同じ

    // スロット1の回転
    spinInterval1 = setInterval(() => {
        position1 -= itemHeight;
        if (position1 <= -(itemHeight * PARTICLES.length)) {
            position1 = 0;
        }
        reel1.style.transform = `translateY(${position1}px)`;
    }, 100);

    // スロット2の回転（少し速度を変える）
    spinInterval2 = setInterval(() => {
        position2 -= itemHeight;
        if (position2 <= -(itemHeight * PARTICLES.length)) {
            position2 = 0;
        }
        reel2.style.transform = `translateY(${position2}px)`;
    }, 120);
}

// スロット停止
function stopSlot(slotNumber) {
    const itemHeight = 120;

    if (slotNumber === 1) {
        clearInterval(spinInterval1);
        const reel1 = document.querySelector('#slot1 .slot-reel');
        reel1.classList.remove('spinning');

        // ランダムな助詞を選択
        const randomIndex = Math.floor(Math.random() * PARTICLES.length);
        selectedParticle1 = PARTICLES[randomIndex];

        // リールを該当位置に移動（2セット目の位置に合わせる）
        const finalPosition = -(itemHeight * (PARTICLES.length + randomIndex));
        reel1.style.transform = `translateY(${finalPosition}px)`;

        // 視覚的フィードバック
        document.getElementById('slot1-wrapper').classList.add('stopped');
        slot1Stopped = true;

        // 指示文を更新
        document.getElementById('slot-instruction').textContent = 'もう一度クリックして2つ目のスロットを止めよう';

    } else if (slotNumber === 2) {
        clearInterval(spinInterval2);
        const reel2 = document.querySelector('#slot2 .slot-reel');
        reel2.classList.remove('spinning');

        const randomIndex = Math.floor(Math.random() * PARTICLES.length);
        selectedParticle2 = PARTICLES[randomIndex];

        const finalPosition = -(itemHeight * (PARTICLES.length + randomIndex));
        reel2.style.transform = `translateY(${finalPosition}px)`;

        document.getElementById('slot2-wrapper').classList.add('stopped');
        slot2Stopped = true;

        // 少し遅延してから結果画面へ
        setTimeout(() => {
            showResult();
        }, 800);
    }
}

// 結果表示
function showResult() {
    // 完成した文を表示
    const resultSentence = `ねこ${selectedParticle1}りんご${selectedParticle2}たべた`;
    document.getElementById('result-sentence').textContent = resultSentence;

    // 画像を表示
    loadResultImage();

    // 結果画面へ遷移
    transitionTo(3);
}

// 結果画像の読み込み
function loadResultImage() {
    const resultImage = document.getElementById('result-image');
    const placeholder = document.querySelector('.image-placeholder');

    // 30通りの組み合わせとファイル名のマッピング
    // ファイル名は時系列順（古い順）が、分析の30通り（1. がを 〜 30. とへ）に対応
    // ls -t の結果は新しい順なので、下から30個を使う（最新の1個は除外）
    const imageMapping = {
        'がを': 'AI画像生成 1955193831558018738.png',       // 31番目（最古）
        'がに': 'AI画像生成 3 (1).png',                     // 30番目
        'がで': 'AI画像生成 3 (2).png',                     // 29番目
        'がと': 'AI画像生成 3.png',                         // 28番目
        'がへ': 'AI画像生成 PixAI.png',                     // 27番目
        'をが': 'AI画像生成 画像 (1).png',                  // 26番目
        'をに': 'AI画像生成 画像 (2).png',                  // 25番目
        'をで': 'AI画像生成 画像 (3).png',                  // 24番目
        'をと': 'AI画像生成 画像 (4).png',                  // 23番目
        'をへ': 'AI画像生成 画像 (5).png',                  //  22番目
        'にが': 'AI画像生成 画像 (6).png',                  // 21番目
        'にを': 'AI画像生成 画像.png',                      // 20番目
        'にで': 'PixAI 画像生成 (1).png',                   // 19番目
        'にと': 'PixAI 画像生成 (10).png',                  // 18番目
        'にへ': 'PixAI 画像生成 (11).png',                  // 17番目
        'でが': 'PixAI 画像生成 (12).png',                  // 16番目
        'でを': 'PixAI 画像生成 (13).png',                  // 15番目
        'でに': 'PixAI 画像生成 (14).png',                  // 14番目
        'でと': 'PixAI 画像生成 (2).png',                   // 13番目
        'でへ': 'PixAI 画像生成 (3).png',                   // 12番目
        'とが': 'PixAI 画像生成 (4).png',                   // 11番目
        'とを': 'PixAI 画像生成 (5).png',                   // 10番目
        'とに': 'PixAI 画像生成 (6).png',                   // 9番目
        'とで': 'PixAI 画像生成 (7).png',                   // 8番目
        'とへ': 'PixAI 画像生成 (8).png',                   // 7番目
        'へが': 'PixAI 画像生成 (9).png',                   // 6番目
        'へを': 'PixAI 画像生成 3 (1).png',                 // 5番目
        'へに': 'PixAI 画像生成 3 (2).png',                 // 4番目
        'へで': 'PixAI 画像生成 3 (3).png',                 // 3番目
        'へと': 'PixAI 画像生成 3.png'                      // 2番目
        // 1番目（最新）の「PixAI 画像生成.png」は使用しない
    };

    // 助詞の組み合わせキーを作成
    const combinationKey = `${selectedParticle1}${selectedParticle2}`;

    // マッピングから画像ファイル名を取得
    const filename = imageMapping[combinationKey];

    if (filename) {
        const imagePath = `demo_images/${filename}`;
        resultImage.src = imagePath;

        resultImage.onload = () => {
            placeholder.style.display = 'none';
            resultImage.classList.add('loaded');
        };

        resultImage.onerror = () => {
            placeholder.innerHTML = `
                <p>画像が見つかりません</p>
                <p style="font-size: 0.9rem; margin-top: 1rem;">
                    ${selectedParticle1} × ${selectedParticle2} の組み合わせ<br>
                    ファイル名: ${filename}
                </p>
            `;
        };
    } else {
        placeholder.innerHTML = `
            <p>マッピングエラー</p>
            <p style="font-size: 0.9rem; margin-top: 1rem;">
                ${selectedParticle1} × ${selectedParticle2} の組み合わせが見つかりません
            </p>
        `;
    }
}

// ゲームリセット
function resetGame() {
    // 状態リセット
    slot1Stopped = false;
    slot2Stopped = false;
    selectedParticle1 = '';
    selectedParticle2 = '';

    // スロットの見た目をリセット
    document.getElementById('slot1-wrapper').classList.remove('stopped');
    document.getElementById('slot2-wrapper').classList.remove('stopped');

    const reel1 = document.querySelector('#slot1 .slot-reel');
    const reel2 = document.querySelector('#slot2 .slot-reel');
    reel1.style.transform = 'translateY(0)';
    reel2.style.transform = 'translateY(0)';

    // 画像をリセット
    const resultImage = document.getElementById('result-image');
    resultImage.classList.remove('loaded');
    resultImage.src = '';
    document.querySelector('.image-placeholder').style.display = 'block';

    // 指示文をリセット
    document.getElementById('slot-instruction').textContent = 'クリックしてスロットを止めよう';

    // 画面1へ戻る
    transitionTo(1);
}
