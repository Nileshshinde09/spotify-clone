import Sidebar from '../components/sidebar'
import Homeheader from '../components/homeheader'
import Homeheaderplaypage from '../components/Homeheaderplaypage'
import focusdata from "../database/playlists/focus/data.json"
import Signupbar from '../components/signupbar'
import Firsthomepagewhitoutsignup from '../components/firsthomepagewhitoutsignup'
import Footer from '../components/footer'
import Firsthomepaypagewithoutsignup from '../components/firstplaypagewithoutsignup'
import { useSelector} from "react-redux";
export default function Home() {
  const visible=useSelector((state)=>state.app.client.openplaylistid) 
  return (
    <>
      <div className="flex col-auto-2">
        <div><Sidebar /></div>
        <div className='pl-52 w-full'>
          <div className='overflow-y-scroll h-screen absolute inset-0 left-52'>
            {
              visible?
              showplaylist(focusdata,visible)
              :
              <Firsthomepagewhitoutsignup/>
            }
            <Footer/>
          </div>
        </div>
      </div>
          <div className="h-16 w-full pl-52 absolute inset-0 top-0">
          {
              visible?
              <Homeheaderplaypage/>
              :
              <Homeheader/>
            }
          </div>
      <footer className='absolute inset-x-0 bottom-0'>
        <Signupbar />
      </footer>

    </>
  )
}
const showplaylist =(focusdata,visibleid) =>{
  console.log(focusdata)
  const data = focusdata?.filter((e)=>e.id === visibleid)[0]
  return (
    <Firsthomepaypagewithoutsignup {...data} key={visibleid} />
    )
}
