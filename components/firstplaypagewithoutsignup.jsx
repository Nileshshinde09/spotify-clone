import Link from "next/link"

import Image from "next/image"

import Table from "./table"


const firsthomepaypagewithoutsignup = ({id,title,caption,img}) => {
    return (
        <>

            <div className=" bg-gradient-to-b from-indigo-500" id={id}>
                <div className="pt-14">
                    <div className="flex">
                        <Image src={img} width={250} height={250} className="m-9 shadow-2xl"/>
                        <div>
                            <h3 className="font-bold text-sm mt-14">Playlist</h3>
                            <h1 className="font-extrabold text-5xl md:text-7xl mt-3">{title||"#"}</h1>
                            <h1 className="font-bold text-sm text-gray-400 mt-7">{caption||"#"}</h1>
                            <div className="flex">
                            <Image src={"/spotify_logogreen.png"} height={50} width={25} className=""/><Link href={"#"}><h1 className="text-sm font-bold pt-3 pl-1 hover:underline">Spotify</h1></Link>
                            <h1 className="text-xl py-2 px-0.5">
                            &#8226;
                            </h1>
                            
                            <h1 className="text-sm font-bold pt-3">7,036,755 likes</h1>
                            <h1 className="text-xl py-2 px-0.5">
                            &#8226;
                            </h1>
                            <h1 className="text-sm font-bold pt-3">304 songs ,</h1>
                            <h1 className="text-xs font-bold text-gray-400 pt-4 pl-0.5"> about 11 hr</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <Table/>

            </div>
        </>
    )
}


export default firsthomepaypagewithoutsignup;  