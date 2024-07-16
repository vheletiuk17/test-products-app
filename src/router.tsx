import {createBrowserRouter, Navigate} from "react-router-dom";
import {ProductsPage} from "./page/ProductsPage";
import {DetailsPage} from "./page/DetailsPage";
import {MainLayouts} from "./layouts/MainLayouts";

const router = createBrowserRouter([
    {path:'', element:<MainLayouts/>, children:[
            {index:true, element:<Navigate to={'products'}/>},
            {path:'products' , element:<ProductsPage/>},
            {path:'details', element:<DetailsPage/>}
        ]}
])

export {
    router
}