import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UseLogin = () =>{
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const UserLogin = async ({ userName, password }) =>{
        const success = handleUserInputError({  userName, password })
        if(success) return;
        try {
            const res = await fetch(`${BASE_URL}/api/userauth/userlogin`,{
                method : "POST",
                headers:{"content-Type":"application/json"},
                body: JSON.stringify({ userName, password }),
                credentials: 'include'
            });
            const data = await res.json();
            console.log(data);
            if(data){
                navigate("/portalPage");
            }
			localStorage.setItem("userData", JSON.stringify(data));

            if(data.error){
                throw new Error(data.error)
            }
            toast.success("Loged In Successfully");

        } catch (error) {
			toast.error(error.message);
            navigate("/login")
        }
    }
    

    // ----------------------------company login --------------------------

    const CompanyLogin = async ({  companyUserName, password }) =>{
        const success = handleCompanyInputError({  companyUserName, password })
        if(success) return;
        try {
            const res = await fetch(`${BASE_URL}/api/companyauth/companylogin`,{
                method : "POST",
                headers:{"content-Type":"application/json"},
                body: JSON.stringify({  companyUserName, password }),
                credentials: 'include'
            });
            const data = await res.json();
            
            if(data.error){
                throw new Error(data.error)
            }

            if(data){
                navigate("/addNewJob")
            }
			localStorage.setItem("userData", JSON.stringify(data));
            
            toast.success("Loged In Successfully");
            

        } catch (error) {
			toast.error(error.message);
        }
    }
    return {UserLogin, CompanyLogin}
}
export default UseLogin;

function handleUserInputError({ userName, password }){
    if( !userName || !password ){
        toast.error("Please fill in all fields");
        return true
    }
}

function handleCompanyInputError({  companyUserName, password}){
    if( !companyUserName || !password ){
        toast.error("Please fill in all fields");
        return true
    }
}