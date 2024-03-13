import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat";
import { UserProvider } from "./context/UserContext";

const LayOutContainer = styled.div`
  display: flex;
  height: 100vh;
  background: white;
  justify-content: center;
  padding: 30px;
`;

function App() {
  return (
    <UserProvider>
      <LayOutContainer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/search" element={<SignUp />} />
        </Routes>
      </LayOutContainer>
    </UserProvider>
  );
}

export default App;
