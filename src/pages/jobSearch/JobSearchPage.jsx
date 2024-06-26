import JobCard from "../../components/jobCard/JobCard"
import Navbar from "../../components/navbar/Navbar"
import SearchBar from "../../components/searchBar/SearchBar"

import { useState,useEffect } from "react"

const JobSearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const fetchJobs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/fetchjobs/fetchalljobs`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', 
        });
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }

        const data = await response.json();
        setJobs(data);

      } catch (error) {
        setError(error.message);

      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);





  return (
    <>
        <Navbar color="blue-300" homeRoute={false}/>
        <div className="flex flex-col justify-center align-middle ">
            <h1 className="text-3xl text-blue-400 font-bold flex items-center justify-center align-middle max-[1040px]:text-xl max-[700px]:text-sm max-[500px]:w-2/3 max-[500px]:m-auto max-[500px]:p-auto p-2 text-center">Supporting Your Career Journey. Quick, Easy, and Effective Job Hunting </h1>
            <p  className="text-xl text-mygreen flex items-center justify-center  align-middle max-[1040px]:text-base max-[700px]:text-sm p-1" >Jobs that best suits you !</p>
        </div>
        <hr className="mx-auto w-4/5" />
        <SearchBar  setJobs={setJobs} />
        
        {loading ? (
        <p>Loading jobs...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {jobs.map(job => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </>
  )
}

export default JobSearchPage