import { createContext, useEffect, useState } from "react";
import { getPlacesData } from "../api";
import { IBounds } from "../types/bounds";
import { ILocation } from "../types/coords";
import { RestaurantContextState } from "../types/restaurant";



const defaultState:RestaurantContextState={
    restaurants:[],
    coords:{},
    setCoords:()=>{},
    bounds:{},
    setBounds:()=>{},
    setRestaurants:()=>{}
}


export const RestaurantContext = createContext(defaultState);



type RestaurantContextProviderProps = {
    children:React.ReactNode
}


const RestaurantProvider = ({children}:RestaurantContextProviderProps)=>{
     const [coords,setCoords] = useState<ILocation|any>({});
     const [bounds,setBounds] = useState<IBounds|any>(null);
     const [restaurants,setRestaurants] = useState<any>();

     useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          setCoords({ lat: latitude, lng: longitude });
        });
      }, []);
    
      useEffect(() => {
        console.log("runned");
        console.log("just loc: ",coords)
        console.log("just bound: ",bounds)
        
          getPlacesData(bounds).then((data)=>{
            setRestaurants(data);
            console.log(data);
            console.log(restaurants);
          });
      }, [bounds,coords])

      const value = {
          restaurants,
          bounds,
          setBounds,
          coords,
          setCoords,
          setRestaurants,
      }


      return (
          <RestaurantContext.Provider value={value} >{children}</RestaurantContext.Provider>
      )

}


export default RestaurantProvider;