const classes= "bg-stone-200 w-full p-1 border border-b-2 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600"

export default function Input({ label, type, ref }) {
  return (
    <p className="flex flex-col gap-1 my-3">
      <label className="text-stone-500 uppercase font-bold text-sm">{label}</label>
      {type === "textarea" ? (
        <textarea className={classes} ref={ref}></textarea>
      ) : (
        <input ref={ref} className={classes} type={type} required></input>
      )}
    </p>
  );
}
