import "./App.css";
import LoginButton from './assets/loginButton.jpg';
import { useState, useEffect } from "react";
import NavMenus from "./components/NavMenus/NavMenus";
import PlannerPage from "./components/PlannerPage";


function App() {
  const [navFocus, setNavFocus] = useState("planner");
  const [per, setPer] = useState("0");
  const [plans, setPlans] = useState([]);

  useEffect(()=>{
    let allPlans = plans.length;
    let successedPlans = plans.filter((element) => element.status === "3").length;
    setPer((successedPlans/allPlans * 100).toFixed(1));
  },[plans])

  function PageFocus(){
    if(navFocus === "planner") return <PlannerPage plans={plans} setPlans={setPlans} per={per} setPer={setPer}/>;

  }
  return (
    <>
      <header>
      <h1>Planner For Developers</h1>
      <img src={LoginButton} style={loginButtonStyle}></img>
      </header>
      <NavMenus navFocus={navFocus} setNavFocus={setNavFocus}/>
      <section className="content">
        <PageFocus />
      </section>
      <div className="footer">
        <div className="footerElement">Free App</div>
        <div className="footerElement">Web</div>
      </div>

    </>
  );
}

const loginButtonStyle = {
  width: "10rem",
  height: "3rem",
  position: "relative",
  top: "1.5rem"
}

export default App;
