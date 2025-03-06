export default function Button({children, ...props}){
    return <button className="bg-stone-700 text-stone-200  hover:text-amber-50 hover:bg-stone-900 transition-all duration-300 ease-in-out px-4 py-2 text-xs md:text-base rounded-md cursor-pointer"
    {...props}
    >
        {children}
    </button>
}