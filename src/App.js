import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row, /* Column  */} from './styles'
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [currentOperation, setCurrentOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setCurrentOperation('');
  }

  const handleAddNumber = (number) => {
    if (number === '.'){
      if(currentNumber.includes(number)){
        return
      } else {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)    
      }
    } else {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    }
  } 

  const handleOperation = (operator) => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setCurrentOperation(operator);
    } else if (operator === 'sum' && currentOperation === ""){
      const sum = Number(firstNumber) + Number(currentNumber);
      setFirstNumber(String(sum));
      setCurrentNumber('0');
      setCurrentOperation(operator);
    } else if (operator === 'subtract'  && currentOperation === ""){
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setFirstNumber(String(subtraction));
      setCurrentNumber('0');
      setCurrentOperation(operator);
    } else if (operator === 'multiply' && currentOperation === ""){
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setFirstNumber(String(multiplication));
      setCurrentNumber('0');
      setCurrentOperation(operator);
    } else if (operator === 'divide' && currentOperation === ""){
      const division = Number(firstNumber) / Number(currentNumber);
      setFirstNumber(String(division));
      setCurrentNumber('0');
      setCurrentOperation(operator);
    } else if (currentOperation === 'sum'){
      const sum = Number(firstNumber) + Number(currentNumber);
      setFirstNumber(String(sum));
      setCurrentNumber('0');
      setCurrentOperation(operator);
    } else if (currentOperation === 'subtract'){
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setFirstNumber(String(subtraction));
      setCurrentNumber('0');
      setCurrentOperation(operator);
    } else if (currentOperation === 'multiply'){
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setFirstNumber(String(multiplication));
      setCurrentNumber('0');
      setCurrentOperation(operator);
    } else if (currentOperation === 'divide'){
      const division = Number(firstNumber) / Number(currentNumber);
      setFirstNumber(String(division));
      setCurrentNumber('0');
      setCurrentOperation(operator);
    }  
  }
  
  const handleEqualsTo = () => {
    if(firstNumber !== '0' && currentOperation !== "") {
      if (currentOperation === 'sum'){
        const sumEqualsTo = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sumEqualsTo));
        setCurrentOperation('');
        setFirstNumber('0');
      } else if (currentOperation === 'subtract'){
        const subtractionEqualsTo = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(subtractionEqualsTo));
        setCurrentOperation('');
        setFirstNumber('0');
      } else if (currentOperation === 'multiply'){
        const multiplicationEqualsTo = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(multiplicationEqualsTo));
        setCurrentOperation('');
        setFirstNumber('0');
      } else if (currentOperation === 'divide'){
        const divisionEqualsTo = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(divisionEqualsTo));
        setCurrentOperation('');
        setFirstNumber('0');
      }
    }
  }

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber}></Input>
          <Row>
            <Button label="Clear" onClick={handleClear} ></Button>
          </Row>
          <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} ></Button>
          <Button label="8" onClick={() => handleAddNumber('8')} ></Button>
          <Button label="9" onClick={() => handleAddNumber('9')} ></Button>
          <Button label="/" onClick={() => handleOperation('divide')}></Button>
          </Row>
          <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} ></Button>
          <Button label="5" onClick={() => handleAddNumber('5')} ></Button>
          <Button label="6" onClick={() => handleAddNumber('6')} ></Button>
          <Button label="x" onClick={() => handleOperation('multiply')}></Button>
          </Row>
          <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} ></Button>
          <Button label="2" onClick={() => handleAddNumber('2')} ></Button>
          <Button label="3" onClick={() => handleAddNumber('3')} ></Button>
          <Button label="-" onClick={() => handleOperation('subtract')}></Button>
          </Row>
          <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} ></Button>
          <Button label="." onClick={() => handleAddNumber('.')} ></Button>
          <Button label="+" onClick={() => handleOperation('sum')}></Button>
          <Button label="=" onClick={handleEqualsTo} ></Button>
          </Row>
        </Content>
      </Container>
    </div>
  );
}

export default App;
