import axios from "axios";

export const getPostsSWR = url => axios.get(url).then(res => res.data)
