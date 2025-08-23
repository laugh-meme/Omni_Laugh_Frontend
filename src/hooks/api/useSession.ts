import { useQuery } from "@tanstack/react-query";
import { checkSessionAvailability } from "../../api/session.api";

export const useCheckSessionAvailability = () => {
    return useQuery({
        queryKey: ['wallet-connections'],
        queryFn: () => checkSessionAvailability(),
    })
}