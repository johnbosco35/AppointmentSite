import AboutUs from "../home/AboutUs"
import Counter from "../home/Counter"
import GetInTouch from "../home/GetInTouch"
import Hero from "../home/Hero"
import Last from "../home/Last"
// import MeetOurCeo from "../home/MeetOurCeo"
import SendUsMessage from "../home/SendUsMessage"
import Service from "../home/Service"

const Homescreen = () => {
  return (
    <div>
        <Hero/>
        <Counter/>
        {/* <MeetOurCeo/> */}
        <Service/>
        <AboutUs/>
        <GetInTouch/>
        <SendUsMessage/>
        <Last/>
    </div>
  )
}

export default Homescreen