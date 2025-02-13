import './about-me.scss'
import useNavigationStore from '../../store/navigationStore';
import { Fade } from 'react-awesome-reveal';

export default function AboutMe() {
    const { showAboutMe, fadeDuration } = useNavigationStore();

    return (
        showAboutMe && (
            <Fade duration={fadeDuration}>
                <div className="page-container about-me">
                    <h2 className='util-title'>About Me</h2>
                    <div className='about-me__meta'>
                        <p className='util-text'>
                            I'm a passionate web developer specializing in modern, responsive, and user-friendly websites. 
                            With experience in HTML, CSS, JavaScript, and frameworks like React and Next.js, I love turning ideas into functional and visually appealing digital experiences.
                            With experience in HTML, CSS, JavaScript, and frameworks like React and Next.js, I love turning ideas into functional and visually appealing digital experiences.
                            Let's build something amazing together!
                        </p>

                        <h3 className='util-sub-title'>Tech stack <span className='slash--white'>/</span> skills</h3>
                        <ul className='about-me__skill-list util-text'>
                            <li>React JS</li>
                            <li>NODE JS</li>
                            <li>CSS - SCSS</li>
                            <li>HTML 5</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        )
    )
}