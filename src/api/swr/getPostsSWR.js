import axios from "axios";

// 9uH0ga_2N_JoXWka26ApbWbNp2nELHC8CMtPKi6B7AA

export const getPostsSWR = async (url) => {
    const config = {
        url,
        method : 'get',
        headers : {
            Authorization : 'Client-ID 9uH0ga_2N_JoXWka26ApbWbNp2nELHC8CMtPKi6B7AA'
        }
    }
    const result = await axios(config)
    return result.data
}
