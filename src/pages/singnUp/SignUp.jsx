import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import UseSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [userInputs, setUserInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
    profilePic: "",
    phoneNumber: "",
    emailId: "",
  });

  const [companyInputs, setcompanyInputs] = useState({
    companyName: "",
    companyUserName: "",
    password: "",
    confirmPassword:"",
    companyLogo: "",
    companyWebsite: "",
    companyTollfreeNumber: "",
    companyDescription: "",
    companyEmail: "",
  });

  const [userType, setUserType] = useState("user");
  
  const {UserSignup,CompanySignup} = UseSignUp()

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    await UserSignup(userInputs);
  };
  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    await CompanySignup(companyInputs);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-200 h-auto w-full">
        <Navbar color="slate-200" showSingOutButton={false }/>

        <div className="w-2/5 p-6 rounded-lg shadow-md bg-white  max-[1300px]:w-2/4 max-[900px]:w-2/3 max-[700px]:w-full m-10">
          <h1 className="text-3xl font-semibold text-center text-gray-500">
            Sign Up{" "}
            <Link to={"/"}>
              <span className="text-mygreen"> JobBoard</span>
            </Link>
          </h1>

          <div className=" flex items-center justify-center">
            <button
              onClick={() => setUserType("user")}
              className="h-14 w-36 font-bold text-gray-500 rounded-md text-2xl border border-gray-400 mx-1 my-3 hover:bg-mygreen hover:text-white"
            >
              User
            </button>
            <button
              onClick={() => setUserType("company")}
              className="h-14 w-36 font-bold text-gray-500 rounded-md text-2xl border border-gray-400 mx-1 my-3 hover:bg-mygreen hover:text-white"
            >
              Company
            </button>
          </div>

          <hr className="p-2" />

          {userType === "user" && (
            <form onSubmit={handleUserSubmit}>
              <div>
                <label className="label ">
                  <span className="text-base label-text">Full Name:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter user name"
                  className="w-full input input-bordered  h-10 border rounded-lg my-1"
                  value={userInputs.fullName}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, fullName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label  ">
                  <span className="text-base label-text">User Name:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="UserName should be unique"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={userInputs.userName}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, userName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Password:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={userInputs.password}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, password: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Confirm Password:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter confirm password"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={userInputs.confirmPassword}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, confirmPassword: e.target.value })
                  }
                />
              </div>

              <div>
              <select
                name=""
                id=""
                className="w-full input input-bordered h-10 border rounded-lg my-1"
                onChange={(e) =>
                  setUserInputs({ ...userInputs, gender: e.target.value })
                }
              >
                <option value="" disabled hidden selected className="">
                  Gender:*
                </option>
                <option value="Male" className="text-lg max-[700px]:text-sm ">
                  Male
                </option>
                <option value="Female" className="text-lg  max-[700px]:text-sm">
                  Female
                </option>
              </select>
            </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">
                    Profile Picture URL:
                  </span><span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Paste URL"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={userInputs.profilePic}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, profilePic: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Phone Number:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="10 Digit Number"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={userInputs.phoneNumber}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, phoneNumber: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Email Id:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example123@gmail.com"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={userInputs.emailId}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, emailId: e.target.value })
                  }
                />
              </div>

              <Link
                to={"/login"}
                className="text-sm hover:underline hover:text-mygreen mt-2 inline-block"
                href="#"
              >
                Already have an account?
              </Link>
              <p className="text-sm text-orange-500"><span className="text-sm text-mygreen">Note: </span>Please remember your credentials</p>

              <div>
                <button className="h-9 w-full border border-gray-400 font-bold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-mygreen hover:text-white ">
                  SignUp
                </button>
              </div>
            </form>
          )}

          {/* -------------------------------------------------------------------------------------- */}

          {userType === "company" && (
            <form onSubmit={handleCompanySubmit}>
              <div>
                <label className="label ">
                  <span className="text-base label-text">Company Name:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full input input-bordered  h-10 border rounded-lg my-1"
                  value={companyInputs.companyName}
                  onChange={(e) =>
                    setcompanyInputs({ ...companyInputs, companyName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label  ">
                  <span className="text-base label-text">
                    Company User Name:
                  </span><span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Company user name should be unique"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={companyInputs.companyUserName}
                  onChange={(e) =>
                    setcompanyInputs({ ...companyInputs, companyUserName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Password:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={companyInputs.password}
                  onChange={(e) =>
                    setcompanyInputs({ ...companyInputs, password: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Confirm Password:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter confirm password"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={companyInputs.confirmPassword}
                  onChange={(e) =>
                    setcompanyInputs({ ...companyInputs, confirmPassword: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Company Logo:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Paste URL"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={companyInputs.companyLogo}
                  onChange={(e) =>
                    setcompanyInputs({ ...companyInputs, companyLogo: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Company Website:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Paste URL"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={companyInputs.companyWebsite}
                  onChange={(e) =>
                    setcompanyInputs({ ...companyInputs, companyWebsite: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Tollfree Number:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter tollfree number"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={companyInputs.companyTollfreeNumber}
                  onChange={(e) =>
                    setcompanyInputs({
                      ...companyInputs,
                      companyTollfreeNumber: e.target.value,
                    })
                  }
                />
              </div>

              <div>
              <label className="label">
                <span className="text-base label-text">Company Description:</span><span className="text-red-600">*</span>
              </label>
              <textarea 
                type="text"
                placeholder=""
                className="w-full input input-bordered h-32 border rounded-lg my-1 text-lg"
                value={companyInputs.companyDescription}
                onChange={(e) =>
                  setcompanyInputs({ ...companyInputs, companyDescription: e.target.value })
                }
              ></textarea>
            </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Email Id:</span><span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example123@gmail.com"
                  className="w-full input input-bordered h-10 border rounded-lg my-1"
                  value={companyInputs.companyEmail}
                  onChange={(e) =>
                    setcompanyInputs({ ...companyInputs, companyEmail: e.target.value })
                  }
                />
              </div>

              <Link
                to={"/login"}
                className="text-sm hover:underline hover:text-mygreen mt-2 inline-block"
                href="#"
              >
                Already have an account?
              </Link>
              <p className="text-sm text-orange-500"><span className="text-sm text-mygreen">Note: </span>Please remember your credentials</p>
              <div>
                <button
                  className="h-9 w-full border border-gray-400 font-bold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-mygreen hover:text-white "
                >
                  SignUp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
export default SignUp;
