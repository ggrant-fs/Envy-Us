import {Route} from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Layout from './Components/Layout/Layout'
import LandingScreen from './Screens/LandingScreen/LandingScreen'

function App() {
  return (
    <div className="App">
     <Route exact path='/'>
       <LandingScreen/>
     </Route>
     <Route path='/nav'>
       <Nav/>
     </Route>
     <Route path='/footer'>
       <Footer/>
     </Route>
     <Route path='/layout'>
       <Layout>

       </Layout>
     </Route>
    </div>
  );
}

export default App;
