import './about-me.scss'
import useNavigationStore from '../../store/navigationStore';

export default function AboutMe() {
    const { showAboutMe } = useNavigationStore();

    return (
        showAboutMe && (
            <div className="greeting-container">
                <h2>About Me</h2>
            </div>
        )
    )
}