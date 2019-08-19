import React from "react"
import { Route, Switch, Link } from 'react-router-dom'

import "./App.css"
import HomePage from "./pages/homepage/homepage.component"


const TopicsList = (props) => {
  return (
    <div>
      <h1>Topics List</h1>
      <Link to={`${props.match.url}/1`}> 1 </Link>
      <Link to={`${props.match.url}/2`}> 2 </Link>
      <Link to={`${props.match.url}/3`}> 3 </Link>
    </div>
  )
}

const TopicDetail = (props) => {
  return (
    <div>
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      <h1>Topic detail => {props.match.params.topicId}</h1>
    </div>
  )  
} 

function App() {
  return (
    <div>
      {/* Switch renders route(s) that matches with URL*/}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail}/>
      </Switch>
    </div>
  )
}

export default App
