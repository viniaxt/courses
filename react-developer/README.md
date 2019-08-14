**WHY react?**

In the earlies, each browser implemented different scripts that run their applications.

Then single page applications (SPA) came,and so do angular, creating space for MVC model. Nowadays, applications are even bigger, demanding smarter programs with smarter architecture.

**THAT'S WHERE REACT WAS BORN**

In 2014, AngularJS have been renamed to Angular,
and, since that time, react has been taking place
of frontend development

Imperative VS Declarative:

- AngularJS, ...
  Imperative approach: "you directly change
  individual parts of your app in response to vari-
  ous user events"

- React, ...
  Declarative approach: "Declare to me what your
  app looks like. Hey, this is a JS object of how
  i want the app to look like. Just tell me what
  the page should look like. This is the state of
  my app."

**REACT CONCEPTS**

_Don't touch the DOM, i'll do it_

- Based on whatever the state is written, i'm just going to react to it and change everything for you in the display that you want.

_Based on components that fit together to create things_

- Components are JS functions that receive some sort of input or attr and, in return, returns us something that look like HTML, but is JS

- Each of this components work together to build our app

_Unidirectional data flow_

- Everything that you need to change in your application, you will get it by changing it's state.

- ( state, components ) -> virtual DOM -> real DOM

- Tou only need to look at where your state exists3

_UI, the rest is up to you_

- React only cares about your interface. If you need other thigs, you can add them in your project

**So...**

React is a declarative paradigm, we give it some state, components (JSX, sometimes you receive props), that creates a virtualDOM in JS, and virtualDOM is used to update real DOM

To be the best...

- Decide great on your components
- Decide the State and where it lives
- What changes should we make when state changes (what part of the virtualDOM changes)

**DEPLOYING**

I've decided to keep this repository inside courses/ so, in case you need to deploy in github (using gh-pages), just extract monsters code and push it again in another repository.

**Lifecycle methods**

_Class component_

- Access to state natively

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

_Functional component_

- Faster
- Can access state through props

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
