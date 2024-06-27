import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import UseAddNewJob from "../../hooks/useAddNewJob";
import toast from "react-hot-toast";
import CompanyJobCard from "../../components/jobCard/companyJobCard";

const AddNewJob = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const companyId = userData?._id;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
  
    const fetchCompanyJobs = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/api/fetchCompanyPostedJob/fetchCompanyJobs${companyId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch company jobs");
        }
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchCompanyJobs();
  }, [companyId,BASE_URL]);

  //-----------------------------------------------------------------------------------------------------------------------------------------------

  const [inputs, setInputs] = useState({
    companyId: companyId,
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    jobLocation: "",
    jobType: "",
    jobExperience: "",
    jobIncome: "",
    applyBeforeDate: "",
    jobPosts: "",
    jobURL: "",
    companyWebsite: "",
  });

  const { AddJobData } = UseAddNewJob();
  const handleCompanySubmit = async (e) => {
    e.preventDefault();


    await AddJobData(inputs);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-200 h-auto">
        <Navbar color="slate-200" homeRoute={false} />

        <div className="w-2/5 p-6 rounded-lg shadow-md bg-white m-10  max-[1300px]:w-2/4 max-[900px]:w-2/3 max-[700px]:w-full ">
          <h1 className="text-3xl font-semibold text-center text-gray-500 pb-2">
            Add New{" "}
            <Link to={"#"}>
              <span className="text-mygreen"> Job</span>
            </Link>
          </h1>
          <hr className="p-2" />
          <form onSubmit={handleCompanySubmit}>

            <div>
              <select
                name=""
                onChange={(e) =>
                  setInputs({ ...inputs, jobTitle: e.target.value })
                }
                className="w-full py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full "
              >
                <option value="" disabled hidden selected>
                  Job Title:*
                </option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Flutter Developer">Flutter Developer</option>
                <option value="Android Developer">Android Developer</option>
              </select>
            </div>

            <div>
              <label className="label  ">
                <span className="text-base label-text">Company Name:</span><span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.companyName}
                onChange={(e) =>
                  setInputs({ ...inputs, companyName: e.target.value })
                }
              />
            </div>

            <div>
              <select
                name=""
                id=""
                className="w-full py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full"
                onChange={(e) =>
                  setInputs({ ...inputs, jobType: e.target.value })
                }
              >
                <option value="" disabled hidden selected className="">
                  Job Type:*
                </option>
                <option value="Full Time" className="text-lg ">
                  Full Time{" "}
                </option>
                <option value="Part Time" className="text-lg ">
                  Part Time{" "}
                </option>
                <option value="Contract" className="text-lg ">
                  Contract{" "}
                </option>
              </select>
            </div>

            <div>
              <select
                name=""
                id=""
                className="w-full py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full"
                onChange={(e) =>
                  setInputs({ ...inputs, jobLocation: e.target.value })
                }
              >
                <option value="" disabled hidden selected className="">
                  Job Location:*
                </option>
                <option value="In-Office" className="text-lg ">
                  In-Office{" "}
                </option>
                <option value="Remote" className="text-lg ">
                  Remote{" "}
                </option>
                <option value="Hybrid" className="text-lg ">
                  Hybrid{" "}
                </option>
              </select>
            </div>

            <div>
              <select
                name=""
                id=""
                className="w-full py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full"
                onChange={(e) =>
                  setInputs({ ...inputs, jobExperience: e.target.value })
                }
              >
                <option value="" disabled hidden selected className="">
                  Job Experience:*
                </option>
                <option value="Fresher" className="text-lg ">
                  Fresher
                </option>
                <option value="Experienced " className="text-lg ">
                  Experienced{" "}
                </option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Job Description:</span><span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                placeholder=""
                className="w-full input input-bordered h-32 border rounded-lg my-1 text-lg"
                value={inputs.jobDescription}
                onChange={(e) =>
                  setInputs({ ...inputs, jobDescription: e.target.value })
                }
              ></textarea>
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Salary: (₹/month)</span><span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.jobIncome}
                onChange={(e) =>
                  setInputs({ ...inputs, jobIncome: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Apply Before:</span><span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.applyBeforeDate}
                onChange={(e) =>
                  setInputs({ ...inputs, applyBeforeDate: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">
                  Total job posts: (in digits)
                </span><span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.jobPosts}
                onChange={(e) =>
                  setInputs({ ...inputs, jobPosts: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">
                  Company Website Link:
                </span><span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.companyWebsite}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    companyWebsite: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Job Apply Link:</span><span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                value={inputs.jobURL}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    jobURL: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <button className="h-9 w-full border border-gray-400 font-bold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-mygreen hover:text-white ">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="w-full">
          {Jobs.map((job) => (
            <CompanyJobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};
export default AddNewJob;
