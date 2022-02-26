import {Route, Routes} from "react-router-dom";
import ReactQuery from "./page/ReactQuery";

const Routers = () => {
    return(
        <Routes>
            <Route path={'/'} element={<ReactQuery/>}/>
        </Routes>
    )
};

export default Routers;
