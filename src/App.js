import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';


function App() {
 
  return (
    <Router>
    <div className="App">
     <Route path='/' render={(props)=>{return <div>Home</div>}}/>
     <Route exact path="/posts" component={PostList}/>
     <Route exact path='/posts/:postId' component={PostDetail}/>
    </div>
    </Router>
  );
}

export default App;
