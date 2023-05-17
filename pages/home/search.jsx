import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Smdevice from "@/components/smdevice";
import Homeheaderforsearch from "@/components/homeheaderforsearch";
import Firstsearchpagewhitoutsignup from "@/components/firstsearchpagewhitoutsignup";
const search = () => {
    return (
        <>
            <div className='max-sm:hidden'>

                <div className="flex col-auto-2">

                    <div className='pl-52 w-full'>
                        <div className='overflow-y-scroll h-screen absolute inset-0 left-52'>
                           <Firstsearchpagewhitoutsignup/>
                            <Footer />
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full pl-52 absolute inset-0 top-0">
                <Homeheaderforsearch />
                </div>


            </div>
            <div className='sm:hidden'>
                <Smdevice />
            </div>

        </>
    )
}

export default search;