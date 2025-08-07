
const LMAOTokenBurn = () => {
    return (
        <div className="text-white sm:px-30 lg:px-50">
            <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl xl:4xl">LMAO Token Burn</h1>

            <h2 className="sm:text-xl md:text-2xl font-bold mt-5">Fan Token Burn: </h2>
            <ul className="list-disc ml-2 text-lg xl:text-2xl mt-5 sm:mt-10 flex flex-col gap-3">
                <li>Any unallocated token after the duration of the Fan donation will be burnt e.g., 10 billion token allocated, the remaining 0 tokens will be burnt and the burnt address disclosed publicly via official Omni_Laugh handles.  </li>
                <li><span className="font-bold">Benefit: </span>This reduces $LMAO circulating supply which is inline with the omni_Laugh utility deflation mechanism.  </li>
            </ul>

            <h2 className="sm:text-xl md:text-2xl font-bold mt-5">Periodic Transaction-Based Burns:</h2>
            <ul className="list-disc ml-2 text-lg xl:text-2xl mt-5 sm:mt-10 flex flex-col gap-3">
                <li>5% of fees/subscriptions collected from various utilities powered by $LMAO token will be burnt quarterly and burns disclosed publicly via official Omni_Laugh handles. I.e 5% of tokens collected as fees from $LMAO Utilities will be burnt quarterly(e.g. 5% of Transaction fees collected from trades, NFT minting, and token trading on TanoshiiSwap and 5% subscription fees from FunXplural web3 browser will be burnt).</li>
                <li><span className="font-bold">Details: </span>If 100,000 $lmao is charged as fees quarterly, 5% of 100,000 = 5000 $LMAO will be burnt quarterly.</li>
                <li><span className="font-bold">Benefit: </span>This creates a deflationary mechanism of the $LMAO token over time which aligns with the Omni_Laugh project deflationary system.  </li>

            </ul>

            <h2 className="sm:text-xl md:text-2xl font-bold mt-5">DLU/Milestone-Based Burns:  </h2>
            <ul className="list-disc ml-2 text-lg xl:text-2xl mt-5 sm:mt-10 flex flex-col gap-3">
                <li>{`After the launch of a startup on the DLUP, 5% of the total amount of the LMAO raised in support of the project will be burnt from the SocialFi Allocation. (e.g., 1,000,000 $LMAO raised for Project-Ab on the DLUP <->  50,000 $lmao burnt from SocialFi Allocation = 749.9billion $lmao left on the SocialFi Allocation Pool).  `}</li>
                <li><span className="font-bold">Benefit: </span>This practice does not only reaffirm Omni_Laugh commitment to its deflatory root but it also ensures that all LMAO token holders will continually benefit systematically from the DLUP.</li>

            </ul>
        </div>
    )
}

export default LMAOTokenBurn;