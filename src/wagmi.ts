import { http, createConfig } from 'wagmi'
import { zetachain, zetachainAthensTestnet } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [zetachain, zetachainAthensTestnet],
  connectors: [
    injected(),
    coinbaseWallet(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [zetachain.id]: http(),
    [zetachainAthensTestnet.id]: http(),

  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
