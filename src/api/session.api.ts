import { baseApi } from "../contants/axios_config";

export const checkSessionAvailability = async () => {
    try {
       return baseApi.get('/session/check_session')
    } catch (err) {

    }
}