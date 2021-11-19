import { useEffect } from "react";
import { useState } from "react"

const useCatagories = () => {
    const [wheelers, setWheelers] = useState([]);
    
    useEffect(() => {
        fetch('https://floating-coast-28469.herokuapp.com/allcatagogy')
            .then(res => res.json())
            .then(data => setWheelers(data));
    }, []);
    return [wheelers, setWheelers];
}

export default useCatagories;