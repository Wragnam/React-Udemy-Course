import { useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';

const Modal = function Modal({children, ref, buttonCaption}){
  const dialogRef = useRef();

  useImperativeHandle(ref, ()=>{
    return {
      open(){
        dialogRef.current.showModal();
      }
    }
  })


  return createPortal(<dialog ref={dialogRef}>
    {children}
    <form>
      <button>{buttonCaption}</button>
    </form>
  </dialog>, document.getElementById('modal-root'));
}

export default Modal;