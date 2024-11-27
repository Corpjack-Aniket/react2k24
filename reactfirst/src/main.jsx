import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Data,{demo2} from './component/demo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="Aniket" age={23} />
    <Data/>
    <demo2/>
  </StrictMode>,
)
