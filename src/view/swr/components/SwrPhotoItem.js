import styled from 'styled-components'

const SwrPhotoItem = ({item}) => {
    return(
        <Container>
            <Image>
                <img src={item.urls.small} alt=""/>
            </Image>
        </Container>
    )
};

const Container = styled.div`
  
`;
const Image = styled.div`
  img{
    height: 300px;
    object-fit: cover;
  }
`;

export default SwrPhotoItem;
