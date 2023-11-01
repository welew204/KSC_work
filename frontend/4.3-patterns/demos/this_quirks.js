// quirks around "this"
class App extends Component {
  onButtonClick() {
    this.setState({whatever: 'thing'});
  }

  render() {

    // somewhere else....
    let myMethod = this.onButtonClick;

    myMethod(); // "this" was forgotten
    this.onButtonClick(); // "this" is remembered

    this.onButtonClick = this.onButtonClick.bind(this);

    let myMethod2 = this.onButtonClick;

    myMethod2(); // "this" is remembered

  }

}
