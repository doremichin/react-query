import {Route, Routes} from "react-router-dom";
import ReactQuery from "./page/ReactQuery";
import Swr from "./page/Swr";

const Routers = () => {
    return(
        <Routes>
            <Route path={'/'} element={<ReactQuery/>}/>
            <Route path={'/swr'} element={<Swr/>}/>
        </Routes>
    )
};

export default Routers;
