export default function ServiceCard({image , title , description}){
    return(
        <div className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer hover:shadow-sm hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="border border-gray-700 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4 ">
                    <img src={image} alt={title} />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
                <p className="leading-relaxed text-base">{description}</p>
            </div>
        </div>
    );
}