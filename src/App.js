import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReviews from './Pages/Dashboard/MyReviews';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireRoute from './Pages/Dashboard/RequireRoute';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>


      <Navbar></Navbar>


      <Routes>

        <Route path="/" element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>

        <Route path='/appoinment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }> </Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard>


            </Dashboard>
          </RequireAuth>}>

          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReviews></MyReviews>}></Route>
          <Route path="users" element={<RequireRoute><AllUsers></AllUsers></RequireRoute>}></Route>

        </Route>



        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/signup" element={<SignUp></SignUp>}> </Route>



      </Routes>



      <ToastContainer />
    </div >
  );
}

export default App;
