import './App.scss'//Uncomment this, VSCode just complained like a bitch - Hawk
import { SideBar } from './components/SideBar';
import { ZoneMap } from './components/ZoneMap';

function App() {
  return (
    <>
    <div className="bg-[#000] font-normal">
      <div className="grid grid-cols-3 gap-4">
        <SideBar />
        <ZoneMap />
      </div>
    </div>
    </>
  );
}

export default App
