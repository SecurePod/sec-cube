'use client'

import Editor, { Monaco, loader } from '@monaco-editor/react'
import React, { useRef } from 'react'


type EditorConfig = {
  mode: string
  code: string
}

export const data: EditorConfig = {
  mode: 'php',
  code: `<!DOCTYPE html>
  <html lang="ja">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <title>ログインフォーム</title>
  </head>
  <body>
  <?php 
  
  $dsn = 'mysql:dbname=db;host=db';
  $user = 'user';
  $password = 'password';
  
  //ログイン認証
  if (isset($_POST['name']) && isset($_POST['password'])) {
      $name = $_POST['name'];
      $pass = $_POST['password'];    
      $sql = "SELECT * FROM users WHERE name = '$name' AND password = '$pass';";
      $dbh = new PDO($dsn, $user, $password);
      $result = $dbh->query($sql);
      $result = $result->fetch();
      if ($result) {
          $msg = 'ログインしました';
          $link = '<a href="index.php">ホーム</a>';
      } else {
          $msg = 'ユーザーネームもしくはパスワードが間違っています。';
          $link = '<a href="login.php">戻る</a>';
      }
  } 
  ?>
    <form action="index.php" method="POST">
        <h1>Login</h1>
        <input type="text" name="name" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input class="btn" type="submit" value="Login"/>
        <?php if(isset($msg)){echo $msg;} ?>
    </form>
    </body>
  </html>
  `,
}


const Manaco: React.FC = () => {
  const editorRef = useRef<Monaco | null>(null)

  loader.init().then((monaco) => {
    monaco.editor.defineTheme('myTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {},
    })
  })

  function handleEditorDidMount(editor: Monaco) {
    editorRef.current = editor
  }

  const sendCode = async () => {
    // if (editorRef.current) {
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   reqBody.code = editorRef.current.getValue()
    // }

    // const result = await fetch('http://133.242.19.28:8081/api/v1/docker/write', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     ...reqBody,
    //   }),
    // })
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .catch(() => {
    //     return 'error'
    //   })
  }


  return (
    <>
      <button onClick={sendCode}> Save</button>
      {/* <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
        script.js
      </button>
      <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
        style.css
      </button>
      <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
        index.html
      </button> */}
      <Editor
        height='80vh'
        theme='myTheme'
        options={{
          fontSize: 16,
        }}
        defaultLanguage={data.mode}
        defaultValue={data.code}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onMount={handleEditorDidMount}
      />
    </>
  )
}

export default Manaco
