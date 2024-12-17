export default function Button({ children, ...props }) {
  return (
    <button  {...props} className="bg-stone-700 text-xs md:text-base rounded-md text-stone-400 px-4 py-2 hover:bg-stone-600 hover:text-stone-100">
      {children}
    </button>
  );
}
