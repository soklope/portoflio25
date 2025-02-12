import './index.scss'
import Greeting from './components/Greeting/Greeting'
import MyProjects from './components/MyProjects/MyProjects';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import Navigation from './components/Navigation/Navigation';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import useNavigationStore from './store/navigationStore'

export default function App() {
  const { hasClickedOnGreeting, isMenuOpen } = useNavigationStore();

  return (
    <>
      { hasClickedOnGreeting ? 
        <>
          {
            isMenuOpen ?
              <Navigation />
            :
              <>
                <AboutMe/> 
                <MyProjects/> 
                <Contact/> 
              </>
          }
          <BurgerMenu />
        </>
        : 
        <Greeting /> 
      }
    </>
  )
}

