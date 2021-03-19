import {Route} from 'react-router-dom'
// import Nav from './Components/Nav/Nav'
// import Footer from './Components/Footer/Footer'
// import Layout from './Components/Layout/Layout'
import {getArticles} from './services/articles'
import DetailScreen from './Screens/DetailScreen/DetailScreen'
import LandingScreen from './Screens/LandingScreen/LandingScreen'


function App() {
  return (
    <div className="App">
     <Route exact path='/'>
       <LandingScreen getArticle={getArticles}/>
     </Route>
       <Route path='/detail'>
     <DetailScreen/>
       </Route>
     {/* <Route path='/nav'>
       <Nav/>
     </Route>
     <Route path='/footer'>
       <Footer/>
     </Route>
     <Route path='/layout'>
      
     </Route> */}
    </div>
  );
}

export default App;
