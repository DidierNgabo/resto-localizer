import {  useContext } from "react"
import { RestaurantContext } from "../context/restaurantContext";
import RestaurantsDetails from "./RestaurantsDetails";
import ScrollableFeed from 'react-scrollable-feed';
import ReactLoading from 'react-loading';


const List = () => {
    const {restaurants} = useContext(RestaurantContext);
    console.log(restaurants);
    return (
        <div className="md:w-3/12 pt-6 px-2 h-full bg-gray-50">
            <h2 className="font-semibold text-xl text-center">Available Restaurants</h2>
            {
                restaurants && (
                    <ScrollableFeed className="scrollbar scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
                    {restaurants.map((restaurant:any)=>(
                        <RestaurantsDetails restaurant={restaurant} />
                    ))}
                    </ScrollableFeed>
                )
            }
            {!restaurants && <ReactLoading type="bubbles" color={'blue'} width={"20%"} height={"20%"} />}
            
        </div>
    )
}

export default List
