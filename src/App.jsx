import './App.css'
import AvailablePlayer from './component/availablePlayer/availablePlayer'
import SelectedPlayer from './component/selectedPlayers/selectedPlayer'
import Navbar from './component/Navbar/Navbar'
import { Suspense, useState } from 'react'


const ftechPlayer = async () => {
  const res = await fetch('/Player.json')
  return res.json()
}

const playerPromise = ftechPlayer()
function App() {
  const [availableBalance , setAvailableBalance] = useState(1000000)
  const [toggle,setToggle] = useState(true)
  const [purchasedPlayer , setPurchasedPlayer] = useState([])
  
  
  return (
    <>

      <Navbar availableBalance={availableBalance} ></Navbar>
      <div className='max-w-[1200px] mx-auto mt-20 mb-10  flex justify-between items-center'>
        <h1 className='font-bold'>{toggle === true? "Available Players" : `Selected Players( ${purchasedPlayer.length}/6)`}</h1>
        <div className='flex'>
          <button onClick={() => setToggle(true)} className={`btn rounded-r-none border-r-0 rounded-lg px-4 py-1 text-md text-black  ${toggle===true?"bg-[#E7FE29]":"bg-white"}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`btn rounded-md rounded-l-none px-4 py-1 text-sm text-black border-l-0 translate-3d duration-500 ${toggle === false? "bg-[#E7FE29]":"bg-white"}`}>Selected <span>({purchasedPlayer.length})</span></button>
        </div>
      </div>
      {
        toggle===true?<Suspense fallback={<h1>Data is Loading</h1>}>
        <AvailablePlayer 
        purchasedPlayer={purchasedPlayer} 
        setPurchasedPlayer={setPurchasedPlayer}
        availableBalance={availableBalance} 
        setAvailableBalance={setAvailableBalance} 
         playerPromise={playerPromise}>
        </AvailablePlayer>
      </Suspense>:<SelectedPlayer purchasedPlayer={purchasedPlayer}></SelectedPlayer>
      }
      

      

    </>
  )
}

export default App
