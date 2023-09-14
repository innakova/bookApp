import { useState } from 'react';
import './App.css';
import { BookBlock } from './components/bookBlock/bookBlock';
import Carousel from './components/carousel/carousel';
import Counter from './components/counter/counter';
import {Header} from './components/header/header'

function App() {

  const [posts, setPosts] = useState ([
    {title: 'Sarah J. Maas', body: 'Crescent City'},
    {title: 'Sarah J. Maas', body: 'Crescent City2'},
    {title: 'Sarah J. Maas', body: 'Crescent City3'},
])

const [posts2, setPosts2] = useState ([
  {title: 'Armentraut', body: 'Crescent City'},
  {title: 'Armentraut', body: 'Crescent City2'},
  {title: 'Armentraut', body: 'Crescent City3'},
])

  return (
   <div className='innerWrapper'>
    <Header />
    <Carousel />
    <Counter />
    <BookBlock posts={posts}/>
    <BookBlock posts={posts2}/>
    
   </div>
  
  );
}

export default App;
