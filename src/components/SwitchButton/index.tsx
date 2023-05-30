import {useState} from 'react';
import './style.css'

export const SwitchButton = () => {

  const[btnslide, setBtnSlide] = useState(Boolean);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setBtnSlide(event.target.checked);
  }

  if(btnslide == true){
    document.body.className = "modEscuro";
  }else{
    document.body.className = "modClaro";
  }

  return (
    <>
    <input id="toggle" className='toggle' type='checkbox' onChange={handleCheck}></input>
    <label htmlFor="toggle"></label>
    </>
  )
}