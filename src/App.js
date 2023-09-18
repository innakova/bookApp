import { useState } from 'react';
import './App.css';
import { BookBlock } from './components/bookBlock/bookBlock';
import Carousel from './components/carousel/carousel';
import Counter from './components/counter/counter';
import {Header} from './components/header/header'

function App() {

  const [posts, setPosts] = useState ([
    {title: 'Sarah J. Maas', body: 'A Court of Thorns and Roses'},
    {title: 'Sarah J. Maas', body: 'A Court of Mist and Fury'},
    {title: 'Sarah J. Maas', body: 'A Court of Wings and Ruin'},
    {title: 'Sarah J. Maas', body: 'A Court of Frost and Starlight'},
])

const [posts2, setPosts2] = useState ([
  {title: 'Armentraut', body: 'Crescent City'},
  {title: 'Armentraut', body: 'Crescent City2'},
  {title: 'Armentraut', body: 'Crescent City3'},
])

  return (
   <div className='innerWrapper'>
    <Header setPosts={setPosts}/>
    <Carousel posts={posts} />
    <Counter />
    <BookBlock posts={posts}/>
    <BookBlock posts={posts2}/>
    
   </div>
  
  );
}

export default App;
