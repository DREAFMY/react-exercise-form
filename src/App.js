import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.less';
import MyProfile from "./components/MyProfile";

const App = () => {
  return (
    <div className='App'>
      <MyProfile/>
    </div>
  );
};

export default App;