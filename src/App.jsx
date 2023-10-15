import styled from "styled-components";
import HomePage from "./pages/HomePage";

function App() {

  const Container = styled.div`
    height: 100vh;
    background-color: #e5e7eb;
  `;

  return (
    <Container>
      <HomePage/>
      {/* <About/> */}
    </Container>
  )
}

export default App
