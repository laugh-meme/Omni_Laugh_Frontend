
interface NavbarP {
	isMobileNavOpen: boolean;
}

const Navbar = ({isMobileNavOpen}: NavbarP) => {

	return (
		<div
			className={`
				fixed top-0 left-0 w-full h-screen bg-brand-color-primary z-40
				transform transition-transform duration-300 ease-in-out
				${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"}
				sm:hidden
			`}
		>
			<div className="flex flex-col mt-35 text-white text-shadow-lg">
				<span className="text-lg font-bold">The SocialFi Injector</span>
				<div className="flex flex-col bg-teal-700 mx-2 border-brand-color-foreground py-3 px-3 rounded-md border-7 border-b border-r">
					<div className="flex flex-row justify-between">
						<div className="w-55 flex justify-center items-center">
							<span className="text-sm font-bold ">Social mining...</span>
						</div>
						<div className="w-45 flex flex-col items-center justify-center">
							<button className="w-full py-2 px-2 mb-3 bg-gray-950 border border-white rounded-md text-xs font-bold cursor-pointer">CONNECT WALLET</button>
							<button className="w-full py-2 px-2 bg-blue-300 border border-blue-400 rounded-md text-xs font-bold cursor-pointer">Select Social Media</button>
						</div>
					</div>

					<div className="flex justify-start mt-4 mr-20">
						<div className=" p-2 bg-fuchsia-300 rounded-lg">
							<div className="p-1 border border-white rounded-lg text-xs font-semibold text-shadow-none">
								Activity Box for recently claimed $LMAO tokens and other important informations
							</div>
						</div>

					</div>

					<div className="flex justify-between mt-10">
						<div className="w-50 flex flex-col ">
							<div className="flex justify-center items-center">
								<button className="py-2 px-2 mb-0.5 min-w-fit bg-brand-color-foreground border-brand-color-primary border text-brand-color-primary text-xs font-semibold rounded-xl">VERIFIED</button>
							</div>
							<button className=" py-3 px-1 mb-0.5 bg-brand-color-secondary text-black text-[8.5px] font-semibold rounded-xl cursor-pointer">Authenticate x/Twitter Account</button>
						</div>

						<div className="ml-5 w-50 flex flex-col ">
							<div className="flex justify-center items-center">
								<button className="py-2 px-2 mb-0.5 min-w-fit bg-brand-color-foreground border-brand-color-primary border text-brand-color-primary text-xs font-semibold rounded-xl">VERIFIED</button>
							</div>
							<button className=" py-3 px-1 mb-0.5 bg-brand-color-secondary text-black text-[8.5px] font-semibold rounded-xl cursor-pointer">Input @LMAO bot reply link</button>
						</div>
					</div>
				</div>

				<div className="flex justify-center mt-5">
					<button 
						className="w-1/2 py-1 px-1 text-brand-color-secondary rounded-lg mr-2 font-bold cursor-pointer"
						// Tailwind did not work on borders I don't know why
						style={{
							borderTop: '7px solid #b2f2bb',
							borderLeft: '7px solid #b2f2bb',
							borderBottom: '2px solid #b2f2bb',
							borderRight: '2px solid #b2f2bb',
						}}
					>
						Claim 5,000 LMAO
					</button>
					<button className="min-w-fit w-1/7 py-1 px-3 bg-red-400 rounded-lg ml-2 cursor-pointer">Reject</button>
				</div>

				<div className="flex justify-center mt-5 px-10">
					<button className="w-full py-1 px-1 bg-white text-blue-400 text-nowrap text-xs rounded-lg mr-1 font-bold cursor-pointer">
						Stake $LMAO to earn rewards
					</button>
					<button className="min-w-fit text-nowrap w-1/5 py-1 px-2 bg-red-400 text-xs rounded-lg ml-1 cursor-pointer">Swap Tokens</button>
				</div>

				<div className="flex justify-center mt-5 px-5">
					<div className="min-w-fit w-full text-nowrap py-3 px-2 bg-brand-color-foreground text-black text-sm rounded-lg">
							Top web3/cryptocurrency news/crypto ads
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;