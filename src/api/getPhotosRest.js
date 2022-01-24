import axios from "axios";

// 9uH0ga_2N_JoXWka26ApbWbNp2nELHC8CMtPKi6B7AA

export const GetPhotosRest = async () => {
    const config = {
        method : 'get',
        url :'https://jsonplaceholder.typicode.com/todos',
        // headers : {
        //     Authorization: 'Client-ID 9uH0ga_2N_JoXWka26ApbWbNp2nELHC8CMtPKi6B7AA'
        // }
    }

    console.log('통신 날려따')
    const {data} = axios(config);
    return axios(config);
}
