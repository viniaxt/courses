import React from "react"
import { Route, Switch } from 'react-router-dom'

import "./App.css"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(
          // onNext parameter
          snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            })
          },
          // onError parameter
          error => {
            console.log(error)
          }
        )

      } else {
        this.setState({ currentUser: userAuth }) // null
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  // Switch renders route(s) that matches with URL
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
