import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './crwm.svg'
import {auth} from '../../firebase/firebase.utils'


const Header=({currentUser})=>(
    <div className='header'>
        <Link className='logo-container' to='/'><Logo/></Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            { currentUser 
             ?
                <div className='option' onClick={()=> auth.signOut()}> SIGNOUT</div>
             :  
            <Link className='option' to='/signin'>SIGNIN</Link>}
        </div>
    </div>
)
export default Header