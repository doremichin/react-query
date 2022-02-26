import styled from 'styled-components'
import useSWR from 'swr'
import {getPostsSWR} from "../../../api/swr/getPostsSWR";
import MainList from "../../_shared/List/MainList";
import SwrPhotoItem from "../components/SwrPhotoItem";



const SwrContainer = () => {
    const { data, error } = useSWR('https://api.unsplash.com/photos', getPostsSWR)
    if (error) return <div>데이터 불러오는데 에러 났다야</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    return(
        <Container>
            <MainList data={data}>
                {(item,index) => <SwrPhotoItem item={item} key={index}/>}
            </MainList>
        </Container>
    )
};

const Container = styled.div`

`;

export default SwrContainer;
