import {ThemeProvider, styled } from "styled-components";
import {lightTheme} from "./utils/theme";
import {BrowserRouter, Route, Routes} from "React-router-dom";
import Authentication from "./page/Authentication";
import {useState} from "react";
import {useSelector} from "react-redux";
import Navbar from "./components/navbar";
import Dashboard from "./pages/Dashboard";
import Workkouts from "./pages/Workkouts";

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-directons: column;
background: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text_primary};
overflow-x: hidden;
overflow-y: hidden;
transition: all 0.2s ease;
`;

function App(){
  const{ currentUser } = useSelector((stste) => StaticRange.user);
  return(
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      {currentUser ? (
        <Container>
          <Navbar curreentUser={currentUser}/>
          <Routes>
            <Route path="/"exact elemment={<Dashboard />}/>
            {/* <Route path="/workouts" exact element={Workkouts />} /> */}
          </Routes>
        </Container>
      ):(
        <Container>
          <Auntentication/>
        </Container>
      )}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;