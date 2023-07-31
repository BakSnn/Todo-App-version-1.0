import { useState } from "react";
import styles from "./TodoForm.module.css";
function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className={styles.div}>
      <form onSubmit={onSubmitHandler}>
        <input
          className={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter the todo"
        ></input>
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
