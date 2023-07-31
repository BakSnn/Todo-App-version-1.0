import Todo from "./Todo";
import styles from "./TodoList.module.css";
function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty...</h2>}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          todos={todos}
          deleteTodo={deleteTodo}
          index={index}
        />
      ))}
    </div>
  );
}

export default TodoList;
