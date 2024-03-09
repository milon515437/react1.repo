
import './App.css'
import Team from './App2'
import Users from './User'
import Friend from './Friend'


function App() {
  function handleClick(){
    alert('button me')
  }

  return (
    <>

      <h1>My First React project </h1>
     
      <Friend></Friend>
      <Users></Users>
      
      <Team>

      </Team>





      <button onClick={handleClick}>Buy Now </button>
      <button>Buy Now </button>

    </>
  )
}

export default App
