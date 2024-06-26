import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import UseLogin from "../../hooks/useLogin";
const Login = () => {

    const [userType, setUserType] = useState("user")
	const {UserLogin, CompanyLogin} = UseLogin()


	const [userInputs, setUserInputs] = useState({
    userName: "",
    password: "",

    });

    const [companyInputs, setcompanyInputs] = useState({

    companyUserName: "",
    password: "",

    });

	const handleUserSubmit = async (e) => {
		e.preventDefault();
		await UserLogin(userInputs)
	};
    const handleCompanySubmit = async (e) => {
		e.preventDefault();
		await CompanyLogin(companyInputs)
	};

	return (
		<>
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-200 min-h-lvh max-[400px]:h-screen'>
		<Navbar color="slate-200" showSingOutButton={false }/>

			<div className='w-2/5 p-6 rounded-lg shadow-md bg-white  max-[1300px]:w-2/4 max-[900px]:w-2/3 max-[700px]:w-full m-10'>
				<h1 className='text-3xl font-semibold text-center text-gray-500'>
					Login
					<Link to={"/"}><span className='text-mygreen'> JobBoard</span></Link>
				</h1>

                <div className=" flex items-center justify-center">
                    <button onClick={() => setUserType("user")} className="h-14 w-36 font-bold text-gray-500 rounded-md text-2xl border border-gray-400 mx-1 my-3 hover:bg-mygreen hover:text-white">User</button>
                    <button onClick={() => setUserType("company")} className="h-14 w-36 font-bold text-gray-500 rounded-md text-2xl border border-gray-400 mx-1 my-3 hover:bg-mygreen hover:text-white">Company</button>
                </div>

                <hr className="p-2" />
				{ userType === "user" && ( <form onSubmit={handleUserSubmit}>
					<div>
						<label className='label '>
							<span className='text-base label-text'>User Name:</span><span className="text-red-600">*</span>
						</label>
						<input
							type='text'
							placeholder='Enter userName'
							className='w-full input input-bordered  h-10 border rounded-lg my-1'
							value={userInputs.userName}
							onChange={(e) => setUserInputs({...userInputs, userName: e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password:</span><span className="text-red-600">*</span>
						</label>
						<input
							type='password'
							placeholder='Enter user password'
							className='w-full input input-bordered  h-10 border rounded-lg my-1'
							value={userInputs.password}
							onChange={(e) => setUserInputs({...userInputs, password: e.target.value})}
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-mygreen mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='h-9 w-full border border-gray-400 font-bold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-mygreen hover:text-white ' >
                        LogIn
						</button>
					</div>
				</form>)}

                {/* ----------------------------------------------------------------------- */}

                { userType === "company" && ( <form onSubmit={handleCompanySubmit}>
					<div>
						<label className='label '>
							<span className='text-base label-text'>Company User Name:</span><span className="text-red-600">*</span>
						</label>
						<input
							type='text'
							placeholder='Enter company userName'
							className='w-full input input-bordered  h-10 border rounded-lg my-1'
							value={companyInputs.userName}
							onChange={(e) => setcompanyInputs({...companyInputs, companyUserName: e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password:</span><span className="text-red-600">*</span>
						</label>
						<input
							type='password'
							placeholder='Enter company password'
							className='w-full input input-bordered  h-10 border rounded-lg my-1'
							value={companyInputs.password}
							onChange={(e) => setcompanyInputs({...companyInputs, password:e.target.value})}
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>
					<div>
						<button className='h-9 w-full border border-gray-400 font-bold text-gray-500 rounded-lg mt-3 text-2xl hover:bg-mygreen hover:text-white ' >
                        LogIn
						</button>
					</div>
				</form>)}
			</div>
		</div>
		</>
	);
};
export default Login;
