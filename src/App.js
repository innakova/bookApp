import './App.css';
import Carousel from './components/carousel/carousel';
import Counter from './components/counter/counter';
import {Header} from './components/header/header'

function App() {
  return (
   <div className='innerWrapper'>
    <Header />
    <Carousel />
    <Counter />
   </div>
  
  );
}

export default App;
