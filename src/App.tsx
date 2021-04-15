import React from 'react';
import MyForm from './Components/MyForm';
import MyHeader from './Components/MyHeader';
import MyFooter from './Components/MyFooter';
import './App.css';

const App = () => {
  return (
  <div className="page-wrapper" style={{ textAlign : "center"}}> 
  <MyHeader />
  <MyForm 
  onSubmit={(values) => {
    return console.log(values);
  }} />
  <MyFooter />
  </div>
  );
};

export default App;