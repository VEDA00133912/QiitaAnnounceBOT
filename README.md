# QiitaAnnounceBOT
Qiitaの新着記事の通知を行うDiscordBOT

# 機能
- QiitaのRSSとrss-parserを使って新着記事の通知を指定したチャンネルに送信するDiscordBOT
- RSSをQiita以外に変えれば他のもできます
- 確認の間隔は10分にしていますが変更も可能です
# 起動
-  `.env` にBOTのTOKEN、通知したいチャンネルID、RSSのURLを入れて保存
-  ```node index.js```で実行

## RSSのURLの取得
プロフィールページにとんでこの部分を押すとRSSのページに飛ぶのでそのURLをコピればOK<br>

![Screenshot 2024-11-08 12 48 51](https://github.com/user-attachments/assets/38aa7e36-4c44-4f0e-83f4-1db10a1477ff)
