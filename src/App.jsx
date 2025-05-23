import './index.scss'
import Greeting from './components/Greeting/Greeting'
import MyProjects from './components/MyProjects/MyProjects';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import useNavigationStore from './store/navigationStore'
import CustomCursor from './components/CustomCursor/CustomCursor';

export default function App() {
  const { hasClickedOnGreeting, isMenuOpen } = useNavigationStore();

  return (
    <>
      <CustomCursor />
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
          <Footer />
        </>
        : 
        <Greeting /> 
      }
    </>
  )
}

