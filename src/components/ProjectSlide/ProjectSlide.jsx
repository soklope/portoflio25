import './project-slide.scss'

export default function ProjectSlide({logo, description, linkUrl, websiteName}) {
    return (
        <div className='project-slide'>
            <span className={`project-slide__logo--${logo}`}></span>
            <div className='project-slide__description'>{description}</div>
            <a className='project-slide__link' href={linkUrl} target='_blank'>Experience {websiteName}</a>
        </div>
    )
}