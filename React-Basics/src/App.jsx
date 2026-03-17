import Greet from "./Greet"

function App() {
  return(
    <>
     <h1>Learning how to render other jsx in here</h1>
     <Greet/>
     <h3>Weather is Beautiful today.</h3>
    </>
    
    // we can only return one element at a time 
    // for multiple elements to return we can wrap them in div and instead of writing div multiple time we can use <> </> - fragments
  )
}

export default App
