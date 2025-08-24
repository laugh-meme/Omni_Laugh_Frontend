import { useQuery } from "@tanstack/react-query";
import { checkSessionAvailability, fetchNonce } from "../../api/session.api";
import { isAddress } from "viem";

export const useCheckSessionAvailability = () => {
    return useQuery({
        queryKey: ['wallet-connections'],
        queryFn: () => checkSessionAvailability(),
        staleTime: 1000,
        refetchOnWindowFocus: false
    })
}

export const useFetchNonce = (walletAddress: `0x${string}`, sessionStatus: string | undefined) => {
    const isAddressValid = isAddress(walletAddress);

    return useQuery({
        queryKey: ['fetch-nonce'],
        queryFn: () => fetchNonce(),
        staleTime: 1000,
        enabled: isAddressValid && sessionStatus == 'NO_SESSION',
        refetchOnWindowFocus: false

    })
}