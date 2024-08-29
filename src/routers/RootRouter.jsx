import RootFile from "@/layout/RootFile";
import Home from "@/pages/UserSide/Home";
import { createBrowserRouter } from "react-router-dom";

const rootRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<RootFile/>,
            children:[
                {
                    index:true,
                    path:"/",
                    element: <Home/>
                },
            ]
        }
    ]
)
export default rootRouter;