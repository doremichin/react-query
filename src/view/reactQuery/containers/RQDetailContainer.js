import styled from 'styled-components'
import {useQuery} from "react-query";
import {getPostsRest} from "../../../api/react-query/getPostsRest";
import LoadingSpinner from "../../_shared/Item/LoadingSpinner";
import {useParams} from "react-router-dom";

const RQDetailContainer = () => {
    const {id} = useParams();
    const {isLoading, error, data, isFetching} = useQuery(
        ['getPosts',id],
        () => getPostsRest(id),
        {
            onSuccess : () => {console.log('성공해따')}, // 데이터 가져오는 걸 성공하면 실행할 함수
            refetchOnWindowFocus : false, // 윈도우 다시 포커스 될때 데이터 요청하는 처리를 끔
        }
    )
    if(isLoading) return <LoadingSpinner/>

    const postById = data.data;
    return(
        <Container>
            <Title>
                {postById.title}
            </Title>
            <Desc>
                {postById.body}
            </Desc>
        </Container>
    )
};

const Container = styled.div`

`;
const Title = styled.div`
  
`;
const Desc = styled.div`
  
`;

export default RQDetailContainer;
