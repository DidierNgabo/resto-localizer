import { useContext } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import { RestaurantContext } from "../context/restaurantContext";

const Home = () => {
    const {coords,restaurants} = useContext(RestaurantContext);
    console.log("rest",restaurants);
    return (
      <div className="flex flex-col overflow-hidden  bg-green-100 h-screen">
        <Header/>
        <div className="md:flex h-full flex-1  justify-between items-start">
        { coords &&  <Map/>}
        <List  />
        </div>
      
      </div>
    );
}

export default Home
