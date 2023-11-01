/*
  OOP Syntax
  Class-based components.
  - Refers to props as "this.props.XXXXX"
  - Refers to state as "this.state.XXXXX"
*/
class InfoClicker extends Component {
  constructor() {
    super();

    // You can only have 1 state variable, named "state", so usually we set
    // this to be a object so we can store more data inside of it.
    // The default / initial values get defined here.
    this.state = {
      count: 0,
    };

    // Do this for all "methods" that are used as events and also need access
    // to "this" (e.g. to modify state)
    this.doIncrement = this.doIncrement.bind(this);
  }

  // Define a "method" (function). This is where we put all our state
  // manipulation functions.
  doIncrement() {
    this.setState({ // State is typically an object, so we use this syntax
      count: this.state.count + 1,
    });
  }

  // Special "Lifecycle" method called componentDidMount. This method is called
  // when the component first loads (equivalent to useEffect with an empty [])
  componentDidMount() {
    console.log('do fetch here...')
  }

  // Special "Lifecycle" method called componentDidUpdate. This method is called
  // after the component re-renders (equivalent to useEffect without an array)
  componentDidUpdate() {
    console.log('do something with new state here...')
  }

  // The "render()" method is where the JSX goes, and is invoked to re-render
  render() {
    return (
      <div className="InfoClicker">
        <button onClick={this.doIncrement}>Click me</button>
        <p>Count: {this.state.count}</p>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}


/* ******************************************
Same thing rewritten using state & life-cycle hooks with function components
*/
function InfoClicker(props) {
  const [count, setCount] = useState(0);
  function doIncrement() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log('do fetch here...')
  }, []);
  useEffect(() => {
    console.log('do something with new state here...')
  });

  return (
    <div className="InfoClicker" onClick={doIncrement}>
      <p>Count: {count}</p>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

