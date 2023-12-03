import "./App.css";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Services from "./components/services/Services";

function App() {
   return (
      <div className="App">
         <Home />
         <Services />
         <Category />
         <Footer />
      </div>
   );
}

export default App;
