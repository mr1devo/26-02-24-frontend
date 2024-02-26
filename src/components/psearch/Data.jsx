import { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import {Buffer} from 'buffer';


// Define your Data component
const Data = () => {
    const [place, setPlace] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4005/Placedetails/photoview")
            .then(response => {
                console.log(response.data);
                setPlace(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Define an array to hold card data
    const cardData = [];

    // Populate card data based on place data
    place.forEach((value, index) => {
        cardData.push({
            id: index + 1,
            img: <img src={`data:image/jpeg;base64,${Buffer.from(value.placephoto.data)}`} alt='Error'/>,
            title: value.placename,
            place: value.placename,
            desc: value.tsee,
        });
    });

    // Return the populated card data array
    return cardData;
}

export default Data;
