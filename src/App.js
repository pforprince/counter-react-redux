import './App.css';
import { incrementNumber, decrementNumber } from './actions';
import {useSelector, useDispatch} from 'react-redux'


function App() {
  const dispatch = useDispatch()
const state= useSelector(state=> state.changeNumber)
  return (
    <>
      <div className="main-div">
      

      <div class="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <a class="quantity__minus" onClick={()=> dispatch(decrementNumber())} title="Decrement"><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={state}/>
        <a class="quantity__plus"  onClick={()=> dispatch(incrementNumber())} title="Increment" ><span>+</span></a>
      </div>
  
          </div>
        </div>
    </>
  
  );
}

export default App;
