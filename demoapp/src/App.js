
import './App.css';
import ItemDate from './components/ItemDate';
import Item from './components/Item';
import Card from './components/Card';
import NewProduct from './components/NewProduct'
function App() {
  //fetching response 
  const response =[
    {
    itemName:"sweets",
    itemDate:"20",
    itemMonth:"October",
    itemYear:"2024"
  },
  {
    itemName:"biscuits",
    itemDate:"24",
    itemMonth:"October",
    itemYear:"2024"
  }];
  return (
    //suppose we want to insert the component here
    <div>
      <Card>
       <Item name={response[0].itemName}>This is the 1st item</Item>
       <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
       <Item name={response[1].itemName}></Item>
       <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
       <div className="App">Hello</div>
       <NewProduct></NewProduct>
      </Card>
    </div>
  )
}

export default App;
