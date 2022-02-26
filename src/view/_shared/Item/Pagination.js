import styled from 'styled-components'

const Pagination = ({currentPage = 1, limit = 5 , setPage = () => {}}) => {
    const pages = setPageButton();
    function setPageButton () {
        // 페이지 버튼이 최대 5개까지(limit) 표시되어야 할때
        // 3페이지 부터는 선택된 페이지를 기준으로 -2개, +2개 버튼이 표시되어야함
        // 설명하기가 좀 애매하네
        const result = [];
        const minValue = Math.floor(limit/2)
        // 3페이지부터 적용되는 로직
        if(currentPage - minValue > 0){
            for(let i = 0 ; i < limit ; i++){
                result.push(currentPage - minValue + i);
            }

        }else {
            // 1,2 페이지 일때 적용 되는 로직
            for(let i = 0 ; i < limit ; i++){
                result.push(i+1);
            }
        }
        return result;
    }
    return(
        <Container>
            {
                pages.map((item, index) =>
                    <PageButton
                        key={index}
                        onClick={() => setPage(item)}
                        disabled={item === currentPage ? true : false}
                    >
                        {item}
                    </PageButton>
                )
            }
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  
`;
const PageButton = styled.button`
    margin: 3px;
`;

export default Pagination;
