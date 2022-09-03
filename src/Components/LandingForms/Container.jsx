import { useState ,useEffect} from "react";
import Login from './Login'
import Register from './Register'
import './container.css'


function Container() {

    const[form,setForm]=useState(<Login/>)
    function setLogin(){
        setForm(<Login/>)
  
    }
    function setRegister(){
        setForm(<Register/>)
        
    }

    return (
      <div className="homeform">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={setLogin}>
            Login
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={setRegister}
          >
            Register
          </button>
        </div>

        {form}
      </div>
    );
}

export default Container;