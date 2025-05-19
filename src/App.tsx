import { NavbarPlexicus } from "./components/Navbar"
import { FooterPlexicus } from "./components/Footer"

function App() {

  return (
    <div className="h-screen bg-black">
      <div className='flex'>
        <NavbarPlexicus />
      </div>
      <div className="h-screen"></div>
      <div className="mt-24">
        <FooterPlexicus/>
      </div>
    </div>
  )
}

export default App
