export default function Input({ label, type, ref }) {
  return (
    <div className="flex flex-col">
      <label className="text-stone-600 uppercase font-bold text-sm">{label}</label>
      {type === "textarea" ? (
        <textarea className="bg-stone-200" ref={ref}></textarea>
      ) : (
        <input ref={ref} className="bg-stone-200" type={type} required></input>
      )}
    </div>
  );
}
