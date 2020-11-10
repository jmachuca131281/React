import { Component } from 'react';

// Las tres formas de definir un componente.

// Como una función.

// function Hello (props){
//   return <h2>{props.title}</h2>
// }

// Array function.

// const Hello = (props) => <h2>{props.title}</h2>

// Como clase, es te tipo tiene mas ventajas que las anteriores. EcmaScript script 15.

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {
    const {
      arrayOfNumbers,
      isActivated,
      multiply,
      // objetoWithInfo
      title
    } = this.props
    const textoSegunBool = isActivated ? 'Cierto' : 'Falso'
    // const textoIsActivate = this.props.isActivated ? 'On' : 'Off'
    const mappedNumbers = arrayOfNumbers.map(multiply)
    // const mappedNumbers2 = arrayOfNumbers.map(multiply)
    return (
      <div>
        {title}
        <p>{this.props.test}</p>
        <p>{this.props.number}</p>
        <p>{JSON.stringify(this.props.boolean)}</p>
        <p>{textoSegunBool}</p>
        {/* <p>{textoIsActivate}</p>  */}
        <p>{this.props.arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>
        {/* <p>{mappedNumbers2.join(', ')}</p>  */}
        {/* <p>{this.props.objetoWithInfo.key2}</p> */}
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello title='Hello world desde props' />
        <Text
          arrayOfNumbers={[1, 2, 3, 10]}
          // objetoWithInfo={{ key: 'value', key2: 'otherValue' }}
          multiply={(number) => number * 9}
          test='Texto en string'
          number={23}
          boolean={false}
          isActivated />
          text={<h3>Elements</h3>}
      </header>
    </div>
  );
}

export default App;
