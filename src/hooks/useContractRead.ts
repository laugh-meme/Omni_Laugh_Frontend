import { useReadContract } from "wagmi";
import { erc20Abi } from "viem";
import { zetachainAthensTestnet } from "viem/chains";
import { address as tokenAddress } from "../contants/omni_contract.json"; 

export const useReadBalance = (ownerAddress?: `0x${string}`) => {
    return useReadContract({
        address: (tokenAddress as `0x${string}`), 
        abi: erc20Abi,
        functionName: "balanceOf",
        args: ownerAddress ? [ownerAddress] : undefined,
        chainId: zetachainAthensTestnet.id,
        query: {
            enabled: !!ownerAddress, 
        },
    });
};