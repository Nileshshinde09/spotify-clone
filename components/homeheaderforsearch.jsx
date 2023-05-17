
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import Link from "next/link";


const homeheaderforsearch = () => {
    return (
        <div className="bg-neutral-950 flex w-full h-16">
            <div className="pt-4 pl-8">
                <div className="text-2xl rounded-full bg-black px-1 py-1 hover:text-white text-gray-300">
                    <Link href={"/"}><VscChevronLeft /></Link>
                </div>
            </div>
            <div className="pt-4 px-1">
                <div className="text-2xl rounded-full bg-black px-1 py-1 hover:text-white text-gray-300">
                    <VscChevronRight />
                </div>
            </div>
            <div className="py-1 px-3">
                <input type="text" placeholder="What do you want to listen to ?" className="rounded-3xl w-72 px-2 py-3 border-white border-3 bg-neutral-800" ></input>
            </div>
            <div className="flex absolute top-0 right-0">
            <div className="px-4 pt-4">
                <button className="transition ease-in-out delay-150 text-gray-300 font-bold ">
                        Sign up
                </button>
            </div>

            <div className="px-4 flex py-2">
                
                    <button className="transition ease-in-out delay-150 font-bold text-black rounded-full bg-white px-8 py-3 ">
                        Log in
                    </button>
                
            </div>
            </div>

        </div>
    )
}
export default homeheaderforsearch;