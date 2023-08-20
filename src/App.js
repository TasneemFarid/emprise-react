import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import Category from "./components/Category";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Question from "./components/Question";
import Subscribe from "./components/Subscribe";
import TopDestination from "./components/TopDestination";
import TourGuides from "./components/TourGuides";
import Trend from "./components/Trend";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category/>
      <Trend/>
      <TopDestination/>
      <BestSeller/>
      <TourGuides/>
      <Experience/>
      <Subscribe/>
      <Partners/>
      <Question/>
      <Footer/>
    </>
  );
}

export default App;
