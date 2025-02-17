import './footer.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import useNavigationStore from '../../store/navigationStore'
import { Fade } from 'react-awesome-reveal'

export default function Footer() {
    const { isMenuOpen, fadeDuration } = useNavigationStore()

    const composeEmail = (target) => {
        const emailAddress = target;
        const mailtoLink = `mailto:${emailAddress}`;
        window.location.href = mailtoLink;
    };

    return (
        <footer className='footer'>
            {!isMenuOpen && (
                <Fade duration={fadeDuration}>
                    <ul className='footer__socials'>
                        <a className='footer__social-icon footer__social-icon--linkedin' href='https://www.linkedin.com/in/s%C3%B8ren-kloster-pedersen-aa9481220/' target='_blank'></a>
                        <a className='footer__social-icon footer__social-icon--github' href='https://github.com/soklope' target='_blank'></a>
                        <a className='footer__social-icon footer__social-icon--mail' onClick={() => composeEmail("skp2104@hotmail.com")}></a>
                    </ul>
                </Fade>
            )}
            <BurgerMenu />
        </footer>
    )
}