import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Login from './Login';
import Course from './Course';
import Addcontent from './Addcontent';
import Viewcontent from './Viewcontent';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
function App() {
  return (
    <>
    <div className='App'>
       
       <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/Course' element={<Course/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/Addcontent' element={<Addcontent/>}></Route>
        <Route path='/Viewcontent' element={<Viewcontent/>}></Route>
       </Routes>
       {/* <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/addcourse' element={<Addcourse />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
       </Routes> */}
   </div>
    </>
  );
}

export default App;
