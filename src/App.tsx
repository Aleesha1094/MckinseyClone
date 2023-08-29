import NavScroll from './Components/Navbar/NavScroll';
import Landingpage from './Components/Home/landingpage';
import Card from './Components/Card/Card';
import Blog from './Components/mckinseyBlog/mckinseyBlog';
import JoinMck from './Components/JoinMckinsey/joinMckinsey';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
      <NavScroll/>
      <Landingpage/>
      <Card/>
      <Blog/>
      <JoinMck/>
      <Footer/>
    </div>
  );
}

export default App;
