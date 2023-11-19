

// Type 1
function DataInput() {
  console.log('Getting rendered!', props);
  return (
    <div className="DataInput">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        />
    </div>
  )
}



// Type 2
const DataInput = props => {
  console.log('Getting rendered!', props);
  return (
    <div className="DataInput">
      <label>{this.props.label}</label>
      <input
        value={this.props.value}
        onChange={this.props.onChange}
        />
    </div>
  );
}



function DataInput(props) {
  // Older, but still valid, syntax for above
  console.log('Getting rendered!', props);
  return (
    <div className="DataInput">
      <label>{this.props.label}</label>
      <input
        value={this.props.value}
        onChange={this.props.onChange}
        />
    </div>
  );
}



// Type 3 - JUST JSX, not JavaScript statements available (e.g. can't put
// console.log in this one)
const DataInput = props => (
  <div className="DataInput">
    <label>{this.props.label}</label>
    <input
      value={this.props.value}
      onChange={this.props.onChange}
      />
  </div>
);


/// annnnnd you can even omit the parenthesis
const DataInput = props =>
  <div className="DataInput">
    <label>{this.props.label}</label>
    <input
      value={this.props.value}
      onChange={this.props.onChange}
      />
  </div>




