import './App.scss'
import { SideBar } from './components/sidebar';
import { Maps } from './components/maps';
import { Header } from './components/header';

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <SideBar />
        <Maps />
      </div>
    </>
  );
}

export default App
