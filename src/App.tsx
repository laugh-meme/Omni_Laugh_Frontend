
import { useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderComp from "./components/HeaderComponents/HeaderComponent.tsx";


import Login from "./pages/Login.tsx";
import Home from './pages/Home';
import NFTHub from "./pages/NFTHub.tsx";
import DEX from "./pages/DEX.tsx";
import Settings from "./pages/Settings.tsx";
import Profile from "./pages/Profile.tsx";
import Connection from "./pages/Connection.tsx";
import Tokenomics from "./pages/Tokenomics.tsx";
import { Slide, ToastContainer } from "react-toastify";
import Test from "./pages/Test.tsx";



function App() {
  const { isConnected } = useAppKitAccount();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const toggleMobileNavMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
	};

  const [connected] = useState(false);

  return (
    <div id='all'>
      <div id='body' className="bg-brand-color-primary overflow-y-hidden">
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
        />

        <Router>
        {isConnected || connected ? (
          <>
            <HeaderComp isMobileNavOpen={isMobileNavOpen} toggleMobileNavMenu={toggleMobileNavMenu} />
            <main className='mt-5'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home/>} />

                <Route path="/login" element={<Login toggleMobileNavMenu={toggleMobileNavMenu}/>}></Route>
                <Route path="/tokenomics" element={<Tokenomics />}></Route>


                <Route path="/nft_hub" element={<NFTHub />} />
                <Route path="/dex" element={<DEX />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/settings" element={<Settings/>} />

                <Route path="/test" element={<Test />} />
              </Routes>
            </main>
            <footer>

            </footer>
          </>
        ) : (
          <main>
            <Routes>
                <Route path="/" element={<Login toggleMobileNavMenu={toggleMobileNavMenu}/>}></Route>
                <Route path="*" element={<Login toggleMobileNavMenu={toggleMobileNavMenu}/>} />
                <Route path="/tokenomics" element={<Tokenomics />}></Route>
                <Route path="/connect" element={<Connection />}></Route>
            </Routes>
          </main>
        )}
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
