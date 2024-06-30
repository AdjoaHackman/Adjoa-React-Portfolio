import Profile from "../assets/2FEE48C8-8869-480A-A5DB-7E1A5E20402A.jpeg"

const AboutMe = () => {
    return (
        <>
            <div className="d-flex justify-content-center page_container">
                <main className="container row">
                    <div className="col-6">
                        <img src={Profile} alt="Profile Picture" className="img-thumbnail"/>
                    </div>
                    <div className="Intro text-center col-6">
                        <h1 className="text-center">Adjoa Hackman </h1>
                        <p className="fw-bold text-center">Aspiring Developer</p>
                        <p>I am Technical Program Manager at LinkedIn and a graduate of New York University. I am currently in a
                            coding bootcamp to challenge myself and upskill. I am hoping to be a better Technical Program Manager
                            and potentially transition into a developer role.</p>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AboutMe;