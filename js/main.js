// メインスクリプト

(function() {
  'use strict';

  // ページ読み込み完了後の処理
  document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initScrollEffects();
  });

  // 画像の遅延読み込み（Lazy Loading）
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  // スクロール効果
  function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      // ヘッダーの影を追加（スクロール時）
      if (currentScroll > 10) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
      } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      }

      lastScroll = currentScroll;
    });
  }

  // 電話番号の自動リンク化
  document.querySelectorAll('.phone-link').forEach(function(element) {
    const phoneNumber = element.textContent.replace(/[^\d]/g, '');
    if (phoneNumber) {
      element.href = 'tel:' + phoneNumber;
    }
  });
})();
