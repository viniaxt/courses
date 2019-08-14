# Key Concepts of React

## Remember!

- Don't touch the DOM, i'll do it
- Build websites like lego blocks
- Unidirectional data flow
- UI, The rest is up to you

**Lifecycle methods**

_Class component_

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- Access to state natively

_Functional component_

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- Faster
- Can access state through props only!
