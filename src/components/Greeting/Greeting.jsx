import './greeting.scss'
import useToggleStore from '../../store/navigationStore';

export default function Greeting() {
    const { toggle } = useToggleStore();

    return (
        <div className="greeting-container">
            <h2>Hello</h2>
            <p>My name is <b>Søren Kloster Pedersen</b></p>
            <p>and i am a <b>Webdeveloper</b></p>
            <button onClick={toggle}></button>
        </div>
    )
}