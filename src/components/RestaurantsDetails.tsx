import { FC } from "react"

interface IProps{
    restaurant:any
}
const RestaurantsDetails:FC<IProps> = ({restaurant}) => {
    return (
        <div className="shadow-xl mt-4 w-11/12 mx-auto">
            <img src={restaurant.photo ? restaurant.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt="" />
            <h2 className="text-center font-semibold font-serif text-lg">{restaurant.name}</h2>
            <div className="detail-container">
                <h3 className="detail-title">Price Level</h3>
                <h3>{restaurant.price_level}</h3>
            </div>
            <div className="detail-container">
                <h3 className="detail-title">Ranking</h3>
                <h3>{restaurant.ranking}</h3>
            </div>
            <div className="detail-container">
                <h3 className="detail-title">Location</h3>
                <h3>{restaurant.address}</h3>
            </div>

            <div className="detail-container">
                <h3 className="detail-title">Phone</h3>
                <h3>{restaurant.phone}</h3>
            </div>
        </div>
    )
}

export default RestaurantsDetails
