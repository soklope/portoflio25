import './pageTitle.scss'
import { useEffect, useState } from 'react';

export default function PageTitle({titleValue, delay}) {
    const [nameString] = useState(titleValue)
    const [animatedNameString, setAnimatedNameString] = useState('')
    const [animationComplete, setAnimationComplete] = useState(false)
    
useEffect(() => {
    const timeouts = [];
    const letters = nameString.split('');

    const nameTimeout = setTimeout(() => {
        letters.forEach((letter, i) => {
            const timeout = setTimeout(() => {
                setAnimatedNameString(prev => prev + letter);

                if (i === letters.length - 1) {
                    setAnimationComplete(true)
                }
            }, i * 25);
            timeouts.push(timeout);
        });
    }, delay);
    timeouts.push(nameTimeout);

    return () => {
        timeouts.forEach(clearTimeout);
    };
}, [nameString]);

    return (
        <>
          <h2 className={`util-title ${!animationComplete && 'title-cursor'}`}>{animatedNameString}</h2>
        </>
    )
}
