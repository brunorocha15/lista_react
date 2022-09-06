import {useState} from "react";

const Form = () =>{
  const [tarefa, setTarefa] = useState("");
  return(
      <form id="container">
        <h2>
          <label>Lista de tarefas</label>
        </h2>
        <input
        type = "text" id = "nova-tarefa" 
        className = "input-group rounded" name = "text"
        autoComplete = "off"
        value={tarefa}
        onChange={(e) =>setTarefa (e.target.value)}
        />
        <button type = "submit" className = "m-1 btn">
          Adicionar
        </button>
        <p>{tarefa}</p>
      </form>
    
  );
}

export default Form;