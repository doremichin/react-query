import styled from 'styled-components'
import {useQuery} from "react-query";
import {getPostsRest} from "../../../api/react-query/getPostsRest";
import LoadingSpinner from "../../_shared/Item/LoadingSpinner";
import RQPostItem from "../components/RQPostItem";
import MainList from "../../_shared/List/MainList";
import {useNavigate} from "react-router-dom";

const ReactQueryContainer = () => {
    const navigate = useNavigate();
    const {isLoading, error, data, isFetching} = useQuery(
        ['getPosts'],
        () => getPostsRest(),
        {
            onSuccess : () => {console.log('성공해따')}, // 데이터 가져오는 걸 성공하면 실행할 함수
            refetchOnWindowFocus : false, // 윈도우 다시 포커스 될때 데이터 요청하는 처리를 끔
        }
    )
    if(isLoading) return <LoadingSpinner/>

    if(isFetching) return '??'
    const posts = data?.data;
    const handleClickPost = (item) => {
        console.log(item)
        navigate(`/post/${item}`)
    }

    return(
        <Container>
            <Title>
                이 페이지의 데이터는 React-Query를 사용해 불러옴
            </Title>
            <MainList data={posts}>
                {(item,index) => <RQPostItem key={index} item={item} handleClick={handleClickPost}/>}
            </MainList>
        </Container>
    )
};

const Container = styled.div`

`;
const Title = styled.h3`
  
`;
export default ReactQueryContainer;
