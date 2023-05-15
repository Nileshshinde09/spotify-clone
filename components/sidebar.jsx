import Image from "next/image";
import Link from "next/link";
import { BiLibrary } from "react-icons/bi";
import { GoSearch } from "react-icons/go";



import { RiHomeFill } from "react-icons/ri";


const sidebar = () =>{
    return(
        <div className="py-6 px-6 absolute left-0 w-52">
        <Link href={"/"}><Image src={"/s_logo.png"} height={130} width={130}/></Link>
        <div className="flex hover:text-white text-gray-300 pt-7"><div className="py-2.5 text-2xl  flex"><RiHomeFill/></div><span className="px-3 py-2 font-bold">Home</span></div>
        <div className="flex hover:text-white text-gray-300"><div className="py-2.5 text-2xl flex"><GoSearch/></div><span className="px-3 py-2 font-bold">Search</span></div>
        <div className="flex hover:text-white text-gray-300"><div className="py-2.5 text-2xl flex"><BiLibrary/></div><span className="px-3 py-2 font-bold">Your Library</span></div>
        <div className="hover:text-white text-gray-300 flex pt-7"><Link href={"/"}><Image src={"/create_logo.jpg"} height={25} width={25}/></Link><div><span className="px-3 py-2 font-bold">Create Playlist</span></div></div>
        <div className="hover:text-white text-gray-300 flex pt-7"><Link href={"/"}><Image src={"/likesongs.jpg"} height={25} width={25}/></Link><div><span className="px-3 py-2 font-bold">Liked Songs</span></div></div>
        </div>
    )
}
export default sidebar;