import './App.css'
import Navigation from './components/Nav'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostDisplay from './components/PostDisplay'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <div className="postDisplay">
              <PostDisplay {...props} />
            </div>
          )}
        />
      </Switch>
    </div>
  )
}

export default App
