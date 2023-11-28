import "./App.css";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import TarjetaServicio from "./Components/TarjetaServicio.jsx";

import Todo from "./Page/Todo.jsx"
function App() {

  return (
    
   <div className="app-layout ">
    <header className="app-header"> <Header/></header>
    <section>
        <TarjetaServicio/>
      </section>
    <main className="app-main">
      <Todo/>
      </main>
      
    <footer className="app-footer"><Footer/></footer>
   </ div>
  

  
);
}

export default App;
