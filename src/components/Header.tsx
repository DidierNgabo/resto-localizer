import {Autocomplete} from '@react-google-maps/api'
import { useContext, useState } from 'react';
import {  useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { RestaurantContext } from '../context/restaurantContext';
const Header = () => {
    const navigate = useNavigate();
    const {setCoords} = useContext(RestaurantContext);
    const {currentUser,logout} = useContext(AuthContext);
    const handleClick = ()=>{
        logout();
        navigate('/');
    }

    const [autoComplete, setautoComplete] = useState<any>('');
    const onLoad = (search:any) => setautoComplete(search);

    const handlePlaceChanged = () =>{
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();

        setCoords({lat,lng});

    }


    return (
        <div className="md:flex items-center justify-between bg-blue-400 px-4 py-2">
            <h2 className="font-bold font-mono text-white text-2xl">Restaurant Locator</h2>
            <Autocomplete className="mt-4 md:mt-0"  onLoad={onLoad} onPlaceChanged={handlePlaceChanged}>
                <div  className="relative ">
                    
                    <input className="h-9  rounded-sm" type="text" placeholder="Enter location..." />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 absolute text-gray-500 bottom-2 right-1 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
                </div>
            </Autocomplete>
            <div className="mt-4 md:mt-0">
             <h2 className="text-white font-semibold inline mr-4">{currentUser?.email}</h2>
             <button onClick={handleClick} className="px-4 py-2 bg-red-400 text-white font-semibold">logout</button>
            </div>
        </div>
    )
}

export default Header
