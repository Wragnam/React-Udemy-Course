export default function UserInput({ type, children, values, onValueChange, changeType }){

  function handleOnChange(event){
    onValueChange(changeType, parseFloat(event.target.value));
  }
    return(
        <div>
        <label>{children}</label>
        <input type={type} value={values[changeType]} onChange={handleOnChange}></input>
      </div>
    )
}