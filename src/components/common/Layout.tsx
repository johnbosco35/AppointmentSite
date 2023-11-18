import { Outlet } from "react-router-dom"
import Header from "../static/Header"
import Footer from "../static/Footer"
import { useEffect, useState } from "react"
import { CiWifiOn } from "react-icons/ci";
import { CiWifiOff } from "react-icons/ci";

const Layout = () => {
  const [isOnLine,setIsOnLine] = useState(navigator.onLine)
  const [showNotification,setShowNotification] = useState(false)

  useEffect(()=>{
    const handleOnLine = () =>{
      setIsOnLine(true);
      setShowNotification(true)

      setTimeout(() =>{
        setShowNotification(false)
      },3000)
    }

    const handleOffLine = () =>{
      setIsOnLine(false);
      setShowNotification(true)

      setTimeout(() =>{
        setShowNotification(false)
      },3000)
    }
    window.addEventListener('online',handleOnLine)
    window.addEventListener('offline',handleOffLine)

    return () =>{
      window.removeEventListener('online',handleOnLine),
      window.removeEventListener('offline',handleOffLine)
    }
  },[])
  return (
    <div>
      {
        showNotification && (
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      {
          isOnLine ? <CiWifiOn size={25}/> : <CiWifiOff size={25}/>
        }
        {
          isOnLine ? (
            <p>You are online</p>
          ) : (
            <p>You are offline. Please check your internet connection and try again</p>
          )
        }
      </div>
        )
      }
        <Header />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout