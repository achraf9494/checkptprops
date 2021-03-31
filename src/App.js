
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';

function App() {
  const Tab = [
    {
      FullName:'Achraf Khemakhem',
      Bio: 'Ingenieur',
      Profession:'Full Stack JS'
    }
  ]
  const handleName = (FullName) => alert(` ${FullName}`)
  return (
    <div className="App">
      {
        Tab.map(el=> <ProfileComponent donnee={el} handleName={handleName}>

          <img src="./logo192.png" alt="logo"/>
        </ProfileComponent>)
      }
      
    </div>
  );
}

export default App;
