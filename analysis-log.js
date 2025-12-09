// インタラクティブ要素のJavaScript

document.addEventListener('DOMContentLoaded', function () {
    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // カテゴリーカードのホバーエフェクト
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 統計ボックスのアニメーション
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 各セクションにオブザーバーを適用
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // タイムラインアイテムの順次表示
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';

        setTimeout(() => {
            item.style.transition = 'all 0.5s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200 * index);
    });

    // シーンカードのインタラクティブエフェクト
    const sceneCards = document.querySelectorAll('.scene-card');
    sceneCards.forEach(card => {
        card.addEventListener('click', function () {
            // クリックでハイライト
            sceneCards.forEach(c => c.style.borderLeftColor = '#ec4899');
            this.style.borderLeftColor = '#6366f1';
            this.style.borderLeftWidth = '8px';

            // 3秒後に元に戻す
            setTimeout(() => {
                this.style.borderLeftColor = '#ec4899';
                this.style.borderLeftWidth = '4px';
            }, 3000);
        });
    });

    // スクロール進捗インジケーター（オプション）
    window.addEventListener('scroll', function () {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        // プログレスバーがある場合のみ更新
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    });

    // カウントアップアニメーション（統計数字用）
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.innerHTML = value === Infinity ? '∞' : value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // 統計数字が表示されたらカウントアップ
    const statObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target.querySelector('.stat-number');
                if (target && !target.classList.contains('animated')) {
                    const finalValue = target.textContent.trim();
                    if (finalValue === '∞') {
                        // 無限大記号はそのまま表示
                        target.classList.add('animated');
                    } else {
                        const endValue = parseInt(finalValue);
                        animateValue(target, 0, endValue, 1500);
                        target.classList.add('animated');
                    }
                }
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-box').forEach(box => {
        statObserver.observe(box);
    });

    console.log('格助詞分析ログページ - インタラクティブ要素が初期化されました 🎉');
});
