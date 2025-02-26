import './project-slide.scss'
import PageTitle from '../PageTitle/PageTitle'

export default function ProjectSlide({projectName, descriptionOne, descriptionTwo, linkUrl, websiteName}) {
    return (
        <div className={`project-slide project-slide--${projectName}`}>
            <PageTitle 
                titleValue={projectName}
                delay={500}
            />
            <span className={`project-slide__logo project-slide__logo--${projectName}`}></span>
            <div className='project-slide__description'>{descriptionOne}</div>
            { descriptionTwo && (
                <div className='project-slide__description'>{descriptionTwo}</div>
            )}
            <a className='project-slide__link' href={linkUrl} target='_blank'>Experience {websiteName}</a>
        </div>
    )
}