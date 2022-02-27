import {Route, Routes} from "react-router-dom";
import ReactQuery from "./page/ReactQuery";
import Swr from "./page/Swr";
import SwrPage from "./page/SwrPage";
import RQDetail from "./page/RQDetail";

const Routers = () => {
    return(
        <Routes>
            <Route path={'/'} element={<ReactQuery/>}/>
            <Route path={'/swr'} element={<Swr/>}/>
            <Route path={'/swr-page'} element={<SwrPage/>}/>
            <Route path={'/post/:id'} element={<RQDetail/>}/>
        </Routes>
    )
};

export default Routers;
