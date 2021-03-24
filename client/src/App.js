import {Route} from 'react-router-dom'
import Article from "./Components/Article/Article"
import {getArticles} from './services/articles'
// import DetailScreen from './Screens/DetailScreen/DetailScreen'
import LandingScreen from './Screens/LandingScreen/LandingScreen'


function App() {
  return (
    <div className="App">
     <Route exact path='/'>
       <LandingScreen getArticle={getArticles}/>
     </Route>
      <Route path='/article'>
         <Article/>
      </Route>
    </div>
  );
}

export default App;
