
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImg from './profile.png'
import Profile from './Components/Profile';

function App() {


      var Listprof = [
    {
      fullName: 'Emna',
      bio: "This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!",
      profession:"boulanger",
      },
      
];
const displayName=(name)=>{
  alert(`the profile name is ${name}`)
}
return (
  <>
  <Profile Listprof={Listprof} displayName={displayName}>
    {myImg}
  </Profile>
  </>
);
  
}

export default App;
