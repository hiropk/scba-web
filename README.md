# 島根県遊漁船組合 ホームページ

島根県遊漁船組合の公式ホームページです。

## 概要

このプロジェクトは、島根県遊漁船組合の公式ホームページです。GitHub Pagesでデプロイする静的サイトとして構築されています。

## 技術スタック

- HTML5
- CSS3（モバイルファースト）
- JavaScript（Vanilla JS）

## ファイル構成

```
scba-web/
├── index.html          # トップページ
├── about.html          # 組合について
├── boats.html          # 遊漁船情報
├── news.html           # お知らせ
├── css/
│   ├── reset.css       # リセットCSS
│   └── style.css       # メインスタイル
├── js/
│   ├── navigation.js   # ナビゲーション制御
│   └── main.js         # メインスクリプト
├── images/
│   ├── scba_logo.png   # 組合ロゴ
│   └── scba_banner.png # バナー画像
└── docs/
    └── base.md         # 設計書
```

## デザイン方針

- **モバイルファースト**: スマートフォンでの閲覧を最優先に設計
- **レスポンシブデザイン**: タブレット・PCにも対応
- **アクセシビリティ**: セマンティックHTML、適切なARIA属性の使用

## ローカルでの確認方法

1. リポジトリをクローン
2. 各HTMLファイルをブラウザで直接開く、またはローカルサーバーを起動

```bash
# Python 3の場合
python -m http.server 8000

# Node.jsの場合（http-serverが必要）
npx http-server
```

3. ブラウザで `http://localhost:8000` にアクセス

## GitHub Pagesでのデプロイ

1. リポジトリのSettings > Pagesに移動
2. Sourceを「mainブランチ」または「gh-pagesブランチ」に設定
3. デプロイが完了すると、`https://[ユーザー名].github.io/scba-web/` でアクセス可能

## ブラウザ対応

- iOS Safari（最新2バージョン）
- Chrome Mobile（Android、最新2バージョン）
- Chrome、Firefox、Safari、Edge（最新バージョン）

## ライセンス

© 2025 島根県遊漁船組合. All rights reserved.
