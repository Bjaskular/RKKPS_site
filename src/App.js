import './root.css';
import Nav from './components/Navigate/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Content/Main/Main';

function App() {
  return (
    <>
      <Header>
        <Nav/>
      </Header>
      <Main/>
    </>
  );
}

export default App;
