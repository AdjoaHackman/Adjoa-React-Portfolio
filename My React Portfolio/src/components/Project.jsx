const Project = ({portfolioURL, imgSrc, altText, styleW, title, description}) => {
    return (
        <div className="col">
        <a href= {portfolioURL} target="_blank">
            <img src={imgSrc}
                alt={altText} style={{ width: styleW }} /></a>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>






    )
}

export default Project;