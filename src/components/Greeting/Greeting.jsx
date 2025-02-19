import './greeting.scss'
import useToggleStore from '../../store/navigationStore';
import { Fade } from 'react-awesome-reveal';
import { useEffect } from 'react';

export default function Greeting() {
    const { clickGreeting, fadeDuration } = useToggleStore();

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === "Enter") {
            clickGreeting();
          }
        };
    
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
      }, [clickGreeting]);

    return (
        <div className="greeting-container">
            <Fade duration={fadeDuration} cascade={true} damping={1}>
                <h2>Hello</h2>
                <p>My name is <b>Søren Kloster Pedersen</b></p>
                <p>and I am a <b>Webdeveloper</b></p>
                <button onClick={clickGreeting}>Enter</button>
            </Fade>
        </div>
    )
}
