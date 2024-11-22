
import './ProductForm.css';
import {useState} from 'react';
function ProductForm()
{


    const[title,setTitle]=useState('');

    function titleChangeHandler(event)
    {
        setTitle(event.target.value);
        console.log(event.target.value);
    }
    return(
        <form>
            <div className='new-product-title'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product-date'>
                <label>Date</label>
                <input type='date'></input>
            </div>
            <div>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}
export default ProductForm;