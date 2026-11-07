// ============================================================
// 作品データ：『爆食トライアングル』
// このファイルは、この作品ひとつぶんのデータです。
//
// 【編集のしかた（GitHubの画面でOK）】
// 1. このファイルのページで、右上の鉛筆マーク（Edit this file）を押す
// 2. 直したい文字を書き換える
// 3. 画面下の「Commit changes」を押すと、1〜2分でサイトに反映されます
//
// 【書き換えるときの注意】
// ・文章は " " （ダブルクォート）で囲まれた部分だけを書き換えてください
// ・行末のカンマ（ , ）や、カッコの数を消したり増やしたりしないでください
// ・もし壊してしまっても大丈夫です。サイト本体にも同じ内容のコピーが
//   入っているので、サイトが真っ白になることはありません。
//   直し方が分からなければ、むぎ（Muse）に声をかけてください。
// ============================================================

window.AQUART_CONTENT = window.AQUART_CONTENT || {};
window.AQUART_CONTENT.gamesById = window.AQUART_CONTENT.gamesById || {};
window.AQUART_CONTENT.gamesById["bakushoku-triangle"] = {
  "id": "bakushoku-triangle",
  "relatedEventId": "",
  "title": "爆食トライアングル",
  "subtitle": "台を傾けて転がし、三角食べで食べまくる",
  "category": "3Dアクション",
  "year": "2026",
  "image": "assets/work-bakushoku.jpg",
  "imageAlt": "爆食トライアングルのゲーム画面",
  "description": "台を傾けて主人公の球を転がし、ごはん・おかず・汁物を三角食べの順番で食べていくゲーム。順番を守りながら、どれだけたくさん食べられるかに挑みます。",
  "tools": [
    "C++"
  ],
  "period": "2026/10（2週間）",
  "team": "",
  "detail": "台を傾けて球を転がし、画面に表示される順番どおりに「ごはん・おかず・汁物」を三角食べで食べていくゲームです。球の回転はクォータニオンで再現し、台の傾き方によって転がる方向やスピードが変化します。UIの共通モチーフは「牙に食べられる」演出で、画面遷移や食べる場面にも牙が登場します。食べた量はランキングで競え、ランキング用のサーバーもC++で自作しています。",
  "screenshots": [
    {
      "src": "assets/bakushoku-shot-01.jpg",
      "caption": "タイトル画面（牙が『爆食』を噛むロゴと球体キャラ、PRESS START）"
    },
    {
      "src": "assets/bakushoku-shot-02.jpg",
      "caption": "食べる演出（牙に食べられる演出と「次は〜を食べましょう」表示）"
    },
    {
      "src": "assets/bakushoku-shot-03.jpg",
      "caption": "ゲーム画面（台の上にごはん・おかず・汁物が並び、中央に球体キャラ）"
    },
    {
      "src": "assets/bakushoku-shot-04.jpg",
      "caption": "順番を間違えたときの表示（「三角食べを守ってください」）"
    },
    {
      "src": "assets/bakushoku-shot-05.jpg",
      "caption": "ランキング画面（1位〜5位のスコア一覧）"
    }
  ],
  "links": [
    {
      "label": "作品データ",
      "url": "https://drive.google.com/drive/folders/1pqT5wFmQTVGCI4qICJ8v2wVvZwriyOE8"
    }
  ]
};
