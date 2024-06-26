import { Link } from "react-router-dom";
const MidArea = () => {
  return (
    <div className="flex flex-row items-center justify-between m-7 ">
      <div className="w-1/3 ml-16 max-[1250px]:m-2 max-[940px]:w-full">
        <div className="mb-5">
          <p className="text-gray-600 text-lg text-justify font-medium ">
            <span>
              <strong>Job Board</strong>
            </span>{" "}
            offers a user-friendly platform that simplifies your job search
            process. Our extensive database features thousands of job listings
            from top companies, providing you with a wide range of opportunities
            to explore. You can easily filter jobs by industry, location,
            experience level, and job type to find positions that match your
            skills and career aspirations. Create a personalized profile, upload
            your resume, and apply for jobs with a single click. Our advanced
            job matching algorithm ensures that you receive recommendations
            tailored to your expertise and interests. Stay updated with job
            alerts and notifications to never miss an opportunity.
          </p>
        </div>
        <div className="flex flex-row justify-around">
        <Link to={"/signup"}>
        <button className="h-14 w-36 font-bold text-mygreen rounded-md text-2xl border border-mygreen mx-1 hover:bg-mygreen hover:text-white">
             SignUp
           </button>
        </Link>
        <Link to={"/login"}>
        <button className="h-14 w-36 font-bold text-mygreen rounded-md text-2xl border border-mygreen mx-1 hover:bg-mygreen hover:text-white">
             Login
           </button>
        </Link>
           
          </div>
      </div>

      <div className="h-full mr-20 max-[1250px]:m-2 max-[940px]:hidden">
        <img
          className="h-[400px] w-auto rounded-md border-mygreen border max-[1380px]:h-[350px] max-[1380px]:mb-16 max-[1050px]:h-[300px] "
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/stockvault-job-opportunity2594_1200x768.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MidArea;

// 
