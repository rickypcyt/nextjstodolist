import React from "react";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <div className="max-w-md mx-auto mt-8 flex justify-center items-center h-full">
      <h1 className="text-3xl font-semibold mb-4">Hola</h1>
    </div>
  );
};

export default TodoList;
