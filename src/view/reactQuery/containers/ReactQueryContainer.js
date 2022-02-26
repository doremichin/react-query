import styled from 'styled-components'
import {useQuery} from "react-query";
import {getPhotosRest} from "../../../api/react-query/getPhotosRest";
import LoadingSpinner from "../../_shared/Item/LoadingSpinner";

const ReactQueryContainer = () => {

    const {isLoading, error, data, isFetching} = useQuery(
        'getPhoto',
        () => getPhotosRest(),
        {
            onSuccess : () => {console.log('성공해따')}, // 데이터 가져오는 걸 성공하면 실행할 함수
            refetchOnWindowFocus : false, // 윈도우 다시 포커스 될때 데이터 요청하는 처리를 끔
        }
    )
    const items = data?.data;
    if(isLoading) return <LoadingSpinner/>

    if(isFetching) return '??'

    return(
        <Container>
            <Title>
                이 페이지의 데이터는 React-Query를 사용해 불러옴
            </Title>
            {items.map((item,index) => <Todo key={index}>{item.title}</Todo>)}
        </Container>
    )
};

const Container = styled.div`

`;
const Title = styled.h3`
  
`;
const Todo = styled.div`
  
`;
export default ReactQueryContainer;
