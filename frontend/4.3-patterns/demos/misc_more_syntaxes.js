// Refs: Gives you access to the Vanilla JS DOM element "underneath" the hood.
// Useful mostly for integrating React with older code or another framework.

class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef()
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div className="AutoFocusTextInput">
        <label>Your name:</label>
        <input ref={this.textInput} />
      </div>
    );
  }
}



// Using refs + shouldCompontentUpdate: Wrap Legacy Pattern: Pattern for
// wrapping a legacy JavaScript library

class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props);

    this.textArea = React.createRef()
  }

  componentDidMount() {
    // As an example, setting up CKEditor using "ClassicEditor"
    ClassicEditor.create(this.textArea.current)
  }

  shouldComponentUpdate() {
    // Prevent react from updating
    return false;
  }

  render() {
    return (
      <div className="AutoFocusTextInput">
        <textarea ref={this.textArea} />
      </div>
    );
  }
}




// Render prop: You'll see some libraries & APIs use this strange-looking
// pattern, often if the library or needs to do requests to get API data. Just
// go with whatever example code they provide you, and trust it works!
// Official React documentation on this pattern:
// https://reactjs.org/docs/render-props.html
function App () {
  // StreetAddressAPI is a made up, example component, just to provide an
  // example of this, which fetches information on a street address.
  return (
    <div className="App">
      <StreetAdressAPI
        searchTerm="1721 Broadway St"
        render={data => (
          <h1>Location: {data.locationName}</h1>
          <p>City: {data.city}</p>
          <p>State: {data.state}</p>
        )}
      />
    </div>
  );
}

