import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './index.css';
import App from './App';
import Spa from './components/Spa/Spa';
import Home from './components/Spa/Home';
import Introduce from './components/Spa/Introduce';
import News from './components/Spa/News';

import Admin from './components/Admin/Admin';
import HomeAdmin from './components/Admin/Content/HomeAdmin';
import ServicesManagement from './components/Admin/Content/ServicesManagement';
import StaffsManagement from './components/Admin/Content/StaffsManagement';
import DevicesManagement from './components/Admin/Content/DevicesManagement';
import RoomsManagement from './components/Admin/Content/RoomsManagement';
import BillsManagement from './components/Admin/Content/BillsManagement';
import Revenue from './components/Admin/Content/Revenue';

import Staff from './components/Staff/Staff';
import InfoStaff from './components/Staff/Content/InfoStaff';
import RegisterServices from './components/Staff/Content/RegisterServices';
import Bills from './components/Staff/Content/Bills';
import TakeCareOf from './components/Staff/Content/TakeCareOf';

import Login from './components/Login';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/Spa' element={<Spa/>}>
              <Route path='/Spa/home' element={<Home />}></Route>
              <Route path='/Spa/introduce' element={<Introduce />}></Route>
              <Route path='/Spa/news' element={<News />}></Route>
          </Route>
          <Route path='/Admin' element={<Admin/>}>
              <Route path='/Admin/home' element={<HomeAdmin />}></Route>
              <Route path='/Admin/service' element={<ServicesManagement />}></Route>
              <Route path='/Admin/staff' element={<StaffsManagement />}></Route>
              <Route path='/Admin/device' element={<DevicesManagement />}></Route>
              <Route path='/Admin/room' element={<RoomsManagement />}></Route>
              <Route path='/Admin/bill' element={<BillsManagement />}></Route>
              <Route path='/Admin/revenue' element={<Revenue />}></Route>
          </Route>
          <Route path='/Staff' element={<Staff/>}>
              <Route path='/Staff/infoStaff/:maNV' element={<InfoStaff />}></Route>
              <Route path='/Staff/registerService/:maNV' element={<RegisterServices />}></Route>
              <Route path='/Staff/bills/:maNV' element={<Bills />}></Route>
              <Route path='/Staff/takeCareOf/:maNV' element={<TakeCareOf />}></Route>
          </Route>

          <Route path='/Login' element={<Login/>}></Route>

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
