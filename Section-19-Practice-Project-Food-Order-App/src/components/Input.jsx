export default function Input({ type, label, name, defaultValue }) {
  return (
    <div className="control">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}
