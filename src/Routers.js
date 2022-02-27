import {Route, Routes} from "react-router-dom";
import ReactQuery from "./page/ReactQuery";
import Swr from "./page/Swr";
import SwrPage from "./page/SwrPage";
import RQDetail from "./page/RQDetail";
import RQAddPost from "./page/RQAddPost";

const Routers = () => {
    return(
        <Routes>
            <Route path={'/'} element={<ReactQuery/>}/>
            <Route path={'/swr'} element={<Swr/>}/>
            <Route path={'/swr-page'} element={<SwrPage/>}/>
            <Route path={'/post/:id'} element={<RQDetail/>}/>
            <Route path={'/add'} element={<RQAddPost/>}/>
        </Routes>
    )
};

export default Routers;
