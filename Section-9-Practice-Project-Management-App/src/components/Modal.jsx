import { useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';
import Button from './Button'

const Modal = function Modal({children, ref, buttonCaption}){
  const dialogRef = useRef();

  useImperativeHandle(ref, ()=>{
    return {
      open(){
        dialogRef.current.showModal();
      }
    }
  })


  return createPortal(<dialog ref={dialogRef} className="backdrop:bg-stone-900/80 bg-stone-100 p-4 rounded-md">
    {children}
    <form method="dialog" className="text-right mt-4">
      <Button>{buttonCaption}</Button>
    </form>
  </dialog>, document.getElementById('modal-root'));
}

export default Modal;