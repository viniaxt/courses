import React, { Component } from "react"
import "./App.css"

import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  // Data
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  /**
   *  monsters={this.state.monsters} will be passed as prop
   *
   *  Everything inside <CardList></CardList> will be
   *  passed as prop.children
   */

  /**
   * Declarative way of writing, btw that 'this' doesn't
   * need to be binded (because of arrow function)
   *
   * Use arrow functions on any class methods you define
   * and aren't part of React (i.e. render(), componentDidMount()).
   */

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
