import Counter from "./Counter";
import Greet from "./Greet";


const App = function App(){
  return(
    <>
      <h1 className="text-5xl font-mono">hellow world</h1>
      <Greet name="Susie" age={"susie"} />
      <Counter/>
    </>
  )
}

export default App;
