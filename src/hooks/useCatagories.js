import { useEffect } from "react";
import { useState } from "react"

const useCatagories = () => {
    const [wheelers, setWheelers] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/allcatagogy')
            .then(res => res.json())
            .then(data => setWheelers(data));
    }, []);
    return [wheelers, setWheelers];
}

export default useCatagories;