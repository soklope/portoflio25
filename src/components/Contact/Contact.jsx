import './contact.scss'
import useNavigationStore from '../../store/navigationStore';
import { Fade } from 'react-awesome-reveal';

export default function Contact() {
    const { showContact, fadeDuration } = useNavigationStore();

    const composeEmail = (target) => {
        const emailAddress = target;
        const mailtoLink = `mailto:${emailAddress}`;
        window.location.href = mailtoLink;
    };

    return (
        showContact && (
            <Fade duration={fadeDuration} cascade={true} damping={.5}>
                <div className="page-container contact">
                    <h2 className='util-title'>Contact</h2>
                    <div className='contact__meta'>
                        <p className='contact__meta--name'>Søren Kloster Pedersen</p>
                        <p className='contact__meta--mail' onClick={() => composeEmail("cecilie@visibuilt.com")}>skp2104@hotmail.com</p>
                        <a className='contact__meta--linkedin' href='https://www.linkedin.com/in/s%C3%B8ren-kloster-pedersen-aa9481220/' target='_blank'>LinkedIn</a>
                    </div>
                </div>
            </Fade>
        )
    )
}