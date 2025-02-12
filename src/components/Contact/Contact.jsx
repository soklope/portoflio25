import './contact.scss'
import useToggleStore from '../../store/navigationStore';
import useNavigationStore from '../../store/navigationStore';

export default function Contact() {
    const { showContact } = useNavigationStore();

    return (
        showContact && (
            <div className="greeting-container">
                <h2>Contact</h2>
            </div>
        )
    )
}