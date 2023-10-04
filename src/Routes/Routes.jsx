import { createBrowserRouter } from "react-router-dom";
import Root from "./leyouts/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import NewsDetails from "../Pages/Home/NewsDetails";
import PrivateRoute from "./Private/PrivateRoute";

 const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/news.json')
            },
            {
                path:"/news/:id",
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
 ])

 export default routes