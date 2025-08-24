import { AxiosResponse } from "axios";
import { baseApi } from "../contants/axios_config";

type test = {
    data?: boolean | string | object;
    message: string;
    code: string;
}

export const checkSessionAvailability = async () => {
    const response: Promise<AxiosResponse<any,any>> = baseApi.get('/session/check_session')
    const data: test = (await response).data
    return data;
}

export const fetchNonce = async () => {
    const response: Promise<AxiosResponse<any,any>> = baseApi.get('/session/nonce')
    const data: test = (await response).data
    return data;
}