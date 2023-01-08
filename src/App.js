import { Route, Switch } from 'react-router-dom';
import AllMeetsup from './pages/AllMeetsup';
import NewMeetsup from './pages/NewMeetsup';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  return <div>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetsup />
        </Route>
        <Route path="/newmeetsup">
          <NewMeetsup />
        </Route>
        <Route path="/favourite">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  </div>
}

export default App;
