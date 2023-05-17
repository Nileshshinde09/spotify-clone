import Image from "next/image"
import { openplaylistAction } from "@/redux/reducer";
import { useDispatch } from "react-redux";
const cardsearch = ({id,title,caption,img}) => {
    const dispatch = useDispatch()
    const openplyalist=()=>{
        dispatch(openplaylistAction(id))
        
    }
    return (
        <>
        <button onClick={()=>{openplyalist()}} className="mt-2">
        <div className='bg-red-500 w-52 h-60 rounded-md shadow-lg shadow-black shrink-0 overflow-hidden' key={id}>
        <h1 className='font-bold py-3 text-2xl'>
                        {title||"#"}
                    </h1>
        <Image src={img||"#"} width={150} height={150} className='relative rotate-45 pt-16' />

        </div>
        </button>
        <button onClick={()=>{openplyalist()}} className="mt-2">
        <div className='bg-green-500 w-52 h-60 rounded-md shadow-lg shadow-black shrink-0 overflow-hidden' key={id}>
        <h1 className='font-bold py-3 text-2xl'>
                        {title||"#"}
                    </h1>
        <Image src={img||"#"} width={150} height={150} className='relative rotate-45 pt-16' />

        </div>
        </button>
        <button onClick={()=>{openplyalist()}} className="mt-2">
        <div className='bg-yellow-500 w-52 h-60 rounded-md shadow-lg shadow-black shrink-0 overflow-hidden' key={id}>
        <h1 className='font-bold py-3 text-2xl'>
                        {title||"#"}
                    </h1>
        <Image src={img||"#"} width={150} height={150} className='relative rotate-45 pt-16' />

        </div>
        </button>
        <button onClick={()=>{openplyalist()}} className="mt-2">
        <div className='bg-pink-500 w-52 h-60 rounded-md shadow-lg shadow-black shrink-0 overflow-hidden' key={id}>
        <h1 className='font-bold py-3 text-2xl'>
                        {title||"#"}
                    </h1>
        <Image src={img||"#"} width={150} height={150} className='relative rotate-45 pt-16' />

        </div>
        </button>
        <button onClick={()=>{openplyalist()}} className="mt-2">
        <div className='bg-sky-500 w-52 h-60 rounded-md shadow-lg shadow-black shrink-0 overflow-hidden' key={id}>
        <h1 className='font-bold py-3 text-2xl'>
                        {title||"#"}
                    </h1>
        <Image src={img||"#"} width={150} height={150} className='relative rotate-45 pt-16' />

        </div>
        </button>
       

        </>
    )

}

export default cardsearch;

