import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import NavBar from '././components/Navbar';


function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshData, setRefreshData] = useState(false);

  useEffect( async () => {
    const response = await fetch("https://randomuser.me/api?results=20");
    const data = await response.json();
    const [item] = data.results;
    setUser(item);
    setLoading(false);
    console.log(item);
  }, [refreshData]);

return (
  <div>
 <NavBar />
  {loading ?<div>...loading </div> : (  
    <div className="container">
    <div className="col-lg-12 text-center">
    
    <img src={user.picture.large} alt="name" />
    <div className="jumbotron my-auto">
    <h3 className="display-3"> {user.name.first}</h3>
    <p className="text-center">{user.phone}</p>
    </div>
    </div>
    
</div>

  )}

<div className="col-md-12 text-center">
  <button className="btn btn-primary btn-center" onClick={() => setRefreshData(!refreshData)}>Next User</button>
</div>
 </div>
 
)
}
export default App;
