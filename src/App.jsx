import './index.scss'
import Greeting from './components/Greeting/Greeting'
import useToggleStore from './store/navigationStore'

export default function App() {
  const { isOn } = useToggleStore();

  return (
    <>
      { isOn ? 
        <Greeting /> 
        : 
        <div>clicked</div>
      }
    </>
  )
}

