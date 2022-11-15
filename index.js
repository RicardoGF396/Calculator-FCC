function App(){

    const [expression, setExpression] = React.useState("");
    const [result, setResult] = React.useState("");

    const display = (symbol) => {
        
        if(expression == ""){
            //Check if symbol is a number
            if(/\d/.test(symbol)){
                setExpression(symbol)
                setResult(symbol)
            }
            
        } //There is at least a number
        else{ 
            if(/\d/.test(symbol)){ // Is a number
                
                setExpression(prev => prev + symbol) // AÑADE A EXPRESION
                
                if(/[-+*]/.test(result) || result == "/"){
                    setResult(symbol) //Quita todo y lo pone como símbolo
                }else{
                    setResult(prev => prev + symbol) //Va juntando los numeros
                }
            }
            else{
                //Tiene punto result?
                let containsDot = /[.]/.test(result)
                
                if(symbol == "." && containsDot != true){
                    setResult(prev => prev + symbol)
                    setExpression(prev => prev + symbol)
                }
                
                if(/[-+*]/.test(symbol) || symbol == "/"){

                    //get last element of the expression
                    let lastElement = expression.slice(-1);
                    console.log(lastElement);
                    // to replace the repeating element
                    if(/[-+*]/.test(lastElement) || lastElement == "/"){
                        setResult(symbol)
                        let replacedValue = expression.slice(0,-1) + symbol
                        setExpression(replacedValue) //--------- |||||||||
                    }else{
                        setResult(symbol)
                        setExpression(prev => prev + symbol) // AÑADE A EXPRESION
                    }
    
                }
            }
        }
        
    }

    const calculate = () => {
        try{
            setResult(eval(expression))
        }catch(e){}
    }

    const allClear = () => {
        setExpression("")
        setResult("")
    }

    const clear = () => {
        let arrayExpression = expression.split("");
        arrayExpression.pop();
        let newValue = arrayExpression.join('')
        setExpression(newValue);
        setResult(newValue)
    }

    return <div>
    <div className="container">
        <div className="calculator">
            <div className="screen">
                <div id="display-operators"> {expression == "" ? 0 : expression } </div>
                <div id="display"> {result == "" ? 0 : result} </div>
            </div>
            <div className="grid">
                <div onClick={() => allClear()} id="clear">AC</div>
                <div onClick={() => clear()} id="clear-one">DEL</div>
                <div onClick={() => display("/")} id="divide">/</div>
                <div onClick={() => display("*")} id="multiply">X</div>
                <div onClick={() => display("7")} id="seven">7</div>
                <div onClick={() => display("8")} id="eight">8</div>
                <div onClick={() => display("9")} id="nine">9</div>
                <div onClick={() => display("-")} id="subtract">-</div>
                <div onClick={() => display("4")} id="four">4</div>
                <div onClick={() => display("5")} id="five">5</div>
                <div onClick={() => display("6")} id="six">6</div>
                <div onClick={() => display("+")} id="add">+</div>
                <div onClick={() => display("1")} id="one">1</div>
                <div onClick={() => display("2")} id="two">2</div>
                <div onClick={() => display("3")} id="three">3</div>
                <div onClick={() => calculate()} id="equals">=</div>
                <div onClick={() => display("0")} id="zero">0</div>
                <div onClick={() => display(".")} id="decimal">.</div>        
            </div>
        </div>

    </div>


    </div>
}    

ReactDOM.render(<App />, document.getElementById('root'))