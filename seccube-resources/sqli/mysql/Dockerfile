# MySQLのベースイメージを使用
FROM mysql:latest

# 環境変数の設定
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=db

# ホストのディレクトリをコンテナ内にマウントするための命令は、
# Dockerfileでは指定できません。これは実行時（docker run）に指定する必要があります。

# 初期化スクリプトの追加
# 注意: このコピーはビルドコンテキスト内のファイル/ディレクトリに依存します。
COPY init.sql /docker-entrypoint-initdb.d/

# MySQLの設定
CMD ["mysqld", "--default-authentication-plugin=mysql_native_password"]

