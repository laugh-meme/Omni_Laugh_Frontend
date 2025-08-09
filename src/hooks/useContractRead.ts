// src/hooks/useContractRead.ts

import { erc20Abi } from "viem";
import { useReadContract } from "wagmi";
import { address as tokenAddress } from "../contants/omni_contract.json"; // token contract address
import { zetachainAthensTestnet } from "viem/chains";

export const useReadBalance = (ownerAddress?: `0x${string}`) => {
    return useReadContract({
        address: (tokenAddress as `0x${string}`), // token contract adresi
        abi: erc20Abi,
        functionName: "balanceOf",
        args: ownerAddress ? [ownerAddress] : undefined,
        chainId: zetachainAthensTestnet.id,
        query: {
            enabled: !!ownerAddress, // sadece ownerAddress geçerliyse sorgu çalışır
        },
    });
};