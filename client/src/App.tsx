import './App.scss'
import { lazy } from "react"
import { SideBar } from './components/SideBar';
import { ZoneMap } from './components/ZoneMap';
// const SideBar = lazy(() => import("./components/SideBar"));
// const ZoneMap = lazy(() => import("./components/ZoneMap"));

function App() {
  return (
    <>
    <div className="bg-[#000] flex-row justify-around items-center font-normal ">
      <SideBar />
      <ZoneMap />
    </div>
    </>
  );
}

export default App
