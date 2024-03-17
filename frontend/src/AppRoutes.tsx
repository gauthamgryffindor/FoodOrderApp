import { Navigate,Routes,Route } from "react-router-dom";
import Layout from "@/Layouts/layout";
import HomePage from "./Pages/HomePage";

const AppRoutes=()=>{
    return(
    <Routes>
        <Route path="/" element={<Layout><HomePage/> </Layout>}/>
        <Route path="/user-profiles" element={<span>user data</span>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        
    </Routes>
    );
};
export default AppRoutes;