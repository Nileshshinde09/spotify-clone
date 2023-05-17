import Link from "next/link"
import Cardsearch from '@/components/cardsearch'
import focusdata from "../database/playlists/focus/data.json"
const firstsearchpagewhitoutsignup =()=>{
    return(
        <>
        <div className=" bg-zinc-900">
        <div className="pt-14">
              <div className='flex '>
                <div className='w-fit h-fit'>
                  <h1 className='font-bold text-2xl p-8'><span className='hover:underline'>Browse all</span></h1>
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
      focusdata.map((obj, i) =><Cardsearch {...obj} key={i} />)
    )
  }
export default firstsearchpagewhitoutsignup;  