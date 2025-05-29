import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ResultsPage from './components/ResultsPage';
import Showcase from './components/Showcase';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Showcase />
      <Features />
      <ResultsPage />
      <Footer />
    </div>
  );
};

export default App;
