# 格助詞スロットジェネレーター

日本語学習者のための格助詞学習ツールです。スロットマシンの形式で助詞を組み合わせ、文章を生成します。

## デモ

🎰 [スロットジェネレーター](https://magu6444.github.io/kakujoshi-slot-generator/)
🎮 [インタラクティブデモ](https://magu6444.github.io/kakujoshi-slot-generator/demo.html)
📊 [分析ログページ](https://magu6444.github.io/kakujoshi-slot-generator/analysis-log.html)

## 特徴

- 🎨 **詩的なビジュアル**: 淡いグラデーション背景がふわふわと動く美しいUI
- 🖼️ **絵画演出**: 助詞が決まるとイラストが絵画のように現れる
- 📝 **細めの明朝体**: 洗練された日本語フォント
- 🎯 **直感的な操作**: スロットをクリックして助詞を選択

## 使い方

1. 「スタート」ボタンをクリック
2. 回転するスロットをクリックして停止
3. 2つの助詞が決まるとイラストが絵画のように現れます
4. 完成した文章を確認

## GitHub Pagesで公開する方法

1. このリポジトリをGitHubにプッシュ
2. Settings → Pages → Source から `main` ブランチを選択
3. 自動的にデプロイされます

## ローカルで実行

```bash
# リポジトリをクローン
git clone [your-repo-url]

# ディレクトリに移動
cd kakujoshi-slot-generator

# ローカルサーバーを起動
python3 -m http.server 8000

# ブラウザで http://localhost:8000 を開く
```

## 技術スタック

- HTML5
- CSS3 (アニメーション、グラデーション)
- Vanilla JavaScript
- Google Fonts (Shippori Mincho)

## ライセンス

MIT License
