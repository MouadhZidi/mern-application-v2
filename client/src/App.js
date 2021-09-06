import './App.css';
import Add from './Components/Add';
import ContactList from './Components/ContactList';
import {Link, Route, Switch} from 'react-router-dom';
import { Button} from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { toggleFalse } from './JS/actions/edit';


function App() {
  const  dispatch = useDispatch()
  return (
    <div className="App">
      <h2>workshop MERN</h2><br></br>
      <Button inverted color='blue' onClick={()=>dispatch(toggleFalse())}>
        <Link to="/add">Add Contact</Link>
        </Button>
        <Button inverted color='blue'>
        <Link to="/">Contact List</Link>
        </Button><br></br>
      <Switch>
       <Route exact path="/" component={ContactList}/>
        <Route path={["/add","/edit/:id"]} component={Add}/>
      </Switch>
    </div>
  );
}

export default App;
