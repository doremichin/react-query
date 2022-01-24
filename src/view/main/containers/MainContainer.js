import styled from 'styled-components'
import {useQuery} from "react-query";
import {GetPhotosRest} from "../../../api/getPhotosRest";

const MainContainer = () => {

    const {isLoading, error, data, isFetching} = useQuery('getPhoto',() => GetPhotosRest())
    const items = data?.data;
    if(isLoading) return '로딩중이지롱'

    if(isFetching) return '??'

    console.log(items)

    return(
        <Container>
            MainContainer
        </Container>
    )
};

const Container = styled.div`

`;

export default MainContainer;
