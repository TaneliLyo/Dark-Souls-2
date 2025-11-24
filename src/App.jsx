import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import HomePage from './mainSites/home'
import CharactersPage from './mainSites/characters'
import SongPage from './mainSites/Songs'
import { Aldia, Pate, Benhart, Shanalotte, KingVendrick, SirAlonne, FireKeepers, Velstadt, Raime } from './characterSites/ShortcutPages'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path='characters' element={<CharactersPage/>}></Route>
        <Route path='Shanalotte' element={<Shanalotte/>}></Route>
        <Route path='songs' element={<SongPage/>}></Route>
        <Route path='Vendrick' element={<KingVendrick/>}></Route>
        <Route path='SirAlonne' element={<SirAlonne/>}></Route>
        <Route path='Aldia' element={<Aldia/>}></Route>
        <Route path='Benhart' element={<Benhart/>}></Route>
        <Route path='Pate' element={<Pate/>}></Route>
        <Route path='TheFirekeepers' element={<FireKeepers/>}></Route>
        <Route path='Velstadt' element={<Velstadt/>}></Route>
        <Route path='Raime' element={<Raime/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
