
import {useState} from 'react';
function Card({id,name,info,image,tag,removeTour})
{    

    
     const[readmore,setReadmore]=useState(false);      //initially will show read more
     const description= readmore?info:`${info.substring(0,100)}...`;
     
     console.log("Description: ", description);
     function clickHandler()
     {
          setReadmore(!readmore);
          console.log(readmore);
     }
       
    return(     //an object
        <div className='card'>
            <img src={image} alt='img' className='image'></img>
            <div className='home-details'>
                <h4 className='home-tag'>{tag}</h4>
                <h4 className='home-name'>{name}</h4>
            </div>
            <div className='description'>
                {description}
                 <span onClick={clickHandler} className='read-more'>
                    {readmore?`show less`: `read more`}
                 </span> 
            </div> 
            <button className='btn-read' onClick={()=>{removeTour(id)}}>Not Interested</button>
        </div>
    )
}
export default Card;