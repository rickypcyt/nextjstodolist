import React from "react";
import Navbar from "./navbar";
import TodoList from "./todolist";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <TodoList />
    </div>
  );
};

export default Home;
