import styled from 'styled-components'

const RQPostItem = ({item, handleClick}) => {
    return(
        <Container onClick={() => handleClick(item.id)}>
            {item.title}
        </Container>
    )
};

const Container = styled.div`
  background-color: #eee;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
`;


export default RQPostItem;
