function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const numbers = [{ number: 0, name: 'zero' }, { number: 1, name: 'one' }, { number: 2, name: 'two' }, { number: 3, name: 'three' }, { number: 4, name: 'four' }, { number: 5, name: 'five' }, { number: 6, name: 'six' }, { number: 7, name: 'seven' }, { number: 8, name: 'eight' }, { number: 9, name: 'nine' }];

const signs = [{ sign: '*', name: 'multiply' }, { sign: '/', name: 'divide' }];

class Calculator extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "clickInteger",





    e => {
      console.log("testInt");
      console.log(this.state.value.length);

      this.state.value.length === 10 ?
      this.setState({ value: "Too many digits" }) :
      this.state.value.length > 10 ?
      this.setState({ value: 0 }) :
      this.state.value === 0 ?
      this.setState({ value: e.target.innerHTML }) :
      this.state.value.length < 10 && this.state.value !== "0" ?
      this.setState({ value: this.state.value += e.target.innerHTML }) :
      this.setState({ value: this.state.value });
    });_defineProperty(this, "clickAdd",

    e => {
      console.log("testAdd");
      this.state.value.length === 10 ?
      this.setState({ value: "Too many digits" }) :
      this.state.value.length > 10 ?
      this.setState({ value: 0 }) :
      this.state.value === 0 ?
      this.setState({ value: e.target.innerHTML }) :
      this.state.value.match(/[0-9]$|[\-\/*]$|[0-9]\-$/g) ?
      this.setState({ value: this.state.value += e.target.innerHTML }) :
      this.setState({ value: this.state.value });

      this.state.value.match(/\+\+/) ?
      this.setState({ value: this.state.value.replace(/\+\+/, "+") }) :
      this.state.value.match(/\*\-\+/) ?
      this.setState({ value: this.state.value.replace(/\*\-\+/, "+") }) :
      this.setState({ value: this.state.value });
    });_defineProperty(this, "clickSubtract",

    e => {
      console.log("test1");
      this.state.value.length === 10 ?
      this.setState({ value: "Too many digits" }) :
      this.state.value.length > 10 ?
      this.setState({ value: 0 }) :
      this.state.value === 0 ?
      this.setState({ value: e.target.innerHTML }) :
      this.state.value.match(/[0-9]$|[+\/*]$|[0-9]\-$/g) ?
      this.setState({ value: this.state.value += e.target.innerHTML }) :
      this.setState({ value: this.state.value });

      this.state.value.match(/\-\-/) ?
      this.setState({ value: this.state.value.replace(/\-\-/, "+") }) :
      this.setState({ value: this.state.value });
    });_defineProperty(this, "clickDecimal",

    e => {
      console.log("testDecimal");
      this.state.value.length === 10 ?
      this.setState({ value: "Too many digits" }) :
      this.state.value.length > 10 ?
      this.setState({ value: 0 }) :
      this.state.value !== 0 && this.state.value.match(/[0-9]+[+\-\/*][0-9]+$|^[0-9]+$/g) ?
      this.setState({ value: this.state.value += e.target.innerHTML }) :
      this.setState({ value: this.state.value });
    });_defineProperty(this, "clickSign",

    e => {
      console.log("testSign");
      this.state.value.length === 10 ?
      this.setState({ value: "Too many digits" }) :
      this.state.value.length > 10 ?
      this.setState({ value: 0 }) :
      this.state.value !== 0 && !this.state.value.match(/[+\-\/*]$/g) ?
      this.setState({ value: this.state.value += e.target.innerHTML }) :
      this.setState({ value: this.state.value });
    });_defineProperty(this, "clickClear",


    e => {
      this.setState({ value: 0 });
    });_defineProperty(this, "clickEquals",


    e => {
      if (this.state.value.match(/[0-9.]+|[+-/*]+/g) === null || this.state.value.match(/[+\-\/*]$/g)) {
        return;
      } else {
        let intMatcher = this.state.value.match(/^[\-][0-9]|[0-9.]+/g);
        intMatcher = intMatcher.map(a => a.match(/[.]/g) ? parseFloat(a) : parseInt(a));

        let symMatcher = this.state.value.match(/(?!^\-)[+\/\-*]+/g);
        let newTotal = intMatcher[0];
        console.log(symMatcher);

        for (let i = 1; i <= intMatcher.length; i++) {
          switch (symMatcher[i - 1]) {
            case "+":
              newTotal = newTotal + intMatcher[i];
              break;
            case "/":
              newTotal = newTotal / intMatcher[i];
              break;
            case "*":
              newTotal = newTotal * intMatcher[i];
              break;
            case "-":
              newTotal = newTotal - intMatcher[i];
              break;
            case "+-":
              newTotal = newTotal + -intMatcher[i];
              break;
            case "/-":
              newTotal = newTotal / -intMatcher[i];
              break;
            case "*-":
              newTotal = newTotal * -intMatcher[i];
              break;}

        }

        this.setState({ value: newTotal.toString() });
      }
      return;
    });_defineProperty(this, "intMap",

    numbers.map(a => /*#__PURE__*/React.createElement("button", { id: a.name, onClick: this.clickInteger }, a.number)));_defineProperty(this, "signMap",
    signs.map(a => /*#__PURE__*/React.createElement("button", { id: a.name, onClick: this.clickSign }, a.sign)));this.state = { value: '0' };}


  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null,
      this.intMap,
      this.signMap, /*#__PURE__*/
      React.createElement("button", { id: "add", onClick: this.clickAdd }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", onClick: this.clickSubtract }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", onClick: this.clickDecimal }, "."), /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: this.clickEquals }, "="), /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.clickClear }, "clear"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", { id: "display" },
      this.state.value)));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById('root'));