import { useState } from "react";
import PropTypes from 'prop-types';


const JobCard = (props) => {
  const [viewMore, setViewMore] = useState(false);


  const {jobTitle, companyName, companyWebsite, jobDescription, jobType, jobPosts, jobExperience, jobLocation,jobIncome,applyBeforeDate,jobURL} = props.job;
  const handleLastDate = (applyDate) =>{
    const date = new Date(applyDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}-${month}-${year}`
  }

  let desc = `${jobDescription}`;
  console.log(desc.length);
  console.log(jobDescription.length);

  let lastDate = handleLastDate(applyBeforeDate)
  return (
    <div className="flex flex-row justify-between m-5 border border-gray-400 rounded-lg max-[700px]:block ">
      <div className="flex flex-col m-3 justify-between w-[400px] max-[700px]:w-auto">
        <h1 className="text-mygreen font-bold">{jobTitle}</h1>
        <h2 className="text-gray-500">{companyName}</h2>
        <p className="text-gray-700">• {jobType} </p>
        <p className="text-gray-700">• {jobLocation}</p>
        <p className="text-gray-700">• {jobExperience}</p>
      </div>
 
      <div className="max-w-5xl border-x-2 p-3  w-full">
        <h3 className="text-gray-800  font-semibold">About the Job</h3>
        <hr />
        <p className="text-base text-gray-700 align-middle  text-justify pt-1  ">
          {viewMore ? (
            <>
              {desc}{" "}
              <span className="text-mygreen" onClick={() => setViewMore(false)}>
                less view
              </span>
            </>
          ) : (
            <>
              {desc.length > 400 ? (
                <>
                  {desc.slice(0, 400)}.....{" "}
                  <span
                    className="text-mygreen"
                    onClick={() => setViewMore(true)}
                  >
                    view more
                  </span>
                </>
              ) : (
                desc
              )}
            </>
          )}
        </p>
      </div>

      <div className="flex flex-col justify-between m-3 w-[500px] max-[700px]:w-auto">
        <p className="text-gray-700">
          {" "}
          <span className="text-gray-800 p-1 font-semibold max-[1000px]:block">
            Apply upto:
          </span>{" "}
          {lastDate}
        </p>
        <p className="text-gray-700">
          {" "}
          <span className="text-gray-800 p-1 font-semibold max-[1000px]:block">
            Salary:
          </span>{" "}
          {jobIncome} <span>/month</span>
        </p>
        <p className="text-gray-700">
          {" "}
          <span className="text-gray-800 p-1 font-semibold max-[1000px]:block">
            Total Post:
          </span>{" "}
          {jobPosts}
        </p>
        <a className="text-gray-700" href={`${companyWebsite}`}>
          <span className="text-gray-800 p-1 font-semibold max-[1000px]:block">
            Website:
          </span>
          Click Here
        </a>
        <a href={`${jobURL}`}>
          <button
            type="submit"
            className="h-9 pb-1 w-full border border-gray-400 font-semibold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-mygreen hover:text-white "
          >
            Apply
          </button>
        </a>
      </div>
    </div>
  );
};

export default JobCard;


JobCard.propTypes = {
  job: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyWebsite: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    jobPosts: PropTypes.number.isRequired,
    jobExperience: PropTypes.string.isRequired,
    jobLocation: PropTypes.string.isRequired,
    jobIncome: PropTypes.number.isRequired,
    applyBeforeDate: PropTypes.string.isRequired,
    jobURL: PropTypes.string.isRequired,
  }).isRequired,
};