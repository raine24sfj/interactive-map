import './App.css'
import { lazy } from "react"
import { SideBar } from './components/SideBar';
import { ZoneMap } from './components/ZoneMap';
// const SideBar = lazy(() => import("./components/SideBar"));
// const ZoneMap = lazy(() => import("./components/ZoneMap"));

function App() {
  return (
    <>
    <div className="justify-around">
      <SideBar />
      <ZoneMap />
    </div>
    </>
  );
}

export default App
