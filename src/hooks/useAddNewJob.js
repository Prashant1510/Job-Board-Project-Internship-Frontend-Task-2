
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const UseAddNewJob = () =>{
    // const navigate = useNavigate();
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const AddJobData = async ({ jobTitle, companyName, jobDescription, jobLocation, jobType, jobExperience, jobIncome, jobPosts, applyBeforeDate, jobURL ,companyWebsite , companyId}) =>{
        const success = handleCompanyInputError({ jobTitle, companyName, jobDescription, jobLocation, jobType, jobExperience, jobIncome, jobPosts, applyBeforeDate, jobURL ,companyWebsite, companyId })
        if(success) return;
        try {
            const res = await fetch(`${BASE_URL}/api/saveJobData/savejob`,{
                method : "POST",
                headers:{"content-Type":"application/json"},
                body: JSON.stringify({ jobTitle, companyName, jobDescription, jobLocation, jobType, jobExperience, jobIncome, jobPosts, applyBeforeDate, jobURL ,companyWebsite, companyId }),
                credentials: 'include'
            });
            const data = await res.json();
            
            if(data.error){
                throw new Error(data.error)
            }
            if(data){
                toast.success("Job data saved successfully");
                window.location.reload();
            }
        } catch (error) {
			toast.error(error.message);
        }
    }


    const DeleteJobData = async(id) =>{

        try {
            console.log(id);
            const res = await fetch(`${BASE_URL}/api/deleteCompanyPostedJob/deleteCompanyJobs${id}`,{
                method: "DELETE",
                headers:{
                    "content-Type":"application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            
            if(data.error){
                throw new Error(data.error)
            }
            if(res.ok){
                toast.success("Data deleted successfully")
                window.location.reload();


            }
        } catch (error) {
			toast.error(error.message);
        }
    }


    return {AddJobData, DeleteJobData}
}
export default UseAddNewJob;


function handleCompanyInputError({ jobTitle, companyName, jobDescription, jobLocation, jobType, jobExperience, jobIncome, jobPosts, applyBeforeDate, jobURL ,companyWebsite, companyId }){
    if( !jobTitle || !companyName || !jobDescription || !jobLocation || !jobType || !jobExperience || !jobIncome || !jobPosts || !applyBeforeDate || !jobURL || !companyWebsite || !companyId ){
        toast.error("Please fill in all fields");
        return true
    }
    if(jobDescription.length < 100){
    toast.error("Description must have atleast 100 characters")
    return true
    }
}