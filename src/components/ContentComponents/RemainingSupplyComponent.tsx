import { useEffect, useState } from "react";
import { useReadBalance } from "../../hooks/useContractRead";
import { formatUnits } from "viem";
import { showError } from "../../utils/toastMsg";

type RemainingSupplyP = {
    address?: `0x${string}`;
};

const RemainingSupplyComp = ({ address }: RemainingSupplyP)  => {

    const {data, status, error} = useReadBalance(address)
    const [balance, setBalance] = useState<bigint | null>(null)

    useEffect(() => {
        console.log(status, data, error)
        if (status === "success" && data !== undefined) {
            setBalance(data);
        } else if (status === "error" && address) {
            console.error("Balance fetch error:", error);
            showError('An error occurred while fetching token balance.');
            setBalance(null);
        }
    }, [status]);

    return <div className=" w-full text-center text-sm sm:text-lg md:text-xl mx-auto text-brand-color-fourth font-bold">
        {address && (balance !== null ? Number(formatUnits(balance, 18)).toLocaleString(): 'Loading...')}
    </div>
}

export default RemainingSupplyComp;