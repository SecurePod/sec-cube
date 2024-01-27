'use client'

import { useEffect, useRef } from 'react'
import { Terminal } from 'xterm'
import { AttachAddon } from 'xterm-addon-attach'
import { FitAddon } from 'xterm-addon-fit'
import '@/../xterm/css/xterm.css'
import styles from './style.module.css'

interface TermProps {
  id: string
}

/**
 * @param props パラメータからidを受け取る
 * @returns idを元にwebsocketでssh接続を行う
 */

const Term: React.FC<TermProps> = (props) => {
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // ターミナルの設定
    const terminal = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      rows: 28,
      fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
      theme: { background: '#3a3d4d' },
    })
    const fitAddon = new FitAddon()
    terminal.loadAddon(fitAddon)
    terminal.open(terminalRef.current!)

    // ターミナルに表示するメッセージ
    terminal.writeln('Welcome to\n')
    terminal.writeln('██╗  ██╗ █████╗  ██████╗██╗  ██╗    ███████╗██╗  ██╗███████╗██╗     ██╗     ')
    terminal.writeln('██║  ██║██╔══██╗██╔════╝██║ ██╔╝    ██╔════╝██║  ██║██╔════╝██║     ██║ ')
    terminal.writeln('███████║███████║██║     █████╔╝     ███████╗███████║█████╗  ██║     ██║ ')
    terminal.writeln('██╔══██║██╔══██║██║     ██╔═██╗     ╚════██║██╔══██║██╔══╝  ██║     ██║ ')
    terminal.writeln('██║  ██║██║  ██║╚██████╗██║  ██╗    ███████║██║  ██║███████╗███████╗███████╗')
    terminal.writeln(
      '╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝\n',
    )

    fitAddon.fit()

    function onSize() {
      if (fitAddon !== undefined) {
        fitAddon.fit()
      }
    }
    window.addEventListener('resize', onSize, false)

    const connectWebSocket = () => {
      const webSocket = new WebSocket('ws://133.242.19.28:8080' + '/web-socket/ssh/' + props.id)

      const attachAddon = new AttachAddon(webSocket)
      terminal.loadAddon(attachAddon)

      return webSocket
    }

    const webSocket = connectWebSocket()

    return () => {
      webSocket.close()
    }
  }, [props.id])

  return (
    <>
      <div className={styles.term__wrapper}>
        <div className={styles.term__inner} ref={terminalRef}></div>
      </div>
    </>
  )
}

export default Term
