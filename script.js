// 助詞の配列
const particles = ['が', 'お', 'に', 'で', 'と', 'へ'];

// スロットの状態管理
const slotState = {
    slot1: {
        element: null,
        display: null,
        isSpinning: false,
        currentIndex: 0,
        interval: null,
        finalParticle: ''
    },
    slot2: {
        element: null,
        display: null,
        isSpinning: false,
        currentIndex: 0,
        interval: null,
        finalParticle: ''
    }
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    // 要素の取得
    slotState.slot1.element = document.getElementById('slot1');
    slotState.slot1.display = slotState.slot1.element.querySelector('.slot-display');

    slotState.slot2.element = document.getElementById('slot2');
    slotState.slot2.display = slotState.slot2.element.querySelector('.slot-display');

    const startBtn = document.getElementById('startBtn');
    const resultArea = document.getElementById('resultArea');
    const resultText = document.getElementById('resultText');

    // イベントリスナー
    startBtn.addEventListener('click', startSlots);

    slotState.slot1.element.addEventListener('click', () => stopSlot('slot1'));
    slotState.slot2.element.addEventListener('click', () => stopSlot('slot2'));
});

// スロット開始
function startSlots() {
    const startBtn = document.getElementById('startBtn');
    const resultArea = document.getElementById('resultArea');
    const illustrationArea = document.querySelector('.illustration-area');

    // ボタンを無効化
    startBtn.disabled = true;

    // 結果エリアを非表示
    resultArea.classList.remove('show');

    // イラストエリアを非表示にリセット
    illustrationArea.classList.remove('painting-reveal');

    // 両スロットをスタート
    spinSlot('slot1');
    spinSlot('slot2');

    // 指示文を更新
    document.querySelector('.instructions p').textContent = 'スロットをクリックして止めよう！';
}

// 個別スロットの回転開始
function spinSlot(slotId) {
    const slot = slotState[slotId];

    if (slot.isSpinning) return;

    slot.isSpinning = true;
    slot.element.classList.add('spinning');
    slot.element.classList.remove('stopped');

    // ランダムな初期位置
    slot.currentIndex = Math.floor(Math.random() * particles.length);

    // 高速で助詞を切り替え
    slot.interval = setInterval(() => {
        slot.currentIndex = (slot.currentIndex + 1) % particles.length;
        slot.display.textContent = particles[slot.currentIndex];
    }, 100);
}

// 個別スロットの停止
function stopSlot(slotId) {
    const slot = slotState[slotId];

    if (!slot.isSpinning) return;

    // 回転を停止
    clearInterval(slot.interval);
    slot.isSpinning = false;
    slot.element.classList.remove('spinning');
    slot.element.classList.add('stopped');

    // 最終的な助詞を保存
    slot.finalParticle = particles[slot.currentIndex];

    // 徐々に減速するアニメーション
    let slowDownSteps = 5;
    let currentSpeed = 100;

    const slowDownInterval = setInterval(() => {
        if (slowDownSteps <= 0) {
            clearInterval(slowDownInterval);
            slot.display.textContent = slot.finalParticle;

            // 両方止まったか確認
            checkBothStopped();
            return;
        }

        slot.currentIndex = (slot.currentIndex + 1) % particles.length;
        slot.display.textContent = particles[slot.currentIndex];
        currentSpeed += 50;
        slowDownSteps--;

        setTimeout(() => { }, currentSpeed);
    }, currentSpeed);
}

// 両スロットが停止したか確認
function checkBothStopped() {
    if (!slotState.slot1.isSpinning && !slotState.slot2.isSpinning &&
        slotState.slot1.finalParticle && slotState.slot2.finalParticle) {

        // イラストエリアに絵画演出を追加
        const illustrationArea = document.querySelector('.illustration-area');
        setTimeout(() => {
            illustrationArea.classList.add('painting-reveal');
        }, 300);

        // 結果を表示
        setTimeout(() => {
            showResult();
        }, 1000);

        // スタートボタンを再度有効化
        const startBtn = document.getElementById('startBtn');
        startBtn.disabled = false;

        // 指示文をリセット
        document.querySelector('.instructions p').textContent = 'スタートボタンを押して、スロットをクリックして止めよう！';
    }
}

// 結果表示
function showResult() {
    const particle1 = slotState.slot1.finalParticle;
    const particle2 = slotState.slot2.finalParticle;

    const sentence = `ねこ${particle1}りんご${particle2}たべた`;

    // ポスターを表示
    showPoster(particle1, particle2, sentence);

    // スロットの状態をリセット（次回用）
    slotState.slot1.finalParticle = '';
    slotState.slot2.finalParticle = '';
}

// ポスター表示
function showPoster(particle1, particle2, sentence) {
    // デザイン設定を取得
    const design = getPosterDesign(particle1, particle2);

    // ポスター要素を取得
    const posterOverlay = document.getElementById('posterOverlay');
    const posterContent = document.querySelector('.poster-content');
    const posterTitle = document.getElementById('posterTitle');
    const posterIllustration = document.getElementById('posterIllustration');
    const posterSubtitle = document.getElementById('posterSubtitle');
    const closePoster = document.getElementById('closePoster');

    // デザインを適用
    posterContent.style.backgroundColor = design.bgColor;
    posterTitle.style.color = design.textColor;
    posterSubtitle.style.color = design.textColor;
    closePoster.style.color = design.textColor;
    closePoster.style.borderColor = design.textColor;

    // レイアウトクラスを適用
    posterContent.className = `poster-content layout-${design.layout}`;

    // コンテンツを設定
    posterTitle.textContent = sentence.toUpperCase();

    // イラスト（現在はプレースホルダーとして絵文字を使用）
    posterIllustration.textContent = '🐱🍎';

    // サブタイトル
    posterSubtitle.textContent = `${particle1} × ${particle2}`;

    // オーバーレイを表示
    posterOverlay.classList.add('active');

    // クローズボタンのイベントリスナー
    closePoster.onclick = () => {
        posterOverlay.classList.remove('active');
    };

    // オーバーレイ背景クリックで閉じる
    posterOverlay.onclick = (e) => {
        if (e.target === posterOverlay) {
            posterOverlay.classList.remove('active');
        }
    };
}

// ポスターのデザイン設定を返す関数 (仮実装)
function getPosterDesign(particle1, particle2) {
    // 助詞の組み合わせに応じてデザインを返すロジックをここに実装
    // 例:
    if (particle1 === 'が' && particle2 === 'を') {
        return {
            bgColor: '#FFDDC1', // 優しいオレンジ
            textColor: '#8B4513', // 茶色
            layout: 'center'
        };
    } else if (particle1 === 'に' && particle2 === 'で') {
        return {
            bgColor: '#D4EDDA', // 薄い緑
            textColor: '#28A745', // 濃い緑
            layout: 'left'
        };
    } else {
        return {
            bgColor: '#E0E0E0', // デフォルトの灰色
            textColor: '#333333', // デフォルトの黒
            layout: 'right'
        };
    }
}
