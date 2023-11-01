// Alternative component syntaxes: "Bound methods"
// - In JavaScript, annoyingly normal methods are "unbound" by default.
// - Unbound methods cannot use the word "this" if they are called from an
// event (e.g. onClick)
// - There are a few ways around this. We have been using one way all this
// time, but it's good to know other ways so you understand other people's
// code.

/*
  This method will be "bound".
*/
class CounterButton extends Component {
  state = {
    count: 0,
  }

  doIncrement = () => {
    this.setState({
      count: count + 1,
    });
  }

  render() {
    return (
      <div className="CounterButton">
        <div onClick={this.doIncrement}>
          Click me
        </div>
        Counter: {this.state.count}
      </div>
    );
  }
}



/*
  Another way to do the same thing
  (in fact, Babel transforms the above syntax into this below syntax)
*/
class CounterButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }

    this.doIncrement = () => {
      this.setState({
        count: count + 1,
      });
    }
  }

  render() {
    return (
      <div className="CounterButton">
        <div onClick={this.doIncrement}>
          Click me
        </div>
        Counter: {this.state.count}
      </div>
    );
  }
}





/*
  Another common way to do this -- you'll see the official React documentation
  often writing things with this syntax.
*/
class CounterButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }


  doIncrement() {
    // This method is now "unbound", since its using the older syntax
    this.setState({
      count: count + 1,
    });
  }

  render() {
    // Notice we need to do a ".bind(this)" to explicitly get around the
    // "binding" issue.
    return (
      <div className="CounterButton">
        <div onClick={this.doIncrement.bind(this)}>
          Click me
        </div>
        Counter: {this.state.count}
      </div>
    );
  }
}


