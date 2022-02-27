import axios from "axios";

// 9uH0ga_2N_JoXWka26ApbWbNp2nELHC8CMtPKi6B7AA

export const getPostsRest = async (id) => {
    const config = {
        method : 'get',
        url : id ? `https://jsonplaceholder.typicode.com/posts/${id}` : `https://jsonplaceholder.typicode.com/posts/`,
        // headers : {
        //     Authorization: 'Client-ID 9uH0ga_2N_JoXWka26ApbWbNp2nELHC8CMtPKi6B7AA'
        // }
    }

    console.log('통신 날려따')
    // const {data} = axios(config);  ...data 리턴하면 undefined로 나옴...
    return axios(config);
}
