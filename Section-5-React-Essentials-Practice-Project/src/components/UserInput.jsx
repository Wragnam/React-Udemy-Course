export default function UserInput({
  type,
  children,
  values,
  onValueChange,
  changeType,
}) {
  function handleChange(event) {
    onValueChange(changeType, event.target.value);
  }
  return (
    <p>
      <label>{children}</label>
      <input
        type={type}
        required
        value={values[changeType]}
        onChange={handleChange}
      ></input>
    </p>
  );
}
