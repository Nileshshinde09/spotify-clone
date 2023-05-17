import Image from "next/image";
import Link from "next/link";
const smdevice = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="pt-16">
                    <span><Image src={"/spotify_logogreen.png"} width={65} height={65} /></span>
                </div>
                <div className="text-center pt-6">
                    <h1 className="font-bold text-6xl px-6">
                        Unsupported browser
                    </h1>
                </div>

                <div className="text-center pt-3">
                    <p className="text-xl font-semibold text-neutral-400 px-3 pt-3">
                        Spotify is unavailable on this browser. For the best listening experience update your browser ot download the Spotify app.
                    </p>
                </div>
                <div className="pt-10">
                    <Link className="bg-white px-8 py-4 rounded-full" href={"https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_IN&gl=US"}><span className="text-black text-xl font-bold">Get the App</span></Link>
                </div>
                <div className="pt-10 font-bold text-2xl text-neutral-200">
                    
                    <Link href={"#"}>
                        Learn more
                    </Link>
                </div>
            </div>
        </>
    )
}
export default smdevice;