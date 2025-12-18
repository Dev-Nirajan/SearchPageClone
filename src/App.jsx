import 'App.css'
import Headerr from "./Header";
import SearchSection from "./Search";
import Footer from "./Footer"

const App = () => {
  return (
    <div class="flex flex-col h-screen">
    <Headerr/>
    <SearchSection/>
    <Footer/>
      
    </div>
  );
};

export default App;

