import styled from 'styled-components'

const LoadingSpinner = () => {
    return(
        <Container>
            <div className="lds-dual-ring"></div>
        </Container>
    )
};

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000060;
  & .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  & .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


`;

export default LoadingSpinner;
