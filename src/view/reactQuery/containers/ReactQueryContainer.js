import styled from 'styled-components'
import {useQuery} from "react-query";
import {GetPhotosRest} from "../../../api/getPhotosRest";

const ReactQueryContainer = () => {

    const {isLoading, error, data, isFetching} = useQuery(
        'getPhoto',
        () => GetPhotosRest(),
        {
            onSuccess : () => {console.log('성공해따')}, // 데이터 가져오는 걸 성공하면 실행할 함수
            refetchOnWindowFocus : false, // 윈도우 다시 포커스 될때 데이터 요청하는 처리를 끔
        }
    )
    const items = data?.data;
    if(isLoading) return '로딩중이지롱'

    if(isFetching) return '??'

    return(
        <Container>
            {items.map((item,index) => <Todo key={index}>{item.title}</Todo>)}
        </Container>
    )
};

const Container = styled.div`

`;
const Todo = styled.div`
  
`;
export default ReactQueryContainer;
