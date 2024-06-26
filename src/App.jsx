import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/singnUp/SignUp";
import JobSearchPage from "./pages/jobSearch/JobSearchPage";
import AddNewJob from "./pages/addNewJob/AddNewJob";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/portalPage" element={<JobSearchPage />} />
          <Route path="/addNewJob" element={<AddNewJob/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  );
}

export default App;
