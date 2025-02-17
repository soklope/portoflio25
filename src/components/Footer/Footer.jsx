import './footer.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>Linkedin</li>
                <li>Github</li>
                <li>Email</li>
            </ul>
            <BurgerMenu />
        </footer>
    )
}