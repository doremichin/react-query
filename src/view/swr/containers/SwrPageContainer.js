import styled from 'styled-components'
import {useState} from "react";
import useSWR from "swr";
import {getPostsSWR} from "../../../api/swr/getPostsSWR";
import MainList from "../../_shared/List/MainList";
import SwrPhotoItem from "../components/SwrPhotoItem";
import Pagination from "../../_shared/Item/Pagination";
import PerPageFilter from "../../_shared/Item/PerPageFilter";
import LoadingSpinner from "../../_shared/Item/LoadingSpinner";

const SwrPageContainer = () => {
    const [pageIndex ,setPageIndex] = useState(1);
    const [perPage , setPerPage] = useState(10);

    const { data  } = useSWR(`https://api.unsplash.com/photos?page=${pageIndex}&per_page=${perPage}`, getPostsSWR);

    if(!data) return <LoadingSpinner/>

    return(
        <Container>
            <ButtonBox>
                <Button onClick={() => setPageIndex(pageIndex -1)}>이전 페이지</Button>
                <Pagination currentPage={pageIndex} limit={5} setPage={setPageIndex}/>
                <Button onClick={() => setPageIndex(pageIndex +1)}>다음 페이지</Button>
            </ButtonBox>
            <FilterBox>
                <PerPageFilter setPerPage={setPerPage} perPage={perPage}/>
            </FilterBox>
            <MainList data={data}>
                {(item, index) => <SwrPhotoItem item={item} key={index}/>}
            </MainList>
        </Container>
    )
};

const Container = styled.div`

`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FilterBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  margin: 20px;
`;

export default SwrPageContainer;
