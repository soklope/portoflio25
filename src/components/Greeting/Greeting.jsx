import './greeting.scss'
import useToggleStore from '../../store/navigationStore';
import { Fade } from 'react-awesome-reveal';

export default function Greeting() {
    const { clickGreeting, fadeDuration } = useToggleStore();

    return (
        <Fade duration={fadeDuration}>
            <div className="greeting-container">
                <h2>Hello</h2>
                <p>My name is <b>Søren Kloster Pedersen</b></p>
                <p>and i am a <b>Webdeveloper</b></p>
                <button onClick={clickGreeting}></button>
            </div>
        </Fade>
    )
}