import LineChart from './LineChart';
import TaskSection from './TaskSection';

export default function MainContent(){
    return(
        <main className="flex-1 bg-stone-200 p-4 lg:w-2/3 lg:h-auto h-auto">
        <div className="flex container items-center justify-center gap-4 flex-wrap md:flex-nowrap">
            <div className="bg-stone-50 md:w-1/2 md:h-1/3 w-[350px] h-[250px] rounded-lg">
                <h2 className="md:text-xl text-base font-semibold text-stone-800 px-4 py-2">Tasks Finished</h2>
                <LineChart className="px-2 w-[100px] h-[100px]"/>
            </div>
            <div className="bg-stone-50 md:w-1/2 md:h-1/3 w-[350px] h-[250px] rounded-lg">
                <h2 className="md:text-xl text-base font-semibold text-stone-800 px-4 py-2">Tasks overview</h2>
                <div className="container flex items-center justify-around flex-wrap mt-6 mb-1">
                    <div className="rounded-md bg-green-400 md:w-[75px] w-[75px] md:h-[100px] h-[100px] md:font-xl font-sm">projects 48</div>
                    <div className="rounded-md bg-stone-900 text-stone-50 md:w-[75px] w-[75px] md:h-[100px] h-[100px] md:font-xl font-sm">on going 48</div>
                    <div className="rounded-md bg-stone-300 md:w-[75px] w-[75px] md:h-[100px] h-[100px] md:font-xl font-sm">finished 48</div>
                </div>
                <div className='p-6'>
                    <p>
                        On time
                    </p>
                    <p>
                        Finished tasks
                    </p>
                </div>
            </div>
        </div>
        <TaskSection/>
</main>
    );
}