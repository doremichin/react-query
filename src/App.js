import styled from 'styled-components'
import Main from "./page/Main";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()

const App = () => {
    return(
        <QueryClientProvider client={queryClient}>
            <Container>
                <Main/>
            </Container>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
};

const Container = styled.div`

`;

export default App;
