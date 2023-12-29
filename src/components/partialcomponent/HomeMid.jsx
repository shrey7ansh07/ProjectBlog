import React, { useEffect } from 'react'
import people1 from "../images/Peoples/person1.jpeg"
import people2 from "../images/Peoples/person2.jpeg"
import people3 from "../images/Peoples/person3.jpeg"
import { useState,useCallback } from 'react'



function HomeMid() {
const [isSmall, setIsSmall] = useState(window.innerWidth < 570);

const checkit = useCallback(() => {
  setIsSmall(window.innerWidth < 1000);
}, []);

useEffect(() => {
  window.addEventListener('resize', checkit);
  return () => {
    window.removeEventListener('resize', checkit);
  };
}, [checkit]); 



const People = 
[
    {
        name: "Chanlder Bing",
        imageURL: people1,
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae. Nisi pariatur repudiandae ullam ducimus soluta vero dolor nesciunt at, perferendis maiores? Quos, mollitia molestiae?"
    },
    {
        name: "Olivia Heinsberg",
        imageURL: people2,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dicta corporis temporibus commodi architecto voluptatibus, quasi voluptates consequuntur praesentium ipsa magni, minus enim, vero ad nostrum quae magnam nobis doloribus."
    },
    {
        name: "Mitchell Marker",
        imageURL: people3,
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae. Nisi pariatur repudiandae ullam ducimus soluta vero dolor nesciunt at, perferendis maiores? Quos, mollitia molestiae?"
    }

]
  return (
    <div className='md:mb-[80px] mb-[40px] flex flex-col justify-center items-center md:gap-[30px] gap-[20px]'>
        {
            People.map( (person,index) => {
                return <div className={`w-[100%] flex flex-row ${isSmall? "flex-col items-center":`flex-row items-center ${index%2==0?"justify-start":"justify-end"} md:px-[200px] px-[100px]`} gap-[15px]`} key={index}>
                    <div className= {`flex md:gap-[20px] gap-[15px] flex-col justify-center items-center`}>
                        <img src={person.imageURL} alt="" className=' rounded-full md:w-[150px] aspect-square w-[100px] object-cover object-center
                        border-2 border-gray-300 hover:md:border-4 hover:border-white hover:scale-110 transition-all duration-200 ease-out cursor-pointer'/>
                        <h1 className='text-center md:text-[18px] text-[13px] text-gray-200 font-semibold gradient-install'>{person.name}</h1>
                    </div>
                    <div className={`md:w-[400px] w-[250px] h-auto max-h-[300px] text-gray-300 md:text-base text-[9px] text-center`}>
                        {person.review}
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default HomeMid