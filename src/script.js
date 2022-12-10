const numbers = [{number: 0, name: 'zero'},{number: 1, name: 'one'},{number: 2, name: 'two'},{number: 3, name: 'three'},{number: 4, name: 'four'},{number: 5, name: 'five'},{number: 6, name: 'six'},{number: 7, name: 'seven'},{number: 8, name: 'eight'},{number: 9, name: 'nine'}]

const signs = [{sign: '*', name: 'multiply'},{sign: '/', name: 'divide'}]

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '0'
    }
  }
  
  clickInteger = e => {
    console.log("testInt")
     console.log(this.state.value.length)
    
      this.state.value.length === 10
      ? this.setState({value: "Too many digits"})
      : this.state.value.length > 10
      ? this.setState({value: 0})
      : this.state.value === 0
      ? this.setState({value: e.target.innerHTML})
      : this.state.value.length < 10 && this.state.value !== "0"
      ? this.setState({value: this.state.value+=e.target.innerHTML})
      : this.setState({value: this.state.value})
  }
  
  clickAdd = e => {
    console.log("testAdd")
   this.state.value.length === 10
    ? this.setState({value: "Too many digits"})
    : this.state.value.length > 10
    ? this.setState({value: 0})
    : this.state.value === 0
    ? this.setState({value: e.target.innerHTML})
    : this.state.value.match(/[0-9]$|[\-\/*]$|[0-9]\-$/g)
    ? this.setState({value: this.state.value+=e.target.innerHTML})
    : this.setState({value: this.state.value})
    
    this.state.value.match(/\+\+/)
    ? this.setState({value: this.state.value.replace(/\+\+/, "+")})
    : this.state.value.match(/\*\-\+/)
    ? this.setState({value: this.state.value.replace(/\*\-\+/, "+")})
    : this.setState({value: this.state.value})
  }
  
  clickSubtract = e => {
    console.log("test1")
   this.state.value.length === 10
    ? this.setState({value: "Too many digits"})
    : this.state.value.length > 10
    ? this.setState({value: 0})
    : this.state.value === 0
    ? this.setState({value: e.target.innerHTML})
    : this.state.value.match(/[0-9]$|[+\/*]$|[0-9]\-$/g)
    ? this.setState({value: this.state.value+=e.target.innerHTML})
    : this.setState({value: this.state.value})
    
    this.state.value.match(/\-\-/)
    ? this.setState({value: this.state.value.replace(/\-\-/, "+")})
    : this.setState({value: this.state.value})
  }
  
  clickDecimal = e => {
    console.log("testDecimal")
   this.state.value.length === 10
    ? this.setState({value: "Too many digits"})
    : this.state.value.length > 10
    ? this.setState({value: 0})
    : this.state.value !== 0 && this.state.value.match(/[0-9]+[+\-\/*][0-9]+$|^[0-9]+$/g)
    ? this.setState({value: this.state.value+=e.target.innerHTML})
    : this.setState({value: this.state.value})
  }
  
  clickSign = e => {
    console.log("testSign")
    this.state.value.length === 10
    ? this.setState({value: "Too many digits"})
    : this.state.value.length > 10
    ? this.setState({value: 0})
    : this.state.value !== 0 && !this.state.value.match(/[+\-\/*]$/g)
    ? this.setState({value: this.state.value+=e.target.innerHTML})
    : this.setState({value: this.state.value})
  }
  
  
  clickClear = e => {
    this.setState({value: 0})
   }

    
 clickEquals = e => {
   if (this.state.value.match(/[0-9.]+|[+-/*]+/g) === null || this.state.value.match(/[+\-\/*]$/g) ) {
     return
   } else {
      let intMatcher = this.state.value.match(/^[\-][0-9]|[0-9.]+/g)
      intMatcher =  intMatcher.map(a => a.match(/[.]/g) ? parseFloat(a) : parseInt(a))
     
      let symMatcher = this.state.value.match(/(?!^\-)[+\/\-*]+/g)
      let newTotal = intMatcher[0]
      console.log(symMatcher)
      
      for (let i = 1; i <= intMatcher.length; i++) {
          switch(symMatcher[i-1]) {
              case "+":
                newTotal = newTotal+intMatcher[i]
                break;
              case "/":
                newTotal = newTotal/intMatcher[i]
                break;
              case "*":
                newTotal = newTotal*intMatcher[i]
                break;
              case "-":
                newTotal = newTotal-intMatcher[i]
                break;
              case "+-":
                newTotal = newTotal+-intMatcher[i]
                break;
              case "/-":
                newTotal = newTotal/-intMatcher[i]
                break;
              case "*-":
                newTotal = newTotal*-intMatcher[i]
                break;
        }
      }
      
      this.setState({value: newTotal.toString()})
    }
   return
 }
  
  intMap = numbers.map(a => <button id={a.name} onClick={this.clickInteger}>{a.number}</button>)
  signMap = signs.map(a => <button id={a.name} onClick={this.clickSign}>{a.sign}</button>)
  
  
  render() {
    return (
      <>
      {this.intMap}
      {this.signMap}
        <button id="add" onClick={this.clickAdd}>+</button>
        <button id="subtract" onClick={this.clickSubtract}>-</button>
        <button id="decimal" onClick={this.clickDecimal}>.</button>
        <button id="equals" onClick={this.clickEquals}>=</button>
        <button id="clear" onClick={this.clickClear}>clear</button>
        <br />
        <div id="display">
         {this.state.value}
        </div>
      </>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));