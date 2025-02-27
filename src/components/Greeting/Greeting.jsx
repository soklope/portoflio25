import './greeting.scss'
import useToggleStore from '../../store/navigationStore';
import { useEffect, useState } from 'react';

export default function Greeting() {
    const { clickGreeting } = useToggleStore();

    const [greetingString] = useState('Hello')
    const [nameString] = useState('My name is Søren Kloster Pedersen')
    const [roleString] = useState('I am a Webdeveloper')
    const [portfolioString] = useState('...and this is my Portfolio')

    const [animatedGreeting, setAnimatedGreeting] = useState('')
    const [animatedNameString, setAnimatedNameString] = useState('')
    const [animatedRoleString, setAnimatedRoleString] = useState('')
    const [animatedPortfolioString, setAnimatedPortfolioString] = useState('')

    const [animatedGreetingComplete, setAnimatedGreetingComplete] = useState(false)
    const [animatedNameStringComplete, setAnimatedNameStringComplete] = useState(false)
    const [animatedRoleStringComplete, setAnimatedRoleStringComplete] = useState(false)
    const [animatedPortfolioStringComplete, setAnimatedPortfolioStringComplete] = useState(false)
    
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
        }, 1500);
      
        timeouts.push(greetingTimeout);
      
        const nameDelay = 2000 + greetingString.length * 100 + 100;
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

        const portfolioDelay = 500 + roleDelay + nameString.length * 20 + 100;
        const portfolioTimeout = setTimeout(() => {
          portfolioString.split('').forEach((letter, i) => {
            const timeout = setTimeout(() => {
              setAnimatedPortfolioString(prev => prev + letter);
      
              if (i === portfolioString.length - 1) {
                setAnimatedPortfolioStringComplete(true);
              }
            }, i * 20);
            timeouts.push(timeout);
          });
        }, portfolioDelay);
        timeouts.push(portfolioTimeout);
      
        return () => {
          timeouts.forEach(clearTimeout);
        };
      }, [greetingString, nameString, roleString, portfolioString]);
      

    return (
        <div className="greeting-container">
          <h2 className={`util-title ${!animatedGreetingComplete && 'title-cursor'}`}>{animatedGreeting}</h2>
          <p className={`${animatedGreetingComplete && !animatedNameStringComplete ? 'text-cursor' : ''}`}>{animatedNameString}</p>
          <p className={`${animatedNameStringComplete && !animatedRoleStringComplete ? 'text-cursor' : ''}`}>{animatedRoleString}</p>
          <p className={`${animatedRoleStringComplete && !animatedPortfolioStringComplete ? 'text-cursor' : ''}`}>{animatedPortfolioString}</p>
          {
            animatedPortfolioStringComplete && (
                <button onClick={clickGreeting}>Enter</button>
            )
          }
        </div>
    )
}
