import axios from "axios"

//export function getQuestions(){} 

export function getAnswers() { //trae las respuestas de mi BBDD
    return async function (dispatch) {
      try {
        var option = await axios.get("http://localhost:3001/answers");
        return dispatch({ //retorna la info 
          type: "GET_ANSWERS",
          payload: option.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }