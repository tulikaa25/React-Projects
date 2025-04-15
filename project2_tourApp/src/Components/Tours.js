
import Card from './Card';
function Tours({tours,removeTour})
{
    return(
        <div className='container'>
        <div>
        <h2 className='title'>Reimagining Homes with AI</h2>

        </div>
        <div className='cardbox'>
        {
           //to avoid writing card multiple times 
           tours.map((tour)=>{          //tours is an array
            return <Card {...tour}  removeTour={removeTour}></Card>   //tour is an object in array
           })
        }
       </div>
        </div>
       
    )
}   
export default Tours;