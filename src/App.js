import { useState } from 'react';
import './App.css';
import { BookBlock } from './components/bookBlock/bookBlock';
import Carousel from './components/carousel/carousel';
import Counter from './components/counter/counter';
import {Header} from './components/header/header'
import Conter2 from './components/conter2/conter2';
// import { SelectList } from './components/selectList/selectList';
import { MySelect } from './components/UI/select/select';
import SearchAppBar from './components/searchPanel/searchPanel';
import SearchBox from './components/searchPanel/searchbox';
import { SelectList } from './components/selectList/selectList';

function App() {

  const [posts, setPosts] = useState ([
    {title: 'Sarah J. Maas', body: 'A Court of Thorns and Roses', id:'1', pages: 100},
    {title: 'Sarah J. Maas', body: 'A Court of Mist and Fury', id:'2', pages: 200},
    {title: 'Sarah J. Maas', body: 'A Court of Wings and Ruin', id:'3', pages: 300},
    {title: 'Sarah J. Maas', body: 'A Court of Frost and Starlight', id:'4', pages: 40},
])

const [posts2, setPosts2] = useState ([
  {title: 'Sarah J. Maas2', body: 'A Court of Thorns and Roses', id:'1', pages: 100},
  {title: 'Sarah J. Maas3', body: 'A Court of Mist and Fury', id:'2', pages: 100},
  {title: 'Sarah J. Maas4', body: 'A Court of Wings and Ruin', id:'3', pages: 100},
  {title: 'Sarah J. Maas5', body: 'A Court of Frost and Starlight', id:'4', pages: 100},
])

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))  
}
const removePost2 = (post) => {
  setPosts2(posts2.filter(p => p.id !== post.id))
}

// const [selectedSort, setSelectedSort] = useState('')
    
//     const sortPosts = (sort) => {
//         setSelectedSort(sort);
//         console.log(sort)
//         setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
//     }

  return (
   <div className='innerWrapper'>
    <Header setPosts={setPosts}/>
    <Carousel posts={posts} />
    <Counter /> 
    {/* <MySelect
      value={selectedSort}
      onChange={sortPosts}
      defaultValue ='Sort'
      options = {[
          {value:'title', name:"Author"},
          {value:"body", name:"Book title"},
          {value:'pages', name:'Page'},
      ]}
    /> */}

      {/* <SearchAppBar />
      <SearchBox /> */}
            
        
    <Conter2 />

    <SelectList setPosts={setPosts} posts={posts}/>   

    {/* {posts.length !== 0
    ? */}
    <BookBlock remove={removePost} posts={posts}/>
    {/* :
    <div>
      <h2>No book on library</h2>
    </div>
  } */}
    {posts2.length !== 0
    ?
    <BookBlock remove={removePost2} posts={posts2}/>    
    :
    <div>
      <h2>No book on library</h2>
    </div>
  }
   </div>  
  );
}

export default App;
