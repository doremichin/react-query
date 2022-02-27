import axios from "axios";

export const setPostRest = async (data = {}) => {
    const config = {
        method : 'post',
        url : `https://jsonplaceholder.typicode.com/posts`,
        data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    const result = await axios(config);
    console.log(result)
    return result
}
