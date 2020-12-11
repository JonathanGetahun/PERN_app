import React, {useState, createContext} from 'react';


export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    const [restaurants, setRestaurants] = useState([])
    //for details page
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)

    const addRestaurant = (restaurant) => {
        console.log("its reaching")
        setRestaurants([...restaurants, restaurant])
    }; 

    return (
        <RestaurantsContext.Provider value={{restaurants, 
            setRestaurants, 
            addRestaurant, 
            selectedRestaurant, 
            setSelectedRestaurant}}>

                {props.children}
        </RestaurantsContext.Provider>
    )
}