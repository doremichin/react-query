import styled from 'styled-components'
import useSWR from 'swr'
import {getPostsSWR} from "../../../api/swr/getPostsSWR";



const SwrContainer = () => {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', getPostsSWR)
    console.log(data)
    return(
        <Container>
            SwrContainer
        </Container>
    )
};

const Container = styled.div`

`;

export default SwrContainer;
