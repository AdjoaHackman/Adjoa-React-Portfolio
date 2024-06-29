import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Form from './components/Form';

function App() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>

  )
}

export default App
