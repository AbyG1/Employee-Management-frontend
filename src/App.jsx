
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import { Route,Routes} from 'react-router-dom';
import Admin from './Components/Admin'
import Add from './Components/Add'
import View from './Components/View'
import Edit from './Components/Edit'
import PageNotFound from './Components/PageNotFound'


function App() {
  return (
    <>
      <header>
          <Header/>

      </header>
      <section>
        
          <Routes>
              <Route path='/' element={<Admin/>}/>
               {/* http://localhost:3000  */}
              <Route path='add' element={<Add/>}/>
                {/* http://localhost:3000/add  */}
              <Route path='view/:id' element={<View/>}/>
                {/* http://localhost:3000/view/3  */}
              <Route path='edit/:id' element={<Edit/>}/>
              <Route path='*' element={<PageNotFound/>}/>
              

          </Routes>


        
        </section>

        <footer>
          <Footer/>
        </footer>
    </>
  );
}

export default App;
