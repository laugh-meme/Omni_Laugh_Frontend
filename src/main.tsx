import { Buffer } from 'buffer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi'

import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { zetachain, zetachainAthensTestnet } from '@reown/appkit/networks'

// 1. Get projectId from https://dashboard.reown.com
const projectId = 'f7ee1c836013cfb3d1a97f6d3e13ce55'

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set the networks
const networks = [zetachain, zetachainAthensTestnet]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: wagmiAdapter.networks as any,
  defaultNetwork: zetachain,
  projectId,
  metadata,
  debug: true,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    socials: [],
    email: false
  }
})

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import global styles
import './styles/global.css'
import './styles/tailwind.css'

import App from './App.tsx'
// import { config } from './wagmi.ts'

(globalThis as any).Buffer = Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiAdapter.wagmiConfig as any}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
