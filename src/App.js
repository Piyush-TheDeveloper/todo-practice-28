import React from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Data from './components/Data';
import './style.css';

export default function App() {
  return (
    <div className="mx-2 p-4 text-center">
      <h1>To-Do App</h1>
      <p>Do the ToDo Task from below tracker...!</p>
      <div className="main card">
        <Header />
        <AddTask />
        <Data />
      </div>
    </div>
  );
}
