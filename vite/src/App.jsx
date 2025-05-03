import { useEffect, useState } from "react";
import AnimeCard from "./components/AnimeCard";


const App = function App(){
  const [data, setData ] = useState({})
  const [ imageUrl, setImageUrl ] = useState("")

  useEffect(() => {
    const fatchData = async() => {
      const response = await fetch('https://api.jikan.moe/v4/top/anime')
      const data = await response.json()

      console.log(data.data)
     const img = data.data[1].images.jpg.image_url

      setImageUrl()
      console.log(img)
      setImageUrl(img)
    }

    fatchData()

  }, [])


  return(
    <>

      <div className="w-[100vw-40px] ">
          <AnimeCard imageUrl={imageUrl} title={"Musa"} rating={"5.8"} summery={"Hellow Musa"} />
      </div>
    
    </>
  )
}

export default App;
