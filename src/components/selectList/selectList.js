// import { useState } from 'react'
// import { MySelect } from '../UI/select/select'
// import './selectList.css'

// export const SelectList ({setPosts}) {
//     const [selectedSort, setSelectedSort] = useState('')
    
//     const sortPosts = (sort) => {
//         setSelectedSort(sort);
//         setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
//     }
//     return (
//         <div>
//             <MySelect>
//                 value={selectedSort}
//                 onChange={sortPosts}
//                 defaultValue='Sort'
//                 options={[
//                     {velue:'title', name: "Author"},
//                     {velue:'body', name:"Book title"},
//                 ]}
//             </MySelect>
//         </div>
//     )
// }