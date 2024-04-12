import React from "react";
import "./TodoList.css";
import CheckBox from "./checkbox"; // Make sure this path is correct

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <div className="todo-list-container">
      <div className="todo-sections">
        <div className="todo-section">
          <h2 className="section-title">Cosas que hacer</h2>
          <div className="todo-box">
            <CheckBox />
            Cuadro 1
          </div>
          <div className="todo-box">
            <CheckBox />
            Cuadro 2
          </div>
          <div className="todo-box">
            <CheckBox />
            Cuadro 3
          </div>
        </div>
        <div className="todo-section">
          <h2 className="section-title">Proyectos</h2>
          <div className="todo-box">
            <CheckBox />
            Cuadro 4
          </div>
          <div className="todo-box">
            <CheckBox />
            Cuadro 5
          </div>
          <div className="todo-box">
            <CheckBox />
            Cuadro 6
          </div>
        </div>
        <div className="todo-section">
          <h2 className="section-title">Otros</h2>
          <div className="todo-box">
            <CheckBox />
            Cuadro 7
          </div>
          <div className="todo-box">
            <CheckBox />
            Cuadro 8
          </div>
          <div className="todo-box">
            <CheckBox />
            Cuadro 9
          </div>
          {/* Agrega aquí los cuadros para la sección "Otros" si los tienes */}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
