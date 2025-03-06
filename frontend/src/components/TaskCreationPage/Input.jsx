import { forwardRef } from "react";

const Input = forwardRef(({ title, type, options, name }, ref) => {
    const classes =
        "w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-100 text-stone-950 focus:border-stone-600 focus:outline-none";

    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase">{title}</label>

            {type === "radio" && options ? (
                <span className="flex gap-4">
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center gap-1 font-bold">
                            <input
                                ref={ref}
                                type="radio"
                                value={option}
                                name={name} 
                                className="mr-1"
                            />
                            {option}
                        </label>
                    ))}
                </span>
            ) : type ? (
                <input ref={ref} type={type} className={classes} />
            ) : (
                <textarea ref={ref} className={classes} />
            )}
        </p>
    );
});

export default Input;
