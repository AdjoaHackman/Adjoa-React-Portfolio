import Horiseon from "../assets/01-html-css-git-homework-demo-image.png";
import Password from "../assets/Password Generator Screenshot.png";
import Planner from "../assets/Screenshot 2024-03-12 at 12.47.18 PM.png";
import Quiz from "../assets/Adjoa's Timed Quiz Screenshot-1.png";
import Weather from "../assets/Weather Dashboard Screenshot.png";
import Reading from "../assets/reading-roundtable screenshot2.png";
import Cattzeria from "../assets/Catzzeria Screenshot.png";
import Project from "../components/Project";
import React from "react";
import '../assets/portfolio.css';

const Portfolio = () => {
    return (
        <div className="main">

            <div className="gallery">
                <div className="container-lg">
                    <div className="row text-center">
                        {/* <div className="col">
                            <a href="https://adjoahackman.github.io/hmtl-css-refactoring-project-1/" target="_blank"><img
                                src={Horiseon}
                                alt="A picture of my finished Horiseon assignment" style={{ width: "50%" }} /></a>
                            <h3>Horiseon</h3>
                            <p>Horiseon - my first engineering bootcamp assignment.</p>
                        </div> */}
                        <Project
                            portfolioURL={"https://adjoahackman.github.io/hmtl-css-refactoring-project-1/"}
                            imgSrc={Horiseon}
                            altText={"A picture of my finished Horiseon assignment"}
                            styleW={"50%"}
                            title={"Horiseon"}
                            github={"https://github.com/AdjoaHackman/hmtl-css-refactoring-project-1"}
                            description={"Horiseon - my first engineering bootcamp assignment."}
                        />
                        {/* <div className="col">
                            <a href="https://adjoahackman.github.io/Adjoa-s-Password-Generator/" target="_blank">
                                <img src={Password}
                                    alt="A picture of my finished password generator assignment" style={{ width: "100%" }} /></a>
                            <h3>Password Generator</h3>
                            <p>A password generator.</p>
                        </div> */}
                        <Project
                            portfolioURL={"https://adjoahackman.github.io/Adjoa-s-Password-Generator/"}
                            imgSrc={Password}
                            altText={"A picture of my finished password generator assignment"}
                            styleW={"100%"}
                            title={"Password Generator"}
                            github={"https://github.com/AdjoaHackman/Adjoa-s-Password-Generator"}
                            description={"A password generator."}
                        />

                        {/* <div className="col">
                            <a href="https://adjoahackman.github.io/Adjoa-s-Timed-Quiz/" target="_blank">
                                <img src={Quiz}
                                    alt="A picture of my finished timed quiz assignment" style={{ width: "100%" }} /></a>
                            <h3>Timed Quiz</h3>
                            <p>A Timed Quiz on the fundamentals of JavaScript.</p>
                        </div> */}

                        <Project
                            portfolioURL={"https://adjoahackman.github.io/Adjoa-s-Timed-Quiz/"}
                            imgSrc={Quiz}
                            altText={"A picture of my finished timed quiz assignment"}
                            styleW={"100%"}
                            title={"Timed Quiz"}
                            github={"https://github.com/AdjoaHackman/Adjoa-s-Timed-Quiz"}
                            description={"A Timed Quiz on the fundamentals of JavaScript."}
                        />

                        <div className="container-lg">
                            <div className="row">
                                {/* <div className="col">
                                    <a href="https://adjoahackman.github.io/Adjoa-s-Calendar/" target="_blank"><img src={Planner}
                                        alt="A picture of my finished Daily Planner" style={{ width: "100%" }} /></a>
                                    <h3>Daily Planner</h3>
                                    <p>A daily planner</p>
                                </div> */}
                         <Project
                            portfolioURL={"https://adjoahackman.github.io/Adjoa-s-Calendar/"}
                            imgSrc={Planner}
                            altText={"A picture of my completed Daily Planner"}
                            styleW={"100%"}
                            title={"Daily Planner"}
                            github={"https://github.com/AdjoaHackman/Adjoa-s-Calendar"}
                            description={"A daily planner"}
                         />

                                {/* <div className="col">
                                    <a href="https://adjoahackman.github.io/My-Weather-Dashboard-/" target="_blank"><img src={Weather}
                                        alt="A picture of my finished weather dashboard assignment" style={{ width: "100%" }} /></a>
                                    <h3>Weather Dashboard</h3>
                                    <p>Weather dashboard with the ability to see what you have searched and the weather for the next 5 days</p>
                                </div> */}
                        <Project
                            portfolioURL={"https://adjoahackman.github.io/My-Weather-Dashboard-/"}
                            imgSrc={Weather}
                            altText={"A picture of my completed weather dashboard assignment"}
                            styleW={"100%"}
                            title={"Weather Dashboard"}
                            github={"https://github.com/AdjoaHackman/My-Weather-Dashboard-"}
                            description={"Weather dashboard with the ability to see what you have searched and the weather for the next 5 days"}
                         />

                                {/* <div className="col">
                                    <a href="https://alfwall.github.io/catzzeria/" target="_blank"><img src={Cattzeria} alt="A picture of my first team project, Cattzeria" style={{ width: "100%" }} /></a>
                                    <h3>Catzzeria!</h3>
                                    <p>Catzzeria, a clicker game! My first group project.</p>
                                </div> */}
                        <Project
                            portfolioURL={"https://alfwall.github.io/catzzeria/"}
                            imgSrc={Cattzeria}
                            altText={"A picture of my first team project, Cattzeria"}
                            styleW={"100%"}
                            title={"Catzzeria"}
                            github={"https://github.com/alfwall/catzzeria"}
                            description={"Catzzeria, a clicker game! My first group project."}
                         />

                                {/* <div className="col">
                                    <a href="https://reading-roundtable-a1d1097f86e5.herokuapp.com/login" target="_blank"><img src={Reading} alt="A picture of my second team project, Reading Roundtable" style={{ width: "100%" }} /></a>
                                    <h3>Reading Roundtable</h3>
                                    <p>Reading Roundtable, a way to search for books! My second group project.</p>
                                </div> */}

                        <Project
                            portfolioURL={"https://reading-roundtable-a1d1097f86e5.herokuapp.com/login"}
                            imgSrc={Reading}
                            altText={"A picture of my second team project, Reading Roundtable"}
                            styleW={"100%"}
                            title={"Reading Roundtable"}
                            github={"https://github.com/AdjoaHackman/reading-roundtable"}
                            description={"Reading Roundtable, a way to search for books! My second group project."}
                         />
                            </div>
                        </div></div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;