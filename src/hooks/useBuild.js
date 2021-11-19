import React, { useState }  from 'react';


const useBuild = () => {
    const [myJeep,setMyJeep]=useState({})
   
    return {myJeep,setMyJeep}
};

export default useBuild;