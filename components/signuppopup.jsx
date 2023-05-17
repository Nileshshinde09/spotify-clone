// import { useEffect } from "react";
const signuppopup = ({ propsname }) => {
    // useEffect(()=>{
    //     window.onclick = function() {
    //         var v = document.getElementById("visibility");
    //         if("hidden" !== v.className){
    //             v.className += "hidden";
    //         }

    //       }
    // })
    return (
        <div className=""  id="visibility">

        <div className="flex w-80">
        <div className="rotate-180 mb-24">
        <div className="rotate-90">
            <div className="-mb-[1px] inline-block overflow-hidden">
                <div className="h-3 w-4 origin-bottom-left rotate-45 transform bg-blue-500"></div>
            </div>
            </div>

        </div>
        <div className="bg-blue-500 rounded-lg px-1 py-1">

            <h1 className="text-2xl font-bold pb-3">Enjoy your {propsname}</h1>
            <h3>
                Log in to see all the songs you've liked in one easy playlist.
            </h3>
            <div className="flex space-x-3 justify-end pr-2">
                <button className="text-gray-300 font-bold">
                    Sign up
                </button>

                <button className="transition ease-in-out delay-150 font-bold text-black rounded-full bg-white px-4 py-1 ">
                    Log in
                </button>
            </div>
        </div>

        </div>
        </div>
        
    )
}
export default signuppopup;