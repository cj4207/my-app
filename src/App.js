import './App.css';
import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const LayOutContainer = styled.div`
  display: flex;
  height: 100vh;
  background: white;
  justify-content: center;
  padding: 30px;
`;

function App() {
  return (
    <LayOutContainer>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/chat' element={<Login/>}/>
        <Route path='/search' element={<SignUp/>}/>
      </Routes>
    </LayOutContainer>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
