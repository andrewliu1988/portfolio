import './App.css'
import { Switch, Route } from 'react-router-dom'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <Switch>
          <Route exact path="/" component={Introduction} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route pat="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  )
}

export default App
