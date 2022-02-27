import styled from 'styled-components'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <Container>
            <Nav>
                <NavItem to={'/add'}>Add-Post</NavItem>
                <NavItem to={'/'}>React-Query</NavItem>
                <NavItem to={'/swr'}>SWR</NavItem>
                <NavItem to={'/swr-page'}>SWR-Page</NavItem>
            </Nav>
        </Container>
    )
};

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  
`;
const Nav = styled.div`
  
`;
const NavItem = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 10px;
  margin: 0 10px;
  font-weight: 500;
`;

export default Header;
