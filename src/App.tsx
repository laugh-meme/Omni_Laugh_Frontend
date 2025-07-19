import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './layout/header/Header.tsx'


function App() {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const toggleMobileNavMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
	};

  // Cancell scroll if isMobileNavOpen true.
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavOpen]);

  // const account = useAccount()
  // const { connectors, connect, status, error } = useConnect()
  // const { disconnect } = useDisconnect()

  return (
    <div id='all' className={"bg-white overflow-y-hidden"}>
      <div id='body' className="bg-brand-color-primary m-0.5 overflow-y-hidden">
        <Router>
          <header >
            <Header isMobileNavOpen={isMobileNavOpen} toggleMobileNavMenu={toggleMobileNavMenu} />
          </header>
          <main className='mt-5'>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <footer>

          </footer>
        </Router>
      </div>
     
{/* 
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div> */}
    </div>
  )
}

export default App
