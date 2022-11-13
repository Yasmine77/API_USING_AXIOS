import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
function App() {
  return (
    <div className="App-header">
      <h1 style={{ color: 'blue',textAlign:"center"}}> List Of Users</h1>
      <UserList/>
    </div>
  );
}

export default App;
