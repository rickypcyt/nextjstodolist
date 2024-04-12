"use client";
import React, { useState, useEffect } from "react";
import "./TodoList.css";
import CheckBox from "./checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faEdit,
  faPlus,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedIndex, setEditedIndex] = useState<number>(-1);
  const [editedValue, setEditedValue] = useState<string>("");
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTodoEdit = (index: number, newValue: string) => {
    const newTodos = [...todos];
    newTodos[index] = newValue;
    setTodos(newTodos);
  };

  const handleEnterPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    newValue: string
  ) => {
    if (e.key === "Enter") {
      handleTodoEdit(index, newValue);
      setEditMode(false);
      setEditedIndex(-1);
      setEditedValue("");
    }
  };

  const handleAddTodo = (sectionIndex: number) => {
    const newTodos = [...todos];
    newTodos.splice(sectionIndex * 3, 0, "");
    setTodos(newTodos);
    setEditMode(true);
    setEditedIndex(sectionIndex * 3);
  };

  const handleTodoDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-sections">
        <div className="todo-section">
          <h2 className="section-title">To-Do List</h2>
          {todos.map((todo, index) => (
            <div className="todo-box" key={index}>
              <CheckBox />
              {editMode && editedIndex === index ? (
                <div className="edit-mode">
                  <input
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                    onKeyDown={(e) =>
                      handleEnterPress(e, index, e.currentTarget.value)
                    }
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="save-icon"
                    onClick={() => {
                      handleTodoEdit(index, editedValue);
                      setEditMode(false);
                      setEditedIndex(-1);
                      setEditedValue("");
                    }}
                  />
                </div>
              ) : (
                <>
                  <span>{todo}</span>
                  <div className="menu">
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      className="menu-icon"
                      onClick={() => setMenuVisible(!menuVisible)}
                    />
                    {!editMode && menuVisible && (
                      <div className="options">
                        <div
                          className="option"
                          onClick={() => {
                            setEditMode(true);
                            setEditedIndex(index);
                            setEditedValue(todo);
                            setMenuVisible(false);
                          }}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </div>
                        <div
                          className="option"
                          onClick={() => {
                            handleTodoDelete(index);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="todo-box add-todo" onClick={() => handleAddTodo(0)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        {/* Aquí puedes agregar los otros dos bloques de secciones de manera similar */}
      </div>
    </div>
  );
};

export default TodoList;
