# React Class to Function

This guide consists of pointers about reading example code that uses class OOP
syntax, instead of our function-based syntax.


* **When to use:** You have some example code you found online, either in
  documenting a component, or how to do a particular thing in react, and
  instead of using a function and `useState`, it's in the format of
  `class ComponentName extends Component {`

* **The goal:** Understand the code well enough to copy & paste it into a
  function-based component.

* **Alternate option:** Instead of doing this, you could just switch to
  class-based components --- however, it's probably easier to keep everything
  as functions.

* **More reading:** There are MANY tutorials on this exact same topic online.
  Here are a few:
  - <http://reactjs.org/docs/hooks-state.html>
  - <http://digitalocean.com/community/tutorials/react-converting-to-a-hook>


Step 1: render method
------------------------------------------------------

Start by copying the contents of the render method into your function. This
should be straight forward:

- JSX should go with JSX, e.g. after the return
- Any JavaScript code should go above the return, just as it was before
- Fix all references of `this.props` to just `props`


**Example:**

        class ExampleCode extends Component {
          render() {
            let word = 'Testing';
            return (
              <div><strong>{word}</strong> {this.props.text}</div>
            )
          }
        }

**Becomes:**

        function ExampleCode(props) {
          let word = 'Testing';
          return (
            <div><strong>{word}</strong> {props.text}</div>
          )
        }



Step 2: Convert state & default state
------------------------------------------------------

The easiest way to convert OOP-based state is as follows:

1. Create a single state variable called "state" with the following code:

        const [state, setState] = useState({
            // default state goes here (e.g. what starts with `state = {`)
        });

2. Replace all references to `this.state` to just `state`

3. Replace all references to `this.setState` to just `setState`


**Example:**

        class ExampleCode extends Component {
          /* NOTE: The following lines instead be in the constructor */
          state = {
            count: 0,
          }

          render() {
            return (
              <div onClick={() => this.setState({count: this.state.count + 1})>
                {this.state.count}
              </div>
            )
          }
        }


**Becomes:**

        function ExampleCode(props) {
          const [state, setState] = useState({
            count: 0,
          });

          return (
            <div onClick={() => setState({count: state.count + 1})>
              {state.count}
            </div>
          )
        }




Step 3: Convert methods into functions
------------------------------------------------------

Replace all methods with function syntax. Be sure to update this.setState with
the equivalent.

**Example:**

        class ExampleCode extends Component {
          state = {count: 0}
          doIncrement = () => { // OR, like: `doIncrement() {`
            this.setState({count: this.state.count + 1});
          }
          render() {
            return (
              <div onClick={this.doIncrement}>{this.state.count}</div>
            )
          }
        }

**Becomes:**

        function ExampleCode(props) {
          const [state, setState] = useState({ count: 0 });
          function doIncrement() {
            setState({count: this.state.count + 1});
          }
          return (
            <div onClick={doIncrement}>{state.count}</div>
          )
        }



Step 4: Convert componentDidMount to useEffect
------------------------------------------------------


**Example:**

        class ExampleCode extends Component {
          /* snip */
          componentDidMount () {
            consoe.log('starting fetch... etc');
          }
          /* snip */
        }


**Becomes:**

        function ExampleCode (props) {
          /* snip */
          function initialSetup() {
            // (could be named something other than initialSetup)
            consoe.log('starting fetch... etc');
          }
          useEffect(initialSetup, []);
          /* snip */
        }



Optional steps
------------------------------------------------------

- If the original version had several properties within the state object, that
  it would set individually, you'll need to modify your setState slightly.
  You'll need to do this if there are more than one properties, but the
  setState code only affects one at a time. Example:


          // For state like:
          state = {
            count: 0,
            text: 'Type your name...'
          }

          // instead of:
          setState({
            count: state.count + 1,
          })

          // you may need to do:
          setState({
            ...state, // include old state
            count: state.count + 1,
          })

          // otherwise the "text" property will be forgotten
          // (the OOP this.setState did this automatically)



- Alternatively, if the original version didn't have much within the state
  object, consider breaking it down into individual variables. This solves the
  above issue, and also might make your code easier to understand. Example:


          // instead of:
          const [state, setState] = useState({
            count: 0,
          });

          // consider:
          const [count, setCount] = useState(0);

