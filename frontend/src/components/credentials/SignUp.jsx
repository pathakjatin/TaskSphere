import React , {useState} from 'react';
import loginImg from "../../assets/login.jpg";
import registrationImg from "../../assets/registration.png";

const SignUp = () => {
    const [ toggleState , setToggleState ] = useState(1);

    const handleToggle = (idx) => {
        setToggleState(idx);
    }

    return (
        <section className="credentials">

            <div className="container">
            <h1 class="sm:text-5xl text-2xl font-medium title-font mb-12 text-gray-700 hover:text-black hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer text-center pt-24">
                                Your Journey Begins Here
                </h1>
                <div className="flex justify-center items-center gap-16 mb-6">
                    <button 
                        onClick={
                            () => handleToggle(1)
                            }>
                                Login
                            </button>
                    <button 
                        onClick={
                            () => handleToggle(2)
                            }>
                                Signup
                            </button>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    <div className=
                        { toggleState === 1 ? "login__container__color xl:w-2/3 w-2/3 sm:w-4/5 lg:w-4/5 block border-solid rounded-xl border-2 border-black" : "hidden"}
                        style={{ height: "550px" }}
                    >
                        <div className="container">
                            <div className="flex justify-around items-center flex-wrap">
                                <div className="mt-8 login__form__color xl:w-2/5 w-4/5 lg:w-2/4 md:w-2/3 flex flex-col justify-start items-center border-solid rounded-xl border-2 p-4"
                                    style={{ height: "460px" }}>
                                    <h2 className="text-lg font-bold mt-2 mb-1">
                                        Login
                                    </h2>
                                    <h3 className="text-sm font-light mb-4 text-center">
                                        Enter your details to sign in to your account
                                    </h3>
                                    
                                    <div className="login__form w-full px-4">
                                        <form className="flex flex-col items-start w-full">
                                            <div className="username flex flex-col items-start w-full mb-3">
                                                <label className="text-sm mb-1 font-semibold">Username</label>
                                                <input 
                                                    type="text" 
                                                    name="username" 
                                                    id="username"
                                                    placeholder="my_username2"
                                                    className="w-full h-8 rounded-lg bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-2 transition-colors duration-200 ease-in-out" />
                                            </div>

                                            <div className="password flex flex-col items-start w-full mb-8">
                                                <label className="text-sm mb-1 font-semibold">Password</label>
                                                <input 
                                                    type="password" 
                                                    name="password" 
                                                    id="password" 
                                                    placeholder="Enter password"
                                                    className="w-full h-8 rounded-lg bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-2 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </form>
                                        
                                        <h3 className="text-xs text-center mb-8">
                                            This information will be securely saved as per <b>Terms of Services & Privacy Policy</b>
                                        </h3>
                                        
                                        <div className="cta flex justify-between items-center mb-4">
                                            <button className="text-base text-gray-600 hover:text-black hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                                                Forget Password?
                                            </button>
                                            <button className="text-base text-gray-600 hover:text-black hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" 
                                                    onClick={() => handleToggle(2)}>
                                                Don't have an account?
                                            </button>
                                        </div>
                                        
                                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-6">
                                            Login
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="image xl:w-80 lg:w-64 hidden lg:block xl:h-80 lg:h-64 flex justify-center items-center mt-6">
                                    <img src={loginImg} alt="Login" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=
                        { toggleState === 2 ? "login__container__color xl:w-2/3 w-2/3 sm:w-4/5 lg:w-4/5 block border-solid rounded-xl border-2 border-black" : "hidden"}
                        style={{ height: "550px" }}
                    >
                        <div className="container">
                            <div className="flex justify-around items-center flex-wrap">
                                <div className="mt-10 login xl:w-2/5 w-4/5 lg:w-2/4 md:w-2/3 login__form__color flex flex-col justify-start items-center border-solid rounded-xl border-2"
                                        style={{height:"460px"}}
                                    >
                                    <h2 className="text-xl font-bold mt-4 mb-2">
                                        Register
                                    </h2>
                                    <h3 className="sm:text-sm text-lg ml-2 font-light mb-6">
                                        Enter your details to get started with your account
                                    </h3>
                                    
                                    <div className="login__form w-full px-6">
                                        <form action="" className="flex flex-col items-start w-full">
                                            <div className="username flex flex-col items-start w-full mb-4">
                                                <label className='text-sm mb-1 font-semibold'>Your Username</label>
                                                <input 
                                                    type="text" 
                                                    name="username" 
                                                    id="username"
                                                    placeholder="my_username2"
                                                    className='w-full h-8 rounded-lg bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
                                            </div>
                                            <div className="email flex flex-col items-start w-full mb-4">
                                                <label className='text-sm mb-1 font-semibold'>Your Email</label>
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    id="email"
                                                    placeholder="my_email@gmail.com"
                                                    className='w-full h-8 rounded-lg bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
                                            </div>

                                            <div className="password flex flex-col items-start w-full mb-2 sm:mb-6">
                                                <label className='text-sm mb-1 font-semibold'>Password</label>
                                                <input 
                                                    placeholder="Enter password"
                                                    type="password" 
                                                    name="password" 
                                                    id="password" 
                                                    className='w-full h-8 rounded-lg bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
                                            </div>
                                        </form>
                                        <div className="">
                                            <h3 className=" text-xs xl:mb-6 sm:mb-6 mb-2">
                                                This information will be securely saved as per <b>Terms of Services & Privacy Policy</b>
                                            </h3>
                                            <div className="cta flex flex-wrap justify-around items-center">
                                                <button className="lg:text-sm text-base text-gray-600 hover:text-black hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" 
                                                    onClick={
                                                    () => handleToggle(1)
                                                    }>
                                                    Already have an account?
                                                </button>
                                                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="image xl:w-96 xl:block lg:block lg:w-72 md:hidden hidden xl:h-96 lg:h-72 flex justify-center items-center mt-8">
                                    <img src={registrationImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default SignUp;