/**
 * 伊波氷筍のBOR - main.js
 * 最小限の動作（ナビゲーション開閉など）を管理します。
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
});

/**
 * スマホ用ハンバーガーメニューの初期化
 */
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const isActive = toggle.classList.toggle('active');
        nav.classList.toggle('active', isActive);
        
        // メニューが開いているときはスクロールを防ぐ
        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // メニュー内のリンクをクリックしたら閉じる（ページ内リンク用）
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}
