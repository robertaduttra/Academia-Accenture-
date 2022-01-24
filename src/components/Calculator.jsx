import React, {useState} from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

  //criando o estado da calculadora
  export default function Calculator(){
   const[num,setNum]= useState(0);
   const[oldnum,setOldNum]= useState(0);
   const{operator,setOperator} = useState();

    //Função para receber numeros digitados
    function inputNum(e){
     var input= e.target.value;
     if(num===0){
           setNum(input);
     } else{
       setNum(num + input);
     }
   }
   //função para zerar o display
    function clear(){
      setNum(0)
   }
   //função para calculo de porcentagem
    function porcentage(){
       setNum(num/100);
   }
   //função para operador +/-
    function changeSign(){
     if(num > 0){
        setNum(-num)
     } else{
        setNum(Math.abs(num));
       }
    }

    function operatorHandler(e) {
        var operatorInput= e.target.value;   
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        if (operator === "/") {
            setNum(parseFloat(oldnum) / parseFloat(num));
          } else if (operator === "X") {
            setNum(parseFloat(oldnum) * parseFloat(num));
          } else if (operator === "-") {
              console.log(oldnum)
              console.log(num)
              console.log(oldnum-num)
            setNum(parseFloat(oldnum) - parseFloat(num));
          } else if (operator === "+") {
            setNum(parseFloat(oldnum) + parseFloat(num));
          }
        
        }
     
   return(
       
    <div>        
      <Box m={5}/>
      <Container maxWidth="xs">    
       <div className="wrapper">
        <Box m={12}/>
        <h1 className="result">{num}</h1>
        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcentage}>%</button>
        <button className ="purple"onClick={operatorHandler} value="/">/</button>
        <button className ="gray"onClick={inputNum} value={7}>7</button>
        <button className="gray" onClick={inputNum} value={8}>8</button>
        <button className="gray" onClick={inputNum} value={9}>9</button>
        <button className="pink" onClick={operatorHandler} value="x">X</button>
        <button className="gray" onClick={inputNum} value={4}>4</button>
        <button className="gray" onClick={inputNum} value={5}>5</button>
        <button className="gray" onClick={inputNum} value={6}>6</button>
        <button className ="pink"onClick={operatorHandler} value="-">-</button>
        <button className="gray" onClick={inputNum} value={1}>1</button>
        <button className="gray" onClick={inputNum} value={2}>2</button>
        <button className="gray" onClick={inputNum} value={3}>3</button>     
        <button className ="pink" onClick={operatorHandler} value="+">+</button>
        <button className="gray">OFF</button>
        <button className="gray" onClick={inputNum} value={0}>0</button>
        <button className="gray" onClick={inputNum} value=".">,</button>
        <button className="pink" onClick={calculate}>=</button>   

       </div>     
       </Container>
    </div>
    )
   
};


 