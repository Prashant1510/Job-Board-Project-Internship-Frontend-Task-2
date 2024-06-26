import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UseSignUp = () =>{
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const UserSignup = async ({ fullName, userName, password, confirmPassword, gender, profilePic, phoneNumber, emailId }) =>{
        const success = handleUserInputError({ fullName, userName, password, confirmPassword, gender, profilePic, phoneNumber, emailId })
        if(success) return;
        try {
            const res = await fetch(`${BASE_URL}/api/userauth/usersignup`,{
                method : "POST",
                headers:{"content-Type":"application/json"},
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender, profilePic, phoneNumber, emailId }),
                credentials: 'include'
            });
            const data = await res.json();
            if(data){
                toast.success("SingUp Successfully");
                navigate("/portalPage");
            }
			localStorage.setItem("userData", JSON.stringify(data));

            if(data.error){
                throw new Error(data.error)
            }
        } catch (error) {
			toast.error(error.message);
        }
    }
    

    // ----------------------------company signup --------------------------

    const CompanySignup = async ({ companyName, companyUserName, password, confirmPassword, companyLogo, companyWebsite, companyTollfreeNumber, companyDescription, companyEmail }) =>{
        const success = handleCompanyInputError({ companyName, companyUserName, password, confirmPassword, companyLogo, companyWebsite, companyTollfreeNumber, companyDescription, companyEmail })
        if(success) return;
        try {
            const res = await fetch(`${BASE_URL}/api/companyauth/companysignup`,{
                method : "POST",
                headers:{"content-Type":"application/json"},
                body: JSON.stringify({ companyName, companyUserName, password, confirmPassword, companyLogo, companyWebsite, companyTollfreeNumber, companyDescription, companyEmail }),
                credentials: 'include'
            });
            const data = await res.json();
            
            if(data.error){
                throw new Error(data.error)
            }
            if(data){
                toast.success("SingUp Successfully");
            }
            if(res.ok){
                navigate("/addNewJob")
            }
			localStorage.setItem("userData", JSON.stringify(data));

        } catch (error) {
			toast.error(error.message);
        }
    }
    return {UserSignup, CompanySignup}
}
export default UseSignUp;

function handleUserInputError({ fullName, userName, password, confirmPassword, gender, profilePic, phoneNumber, emailId }){
    if( !fullName || !userName || !password || !confirmPassword || !gender || !profilePic || !phoneNumber || !emailId ){
        toast.error("Please fill in all fields");
        return true
    }
    if(password !== confirmPassword){
        toast.error("Password do not matched")
        return true
    }
    if(password.length < 6){
        toast.error("Password must be atleast 6 characters")
        return true
    }
    if(phoneNumber.length < 10){
        toast.error("Phone Number must be atleast 10 characters")
        return true
    }
}

function handleCompanyInputError({ companyName, companyUserName, password, confirmPassword, companyLogo, companyWebsite, companyTollfreeNumber, companyDescription, companyEmail }){
    if( !companyName || !companyUserName || !password || !confirmPassword || !companyLogo || !companyWebsite || !companyTollfreeNumber || !companyDescription || !companyEmail ){
        toast.error("Please fill in all fields");
        return true
    }
    if(password !== confirmPassword){
        toast.error("Password do not matched")
        return true
    }
    if(password.length < 6){
        toast.error("Password must be atleast 6 characters")
        return true
    }
    if(companyTollfreeNumber.length < 10){
    toast.error("Phone Number must be atleast 10 characters")
    return true
    }
}