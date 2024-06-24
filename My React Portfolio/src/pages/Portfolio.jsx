const Portfolio = () => {
    return (
            <div className="main">
                <h2>PORTFOLIO</h2>
                <h5>Here are the projects I have completed so far. Enjoy!</h5>

                <div className="gallery">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col">
                                <a href="https://adjoahackman.github.io/hmtl-css-refactoring-project-1/" target="_blank"><img
                                    src="./assets/01-html-css-git-homework-demo-image.png"
                                    alt="A picture of my finished Horiseon assignment" style={{width:"50%"}} /></a>
                                <h3>Horiseon</h3>
                                <p>Horiseon - my first engineering bootcamp assignment.</p>
                            </div>
                            <div className="col">
                                <a href="https://adjoahackman.github.io/Adjoa-s-Password-Generator/" target="_blank">
                                    <img src="./assets/Password Generator Screenshot.png"
                                        alt="A picture of my finished password generator assignment" style={{width:"100%"}}/></a>
                                <h3>Password Generator</h3>
                                <p>A password generator.</p>
                            </div>
                            <div className="col">
                                <a href="https://adjoahackman.github.io/Adjoa-s-Timed-Quiz/" target="_blank">
                                    <img src="./assets/Adjoa's Timed Quiz Screenshot-1.png"
                                        alt="A picture of my finished timed quiz assignment" style={{width:"100%"}} /></a>
                                <h3>Timed Quiz</h3>
                                <p>A Timed Quiz on the fundamentals of JavaScript.</p>
                            </div>
                            <div className="container-lg">
                                <div className="row">
                                    <div className="col">
                                        <a href="https://adjoahackman.github.io/Adjoa-s-Calendar/" target="_blank"><img src="./assets/Screenshot 2024-03-12 at 12.47.18 PM.png"
                                            alt="A picture of my finished Daily Planner" style={{width:"100%"}} /></a>
                                        <h3>Daily Planner</h3>
                                        <p>A daily planner</p>
                                    </div>
                                    <div className="col">
                                        <a href="https://adjoahackman.github.io/My-Weather-Dashboard-/" target="_blank"><img src="./assets/Weather Dashboard Screenshot.png"
                                            alt="A picture of my finished weather dashboard assignment" style={{width:"100%"}} /></a>
                                        <h3>Weather Dashboard</h3>
                                        <p>Weather dashboard with the ability to see what you have searched and the weather for the next 5 days</p>
                                    </div>
                                    <div className="col">
                                        <a href="https://alfwall.github.io/catzzeria/" target="_blank"><img src="./assets/Catzzeria Screenshot.png" alt="A picture of my first team project, Cattzeria" style={{width:"100%"}} /></a>
                                        <h3>Catzzeria!</h3>
                                        <p>Catzzeria, a clicker game! My first group project.</p>
                                    </div>
                                    <div className="col">
                                        <a href="https://reading-roundtable-a1d1097f86e5.herokuapp.com/login" target="_blank"><img src="./assets/reading-roundtable screenshot2.png" alt="A picture of my second team project, Reading Roundtable" style={{width:"100%"}} /></a>
                                        <h3>Reading Roundtable</h3>
                                        <p>Reading Roundtable, a way to search for books! My second group project.</p>
                                    </div>
                                </div>
                            </div></div>
                            </div>
                        </div>
                    </div>
            
)
}

            export default Portfolio;