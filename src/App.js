import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/features/counter/counterSlice';
import { addRecord, deleteRecord } from './redux/features/records/recordSlice';

function App() {
  const count = useSelector(state => state.counter.count)
  const records = useSelector(state => state.records.record)
  const dispatch = useDispatch();

  return (
    <div className="App" >
      <h2>{count}</h2>
      <button onClick = {() => dispatch(increment()) }>Increment</button>
      <button onClick = {() => dispatch(decrement()) }>Decrement</button>
      <button onClick = {() => dispatch(incrementByAmount(10)) }>Increment by 10</button>

      <div>Records</div>
      {records?.map(record => (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h3>{record.id}</h3>
          <h3>{record.name}</h3>
          <h3>{record.age}</h3>
        </div>
      ))

      }
      <button onClick = {() => dispatch(addRecord({id: Math.floor(Math.random() * 10), name: 'Ali', age: '25'})) }>Add Record</button>
      <button onClick = {() => dispatch(deleteRecord({id: (Math.floor(Math.random() * 10))})) }>Delete Record</button>
    </div>
  );
}

export default App;
