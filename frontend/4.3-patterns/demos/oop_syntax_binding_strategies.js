// Alternative component syntaxes: "Bound methods"

/*
 - One of the most infamous of "fun quirks" in JavaScript has to do with the
   word "this". Other languages do not have this problem, but JS does.
 - In JavaScript, method (functions in classes) are "unbound" by default.
 - Unbound methods cannot use the word "this" if they are called directly, such
   as from an event (e.g. onClick) Technically, if they are ever called without
   "this.onIncrement()" style syntax)
 - There are a few ways around this. The simplest is to simply never use OOP
   syntax, since that's optional anyway (that's what we've been doing!)
 - However, it's important to at least be able to read these different styles,
   so that you can understand other people's code and use examples you find
   online.
*/

// The problem:
class InfoClicker extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  doIncrement() {
    // ERROR! "this" is not defined (or, more technically, it's randomly
    // pointing at the "window" global object, which is completely useless)
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="InfoClicker">
        <button onClick={this.doIncrement}>Click me</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}



/*
  SYNTAX #1: "Bind in constructor"
  The solution: This is how official React documentation shows it.
*/
class InfoClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // This following line "binds" doIncrement to "this" (the object instance)
    this.doIncrement = this.doIncrement.bind(this);
  }

  doIncrement() { // Now this is a "bound" method!
    this.setState({ // WORKS!
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="CounterButton">
        <button onClick={this.doIncrement}>Click me</button>
        {/* Syntax #1 variation: Bind in render(), also works: */
        <button onClick={this.doIncrement.bind(this)}>Click me</button>
        Counter: {this.state.count}
      </div>
    );
  }
}



/*
  SYNTAX #2: "Arrow functions in render"
  The solution: Since "this" is kept if you call the method like
  this.methodName(), then we just be careful to always use anonymous arrow
  functions in our onClicks, as such:
*/
class CounterButton extends Component {
  /* Snip -- the top is all the same */
  render() {
    return (
      <div className="CounterButton">
        <button onClick={() => this.doIncrement()}>Click me</button>
        Counter: {this.state.count}
      </div>
    );
  }
}



/*
  SYNTAX #3: "Arrow functions in constructor"
  This is a rarer syntax, but it leads up to a very common syntax that we'll
  learn next. Instead of using the regular method syntax, we'll just put all
  our functions in the constructor. This causes the "this" context to be
  maintained in the function.
*/
class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.doIncrement = () => {
      this.setState({
        count: count + 1,
      });
    }

  }
  /*** snip - the rest is the same  **/
  /* Can be referred to in JSX like this: */
  //    <button onClick={this.doIncrement}>Click me</button>
}




/*
  SYNTAX #4: "Arrow functions methods"
  This is a syntax that Babel will transform into the above. It also lets us
  specify our state in an arguably more elegant way, and generally reduces code
  length. However, it is NOT standard JavaScript syntax: It's only usable with
  React/JSX/Babel, and gets transformed into the previous example.
*/

class InfoClicker extends Component {
  // Using this syntax, we just declare the state variable like so:
  state = {
    count: 0,
  }

  // The alternate method syntax, which causes doIncrement to behave as though
  // it's a bound method:
  doIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="InfoClicker">
        <button onClick={this.doIncrement}>Click me</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

