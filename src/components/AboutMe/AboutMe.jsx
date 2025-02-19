import './about-me.scss'
import useNavigationStore from '../../store/navigationStore';
import { Fade } from 'react-awesome-reveal';

export default function AboutMe() {
    const { showAboutMe, fadeDuration } = useNavigationStore();

    return (
        showAboutMe && (
            <div className="about-me">
                <div className='about-me__meta'>
                    <Fade duration={fadeDuration}>
                        <h2 className='util-title'>About Me</h2>
                        <p className='util-text'>I am a Danish web developer based in Odense, Denmark. With a background in retail spanning six years, I made the leap into the digital world in 2021 by pursuing multimedia studies. This led me to complete my PBA in Web Development in 2025.</p>
                        <p className='util-text'>For the past two years, I have been working with modern frontend frameworks like React, crafting seamless and responsive web experiences. Beyond coding, I have a strong interest in UI and UX design, ensuring that the websites I build are not just functional but also intuitive and visually engaging.</p>
                        <p className='util-text'>I am always excited to tackle new challenges and bring ideas to life through development and thoughtful design.</p>
                        <h3 className='util-sub-title'>Tech stack <span className='slash--white'>/</span> skills</h3>
                        <ul className='about-me__skill-list util-text'>
                            <li>React JS / TS</li>
                            <li>NODE JS</li>
                            <li>CSS / SCSS</li>
                            <li>PHP</li>
                            <li>Git</li>
                            <li>HTML 5</li>
                            <li>WordPress</li>
                        </ul>

                        <h3 className='util-sub-title'>Familiar With</h3>
                        <ul className='about-me__skill-list util-text'>
                            <li>Figma</li>
                            <li>Firebase</li>
                            <li>Firestore</li>
                            <li>SQL</li>
                            <li>Postman</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe InDesign</li>
                        </ul>
                    </Fade>     
                </div>
            </div>
        )
    )
}