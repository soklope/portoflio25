import './greeting.scss'
import useToggleStore from '../../store/navigationStore';
import { useEffect, useState } from 'react';

export default function Greeting() {
    const { clickGreeting } = useToggleStore();

    const [greetingString] = useState('Hello')
    const [nameString] = useState('My name is Søren Kloster Pedersen')
    const [roleString] = useState('and I am a Webdeveloper')

    const [animatedGreeting, setAnimatedGreeting] = useState('')
    const [animatedNameString, setAnimatedNameString] = useState('')
    const [animatedRoleString, setAnimatedRoleString] = useState('')

    const [animatedGreetingComplete, setAnimatedGreetingComplete] = useState(false)
    const [animatedNameStringComplete, setAnimatedNameStringComplete] = useState(false)
    const [animatedRoleStringComplete, setAnimatedRoleStringComplete] = useState(false)
    
    useEffect(() => {
      const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          clickGreeting();
        }
      };
  
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }, [clickGreeting]);

    useEffect(() => {
        let timeouts = [];
        const greetingTimeout = setTimeout(() => {
          greetingString.split('').forEach((letter, i) => {
            const timeout = setTimeout(() => {
              setAnimatedGreeting(prev => prev + letter);
      
              if (i === greetingString.length - 1) {
                setAnimatedGreetingComplete(true);
              }
            }, i * 20);
            timeouts.push(timeout);
          });
        }, 1000);
      
        timeouts.push(greetingTimeout);
      
        const nameDelay = 1000 + greetingString.length * 100 + 100;
        const nameTimeout = setTimeout(() => {
          nameString.split('').forEach((letter, i) => {
            const timeout = setTimeout(() => {
              setAnimatedNameString(prev => prev + letter);
      
              if (i === nameString.length - 1) {
                setAnimatedNameStringComplete(true);
              }
            }, i * 20);
            timeouts.push(timeout);
          });
        }, nameDelay);
        timeouts.push(nameTimeout);
      
        const roleDelay = nameDelay + nameString.length * 20 + 100;
        const roleTimeout = setTimeout(() => {
          roleString.split('').forEach((letter, i) => {
            const timeout = setTimeout(() => {
              setAnimatedRoleString(prev => prev + letter);
      
              if (i === roleString.length - 1) {
                setAnimatedRoleStringComplete(true);
              }
            }, i * 20);
            timeouts.push(timeout);
          });
        }, roleDelay);
        timeouts.push(roleTimeout);
      
        return () => {
          timeouts.forEach(clearTimeout);
        };
      }, [greetingString, nameString, roleString]);
      

    return (
        <div className="greeting-container">
          <h2 className={`util-title ${!animatedGreetingComplete && 'title-cursor'}`}>{animatedGreeting}</h2>
          <p className={`${!animatedNameStringComplete && 'text-cursor'}`}>{animatedNameString}</p>
          <p className={`${!animatedRoleStringComplete && 'text-cursor'}`}>{animatedRoleString}</p>
          {
            animatedRoleStringComplete && (
                <button onClick={clickGreeting}>Enter</button>
            )
          }
        </div>
    )
}
