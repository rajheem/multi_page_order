import Form from "./components/Form";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import emailjs from '@emailjs/browser';
import img1 from './order-replenishment-form-logo (3).png'

function App() {
  return (
    <div >
        <div>
      <Form img1={img1}/>
        </div>
    </div>
  );
}

export default App;
