export default function Input({  label, name,  ...props }) {
  return (
    <div className="control">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        {...props}
        required
      />
    </div>
  );
}
