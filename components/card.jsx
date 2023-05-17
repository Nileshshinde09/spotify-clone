import Image from "next/image"
import { openplaylistAction } from "@/redux/reducer";
import { useDispatch } from "react-redux";
const card = ({id,title,caption,img}) => {
    const dispatch = useDispatch()
    const openplyalist=()=>{
        dispatch(openplaylistAction(id))
        
    }
    return (
        <button onClick={()=>{openplyalist()}}>
        <div className='hover:bg-neutral-800 bg-zinc-900 h-70 w-44 rounded-md shadow-lg shadow-black shrink-0' key={id}>
            <div className='px-4 py-4'>
                <Image src={img||"#"} width={150} height={150} className='relative rounded-md shadow-lg shadow-black' />
                <span>
                    <h1 className='font-bold py-3'>
                        {title||"#"}
                    </h1>
                    <p className='font-light text-sm overflow-hidden w-30 h-9 truncate'>
                        {caption||"#"}
                    </p>
                </span>
            </div>
        </div>
        </button>
    )

}

export default card;

