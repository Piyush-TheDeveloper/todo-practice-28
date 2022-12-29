import React from 'react';
import { useState } from 'react';
import data from '../data.json';
import ToDoList from './ToDoList';

const Data = () => {
  // console.log(data);
  const [todoList, setTodoList] = useState([...data]);
  console.log('this is todo', todoList);
  return (
    <div>
      <ToDoList todolist={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Data;
