import React, { useState } from "react";
import s from "./Questions.module.css"



export default function Questions() {

    const initialState = (
        options: []
    )

    const initialChange = {
        options: false
    }

    const [input, setInput] = useState(initialState)
    const [state, setState] = useState(initialState);
    const [changes, setChanges] = useState(initialChange);

    function handleSelect(e) {
        const {name, value} = e.target
        if (input[name].includes(value)) {
            setInput({
                ...input,
                [name]: input[name].filter((p) => p !== value)
            })
            return 
        }

    }




    return(
        <>
            <div className={s.fondoQuestions}>
                <div>
                    <h4>1. Pregunta 1</h4>
                    <div>
                        {options?.map((o, i) => (
                            <div key={i}>
                                <input 
                                    disabled={
                                        input.options.length == 1 //deshabilita cuando es hay una option elegida       ********&& !input.genres.includes(o.name)********
                                    }
                                    type="checkbox"
                                    value={o.name}
                                    name="option"
                                    onChange={(e) => handleSelect(e)}
                                    />
                                    <label>Respuesta a</label>
                                    <label htmlFor={o.name}>{o.name}</label> es para que aparezca la option a la elegir
                            </div>
                        ))}
                    </div>
                    <div>
                        <input type="checkbox"></input>
                        <label>Respuesta b</label>
                    </div>
                    <div>
                        <input type="checkbox"></input>
                        <label>Respuesta c</label>
                    </div>
                    
                </div>
            </div>
        </>
    )
}