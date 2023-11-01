// Many examples of alternate
// function-based component syntaxes

/* ******************************************
Syntax 1: Using state & life-cycle hooks with
function components
*/
function InfoClicker(props) {
  const [count, setCount] = useState(0);
  function doIncrement() {
    setCount(count + 1);
  }
  return (
    <div className="InfoClicker"
        onClick={doIncrement}>
      <p>Count: {count}</p>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}


/*
  Component Syntax #2: Functional with arrow function
*/
const InfoClicker = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="InfoClicker"
        onClick={() => setCount(count + 1)}>
      <p>Count: {count}</p>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};


/*
  Component Syntax #3: "Pure" Arrow Function
    * "Stateless component"
    * Only has the JSX, so cannot use any JS
      statements or state, only JSX
      expressions (e.g. no if, for, etc)
*/
const InfoClicker = (props) => (
  <div className="InfoClicker">
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
  </div>
);


/* ****************************************** */
/* Deconstructed props! */
/* ****************************************** */

/*
Using object destructuring, we can
do all 3 of the same component syntaxes,
except extracting the props directly
into variables
*/

// Syntax 1 + destructuring
function InfoClicker({name, age}) {
  const [count, setCount] = useState(0);
  return (
    <div className="InfoClicker"
        onClick={() => setCount(count + 1)}>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}


// Syntax 2 + destructuring
const InfoClicker = ({name, age}) => {
  const [count, setCount] = useState(0);
  return (
    <div className="InfoClicker"
        onClick={() => setCount(count + 1)}>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};


// Syntax 3 (stateless) + destructuring
const InfoClicker = ({name, age}) => (
  <div className="InfoClicker">
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>
);


