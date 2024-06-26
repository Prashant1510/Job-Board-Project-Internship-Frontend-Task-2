import toast from "react-hot-toast"
import PropTypes from "prop-types";
import { useState } from "react";

const SearchBar = ({ setJobs }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [inputs, setInputs] = useState({
    jobTitle: "",
    jobType: "",
    jobLocation: "",
    jobExperience: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  }

  const handleReset = () =>{
    window.location.reload();
  }
  const handleSearch = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/searchSpecificJob/searchSpecificJobs`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
        credentials: "include"
      });
      if (!res.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="flex flex-row justify-around items-center max-[700px]:block max-[700px]:m-2 ">
      <select name="jobTitle" onChange={handleChange} className="w-64 mx-2 py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full">
        <option value="" disabled hidden selected>Job Role</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="Flutter Developer">Flutter Developer</option>
        <option value="Android Developer">Android Developer</option>
      </select>
      <select name="jobType" onChange={handleChange} className="w-64 mx-2 py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full">
        <option value="" disabled hidden selected>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select name="jobLocation" onChange={handleChange} className="w-64 mx-2 py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full">
        <option value="" disabled hidden selected>Job Location</option>
        <option value="In-Office">In-Office</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select name="jobExperience" onChange={handleChange} className="w-64 mx-2 py-3 my-4 rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full">
        <option value="" disabled hidden selected>Experience Required</option>
        <option value="Fresher">Fresher</option>
        <option value="Experienced">Experienced</option>
      </select>

      <button onClick={handleSearch} className="w-64 mx-2 py-3 my-4 text-xl rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full hover:text-white hover:bg-mygreen">Search</button>
      <button onClick={handleReset} className="w-64 mx-2 py-3 my-4 text-xl rounded-lg border-2 font-semibold max-[700px]:block max-[700px]:mx-auto max-[700px]:w-full hover:text-white hover:bg-orange-500">Reset</button>

    </div>
  )
}

export default SearchBar

SearchBar.propTypes = {
  setJobs: PropTypes.func.isRequired,
};
