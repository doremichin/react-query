import styled from 'styled-components'

const MainList = ({data , children}) => {
    return(
        <Container>
            <Row>
                {data.map((item,index) => <Col>{children(item,index)}</Col>)}
            </Row>
        </Container>
    )
};

const Container = styled.div`

`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 33.33%;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export default MainList;
