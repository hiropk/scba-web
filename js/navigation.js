// ナビゲーション制御

(function() {
  'use strict';

  const navToggle = document.querySelector('.header__nav-toggle');
  const nav = document.querySelector('.header__nav');
  const navLinks = document.querySelectorAll('.header__nav-link');

  // ハンバーガーメニューの開閉
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // メニューリンクをクリックしたらメニューを閉じる（モバイル）
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
          navToggle.classList.remove('active');
          nav.classList.remove('active');
        }
      });
    });

    // ウィンドウリサイズ時にメニューを閉じる
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth >= 768) {
          navToggle.classList.remove('active');
          nav.classList.remove('active');
        }
      }, 250);
    });
  }

  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // アクティブなページのハイライト
  const currentPath = window.location.pathname;
  navLinks.forEach(function(link) {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath || (currentPath === '/' && linkPath.includes('index.html'))) {
      link.classList.add('active');
    }
  });
})();
