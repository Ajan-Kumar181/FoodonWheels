
import { useContext, useState } from 'react';
import { LOGO_URL } from '../Utils/Constants';
import {Link} from 'react-router-dom'
import loggedInUser from './UserContext';
import { useSelector } from 'react-redux';
const Header =()=>{
    const [user , setUser] = useState("Login");
    const {username} = useContext(loggedInUser);
    const handlelogin = ()=>{
        setUser(username);
    }

    const noOfCartItems = useSelector((state) => state.cart.cartItems);
    return(
        <div className="flex justify-between p-2.5 pr-[20px] m-2 bg-pink-200 ">
            <div>
            <Link to ="/"><img src={LOGO_URL} alt ="we deliver food" className='w-20'></img></Link>
            </div>
            <div className="flex items-center gap-[40px]">
                <h4 className='text-lg font-medium'><Link to ='/' >Home</Link></h4>
                <h4 className='text-lg font-medium'><Link to ='/concepts' >Concepts</Link></h4>
                <h4 className='text-lg font-medium'><Link to ='/cart'>Cart - {noOfCartItems.length}</Link></h4>
                <h4 className='text-lg font-medium'><Link to ='/contact' >Contact Us</Link></h4>
                <h4 className='text-lg font-medium'><Link to ='/profile' >Profile</Link></h4>
                {/* <h4 className='text-lg font-medium'><Link to ='/grocery' >Grocery</Link></h4> */}
                <button className='bg-blue-300 px-6 py-0.5 rounded-2xl hover: cursor-pointer' onClick={handlelogin}>{user}</button>
            </div>
        </div>
    )
}

export default Header;