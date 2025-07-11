import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TMAInit } from '../tma-init.ts'
import './styles/index.css'

const root = createRoot(document.getElementById('root')!)

 try {
    TMAInit()
    root.render(<App />)
  } catch (e) {
    root.render(<div>Откройте через Telegram</div>)
    console.error(e)
  }