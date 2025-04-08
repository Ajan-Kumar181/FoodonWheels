
import './Header.css'
import { LOGO_URL } from '../Utils/Constants';
import {Link} from 'react-router-dom'

const Header =()=>{

    return(
        <div className="header_section">
            <div>
            <Link to ="/"><img src={LOGO_URL} alt ="we deliver food" className='Logo'></img></Link>
            </div>
            <div className="right_section">
                <h4><Link to ='/' >Home</Link></h4>
                <h4><Link to ='/concepts' >Concepts</Link></h4>
                <h4>Cart</h4>
                <h4><Link to ='/contact' >Contact Us</Link></h4>
                <button className='Login_button'>Login</button>
            </div>
        </div>
    )
}

export default Header;