import React from "react";
import Questions from "../Questions/Questions"
import s from "./Home.modules.css"


export default function Home() {
    return(
        <>
            <div className={s.fondoHome}>
                <div className={s.divTitle}>
                    <h1>Cuestionary game</h1>
                </div>
                <div className={s.divsubTitle}>
                    <h3>Answer the questions correctly to win the game!</h3>
                    <Questions></Questions>
                </div>
            </div>
        </>
    )
}