import { FC } from "react"

interface IProps{
    restaurant:any,
    lat:number,
    lng:number
}

const RestaurantCard:FC<IProps> = ({restaurant,lat,lng}) => {
    return (
        <div className="bg-white  w-20 shadow-2xl p-2">
            <p className="font-semibold mb-1">{restaurant.name}</p>
            <img className="h-12 w-full  " src={restaurant.photo ? restaurant.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={restaurant.name} />
            <p className="mt-1 w-10 text-center p-1 rounded-full bg-green-300">{restaurant.rating}</p>
        </div>
    )
}

export default RestaurantCard
