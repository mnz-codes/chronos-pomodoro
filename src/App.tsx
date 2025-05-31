import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>FORM</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}

export default App;
