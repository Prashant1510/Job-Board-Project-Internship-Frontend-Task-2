import Footer from "../../components/footer/Footer"
import MidArea from "../../components/homePageMid/MidArea"
import Navbar from "../../components/navbar/Navbar"

const Home = () => {
  return (
    <>
        <Navbar showSingOutButton={false}/>
        <MidArea/>
        <Footer/>
    </>
  )
}

export default Home