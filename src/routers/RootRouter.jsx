import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import About from "@/pages/UserSide/About";
// import RootFile from "@/layout/RootFile";
import Home from "@/pages/UserSide/Home";
import Login from "@/pages/UserSide/Login";
import { createBrowserRouter } from "react-router-dom";

const rootRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    index:true,
                    path:"/",
                    element: <Home/>
                },
                {
                    index:true,
                    path:"/about",
                    element: <About/>
                },
                {
                    index:true,
                    path:"/login",
                    element: <Login/>
                },
                {
                    path: "*",
                    element: <ErrorPage />,
                  },
            ]
        }
    ]
)
export default rootRouter;