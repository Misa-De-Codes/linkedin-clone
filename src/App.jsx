import Feed from "./components/Feed"
import Header from "./components/Header"
import Wedgets from "./components/Wedgets"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"


const App = () => {
  return(
    <>
      <Header />
      <div className=" flex flex-row justify-center gap-5 lg:gap-10">
        <Sidebar />
        <Feed />
        <Wedgets />
      </div>
    </>
  )
}


export default App 
