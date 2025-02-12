import './burger-menu.scss'
import { useState } from 'react'
import useNavigationStore from '../../store/navigationStore'
import { Rotate as Hamburger } from 'hamburger-react'

export default function BurgerMenu() {
    const { toggleMenu, isMenuOpen } = useNavigationStore()

    return (
        <div className='burger-menu'>
            <Hamburger 
                toggled={isMenuOpen} 
                toggle={toggleMenu} 
                color='#20FC8F'
            />
        </div>
    )
}