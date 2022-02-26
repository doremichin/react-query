import styled from 'styled-components'
import ReactQuery from "./page/ReactQuery";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from "./view/_shared/header";
import {GlobalStyle} from "./style/GlobalStyle";
import Routers from "./Routers";


const queryClient = new QueryClient()

const App = () => {
    return(
        <QueryClientProvider client={queryClient}>
            <GlobalStyle/>
            <Container>
                <Header/>
                <Routers/>
            </Container>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
};

const Container = styled.div`

`;

export default App;
