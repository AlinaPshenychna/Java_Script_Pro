import './App.css';
import Header from "./components/header/Header";
import LeftMenu from "./components/left_menu/LeftMenu";
import MainContent from "./components/main_content/MainContent";

function App() {
  return (
    <div className="Landing-page">
      <header>
        <Header />
      </header>
      <div className="Landing-content">
        <LeftMenu/> 
        <MainContent/>
      </div>
    </div>
  );
}

export default App;