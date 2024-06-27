import Profile from "../assets/2FEE48C8-8869-480A-A5DB-7E1A5E20402A.jpeg"

const AboutMe = () => {
    return (
        <>
            <body className="d-flex justify-content-center">
                <main className="container row">
                    <div className="col-6">
                        <img src={Profile} alt="Profile Picture" className="img-thumbnail"/>
                    </div>
                    <div className="Intro col-6">
                        <h1>Adjoa Hackman </h1>
                        <p>Aspiring Developer</p>
                        <p>I am Technical Program Manager at LinkedIn and a graduate of New York University. I am currently in a
                            coding bootcamp to challenge myself and upskill. I am hoping to be a better Technical Program Manager
                            and potentially transition into a developer role.</p>
                    </div>
                </main>
            </body>
        </>
    )
}

export default AboutMe;