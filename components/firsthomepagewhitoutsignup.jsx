import Link from "next/link"
import Card from '@/components/card'
import focusdata from "../database/playlists/focus/data.json"
const firsthomepagewhitoutsignup =()=>{
    return(
        <>
        <div className=" bg-zinc-900">
        <div className="pt-14">
              <div className='flex '>
                <div className='w-fit h-fit'>
                  <h1 className='font-bold text-2xl p-8'><span className='hover:underline'>Focus</span></h1>
                </div>
                <div className='pt-10'>
                  <Link href={"#"}><text className='hover:underline text-gray-300 font-bold'>show all</text></Link>
                </div>
              </div>
              <div className='flex space-x-8 overflow-hidden flex-wrap'>
                <div></div>
                {Showcards(focusdata)}
              </div>
              <div className='flex '>
                <div className='w-fit h-fit'>
                  <h1 className='font-bold text-2xl p-8'><span className='hover:underline'>Focus</span></h1>
                </div>
                <div className='pt-10'>
                  <Link href={"#"}><text className='hover:underline text-gray-300 font-bold'>show all</text></Link>
                </div>
              </div>
              <div className='flex space-x-8 overflow-hidden flex-wrap'>
                <div></div>
                {Showcards(focusdata)}
              </div>

              <div className='flex '>
                <div className='w-fit h-fit'>
                  <h1 className='font-bold text-2xl p-8'><span className='hover:underline'>Focus</span></h1>
                </div>
                <div className='pt-10'>
                  <Link href={"#"}><text className='hover:underline text-gray-300 font-bold'>show all</text></Link>
                </div>
              </div>
              <div className='flex space-x-8 overflow-hidden flex-wrap'>
                <div></div>
                {Showcards(focusdata)}
              </div>
              </div>
            </div>
        </>
    )
}
const Showcards = (focusdata) => {
    return (
      focusdata.map((obj, i) =><Card {...obj} key={i} />)
    )
  }
export default firsthomepagewhitoutsignup;  