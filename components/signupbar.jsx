const signupbar = () => {
    return (
        <div className="bg-gradient-to-r from-pink-500 to-blue-500 h-16 flex">
            <div className="p-2  md:w-auto w-4/6">
            <h1 className="font-medium text-xs">PRIVIEW OF SPOTIFY</h1>
            <text className="">
                Sign uo to get unlimited songs and podcasts with occasional ads. No credit card needed.
            </text>
            </div>
            <div className="px-4 flex py-2 absolute right-0">
                <button className="transition ease-in-out delay-150 font-bold text-black rounded-full bg-white px-8 py-3 ">
                    Sign up free
                </button>
        </div>

        </div>
           
    )
}
export default signupbar;