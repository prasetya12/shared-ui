import { NavbarPlexicus } from "./components/Navbar"
import { FooterPlexicus } from "./components/Footer"

function App() {

  return (
    <>
      <div className='flex'>
        <NavbarPlexicus />
      </div>
      <div className="mt-24">
        <FooterPlexicus/>
      </div>
    </>
  )
}

export default App
