import MobileHome from './Components/MobileHome';
import DesktopHome from './Components/DesktopHome';
import "./Styles.css";

function App() {

  return (
    <>
      <div className='mobile-layout'>
        <MobileHome />
      </div>

      <div className='desktop-layout'>
        <DesktopHome /> 
      </div>
    </>
  )
}

export default App;