import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout';
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="menu" element={<Menu/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}
export default App;

