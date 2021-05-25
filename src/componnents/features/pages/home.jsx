import React from 'react';
import "./../../featers/DogCard/DogCard";
import DogCard from './../../featers/DogCard/DogCard';
import './Home.css'
function Home(){

    const dogs = [
        { fName: "kiara", typeName: "chao chao", Age:4 },
        { fName: "leo", typeName: "Chihuahua", Age:2 },
        { fName: "nakita", typeName: "aski", Age:1 },
        { fName: "raksi", typeName: "podal", Age:7 }       
    ];

return( <div>
      {<div>
      {  dogs.map(dog => {
                                if (dog.Age>4) {
                                     return <div  className = "bigDog">
                                         <DogCard name={dog.fName} type={dog.typeName} age={dog.Age}/>
                                    </div>
                                }
                                else{
                                    return <div className= "smallDog">
                                    <DogCard name={dog.fName} type={dog.typeName} age={dog.Age}/>
                             </div>
                                }
   
                            })
       }

  </div> 
  }



</div>)
};

export default Home;