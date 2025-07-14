import { Buffer } from 'buffer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Bootstrap styles
// import "tailwindcss";
// import 'bootstrap/scss/bootstrap.scss';

// Import global styles
import './styles/global_variables.scss'
import './styles/global.css'
import './styles/tailwind.css'


import App from './App.tsx'
import { config } from './wagmi.ts'

(globalThis as any).Buffer = Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
