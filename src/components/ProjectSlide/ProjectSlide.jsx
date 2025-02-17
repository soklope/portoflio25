import './project-slide.scss'

export default function ProjectSlide({projectName, description, linkUrl, websiteName}) {
    return (
        <div className={`project-slide project-slide--${projectName}`}>
            <h2 className='util-title'>{projectName}</h2>
            <span className={`project-slide__logo project-slide__logo--${projectName}`}></span>
            <div className='project-slide__description'>{description}</div>
            <a className='project-slide__link' href={linkUrl} target='_blank'>Experience {websiteName}</a>
        </div>
    )
}