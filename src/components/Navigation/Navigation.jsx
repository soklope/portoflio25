import './navigation.scss'
import useNavigationStore from '../../store/navigationStore'
import { Fade } from "react-awesome-reveal";

export default function Navigation() {
    const { isMenuOpen, setActiveSection, fadeDuration } = useNavigationStore()

    return (
        <Fade duration={fadeDuration}>
            <div className='navigation'>
                { isMenuOpen &&
                    <div className='navigation__menu'>
                        <a onClick={() => setActiveSection('about')}>About me</a>
                        <a onClick={() => setActiveSection('projects')}>Projects</a>
                        <a onClick={() => setActiveSection('contact')}>Contact</a>
                    </div>
                }
            </div>
        </Fade>
    )
}