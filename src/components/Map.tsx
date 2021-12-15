import GoogleMapReact from 'google-map-react';
import { useContext } from 'react';
import { RestaurantContext } from '../context/restaurantContext';
import RestaurantCard from './RestaurantCard';



const Map = () => {
    const {coords,setCoords,setBounds,restaurants} = useContext(RestaurantContext);
    console.log(restaurants);
    console.log("in map",coords);
   // const coords = {lat:-1.9791872,lng:30.1367296}
    return (
        <div  className="md:w-3/4 h-full">
            <GoogleMapReact 
            bootstrapURLKeys={{key :process.env.REACT_APP_GOOGLE_API_KEY || ''}} 
            defaultCenter={coords} center={coords} 
            defaultZoom={14} 
            margin={[50,50,50,50]}
            onChange={(e)=>{
                setCoords({lat:e.center.lat,lng:e.center.lng})
                setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
            }}
            >

            { restaurants && 
                restaurants?.map((restaurant:any,i:any)=>(
                   
                    <RestaurantCard lat={Number(restaurant.latitude)} 
                    lng={Number(restaurant.longitude)} 
                    key = {i}
                    restaurant={restaurant}/>
                ))
            }
            </GoogleMapReact>
        </div>
    )
}

export default Map
