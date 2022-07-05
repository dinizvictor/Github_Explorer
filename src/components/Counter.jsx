import { useState } from "react";

// No react, se a função começa com use, chamamos ela de Hook.

export function Counter() {

    const [counter, setCounter] = useState(0); //Desestruturação de array

    function increment() {
        //setCounter sempre cria um novo valor para counter (imutabilidade)
        setCounter(counter + 1);
    }

    return (

        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>

    );

}