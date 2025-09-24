

import './App.css'
import AvailablePlayer from './component/availablePlayer/availablePlayer'
import SelectedPlayer from './component/selectedPlayers/selectedPlayer'
import Navbar from './component/Navbar/Navbar'
import { Suspense } from 'react'


const ftechPlayer  = async() => {
  const res = await fetch('/Player.json')
  return res.json()
}

function App() {

    const playerPromise = ftechPlayer()
  return (
    <>
      
      <Navbar></Navbar>

      <Suspense fallback={<h1>Data is Loading</h1>}>
      <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
      </Suspense>

      {/* <SelectedPlayer></SelectedPlayer> */}

    </>
  )
}

export default App
