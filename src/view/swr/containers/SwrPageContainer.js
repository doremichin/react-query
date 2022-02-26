import styled from 'styled-components'
import {useState} from "react";
import useSWR from "swr";
import {getPostsSWR} from "../../../api/swr/getPostsSWR";
import MainList from "../../_shared/List/MainList";
import SwrPhotoItem from "../components/SwrPhotoItem";

const SwrPageContainer = () => {
    const [pageIndex ,setPageIndex] = useState(1);

    const { data  } = useSWR(`https://api.unsplash.com/photos?page=${pageIndex}`, getPostsSWR);

    if(!data) return "Loading....";

    return(
        <Container>
            <MainList data={data}>
                {(item, index) => <SwrPhotoItem item={item} key={index}/>}
            </MainList>
            <ButtonBox>
                <Button onClick={() => setPageIndex(pageIndex -1)}>이전 페이지</Button>
                <Button onClick={() => setPageIndex(pageIndex +1)}>다음 페이지</Button>
            </ButtonBox>
        </Container>
    )
};

const Container = styled.div`

`;
const ButtonBox = styled.div`
  
`;
const Button = styled.button`
  
`;

export default SwrPageContainer;
