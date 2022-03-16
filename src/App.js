import { Container } from "./components/style/container.style";
import Header from "./components/header";
import {ThemeProvider} from 'styled-components'


const theme={
  colors:{
    header:'#ebfbff',
    body:'#fff',

    footer:'#003333'
  }
}


function App() {
  return (
  <ThemeProvider theme={theme}>
  <>
    <Header/>
    <Container>
      <h2>hello world</h2>
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
