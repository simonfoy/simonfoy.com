import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  const Container = styled.div`
    height: 100vh;
    background-color: #e5e7eb;
  `;

  return (
    <Container>
      <Home/>
      <About/>
    </Container>
  )
}

export default App
