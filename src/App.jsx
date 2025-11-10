import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import PublicationsPage from "./pages/Publication";
import CVPage from "./pages/CV";
import PersonalPage from "./pages/Personal";
import ResearchPage from "./pages/Research";
import TeachingPage from "./pages/Teaching";
import TeachingSystem from "./pages/Teaching";
import Pcl105Autumn2018 from "./pages/Pcl105-Autumn2018";
import Uma003Math from "./pages/Uma003-Math";
import EnggMathInAction from "./pages/EnggMathInAction";
import Pcl105Autumn2019 from "./pages/Pcl105-Autumn2019";
import Pma207ComplexAnalysis from "./pages/Pma207-ComplexAnalysis";
import Uma101NumericalAnalysis from "./pages/Uma011-NumericalAnalysis";
import CompLinearAlg from "./pages/CompLinearAlg";
import MathOfUncertainty from "./pages/MathOfUncertainty";
import OptiMethods from "./pages/OptiMethods";
import ProjectsPage from "./pages/Projects";

function App() {
  // return (
  //   <div>
  //     <Navbar />
  //     <HomePage />
  //     <PublicationsPage />
  //     <Footer />
  //   </div>
  // );
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/teaching" element={<TeachingPage />} />
        <Route
          path="/teaching/pcl105-autumn2018"
          element={<Pcl105Autumn2018 />}
        />{" "}
        <Route path="/teaching/uma003-math" element={<Uma003Math />} />
        <Route
          path="/teaching/engg-math-in-action"
          element={<EnggMathInAction />}
        />
        <Route
          path="/teaching/pcl105-autumn2019"
          element={<Pcl105Autumn2019 />}
        />
        <Route
          path="/teaching/pma207-complexanalysis"
          element={<Pma207ComplexAnalysis />}
        />
        <Route
          path="/teaching/numerical-analysis"
          element={<Uma101NumericalAnalysis />}
        />
        <Route
          path="/teaching/computational-linear-algebra"
          element={<CompLinearAlg />}
        />
        <Route
          path="/teaching/mathematics-of-uncertainty"
          element={<MathOfUncertainty />}
        />
        <Route
          path="/teaching/optimization-methods"
          element={<OptiMethods />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
