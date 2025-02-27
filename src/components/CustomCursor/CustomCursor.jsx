import './CustomCursor.scss'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
    const customCursorRef = useRef(null);

    useEffect(() => {
        const positionElement = (e) => {
            if (customCursorRef.current) {  // Ensure the element exists
                const mouseY = e.clientY;
                const mouseX = e.clientX;
                customCursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        window.addEventListener('mousemove', positionElement);

        return () => {
            window.removeEventListener('mousemove', positionElement);
        };
    }, []);

    return <div className='custom-cursor' ref={customCursorRef}></div>;
}
