import { useState } from 'react'
import { MySelect } from '../UI/select/select'
import './selectList.css'

export const SelectList = ({setPosts, posts}) => {

    const [selectedSort, setSelectedSort] = useState('')
    
    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }
    return (
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Sort'
                options={[
                    {value:'title', name:"Author"},
                    {value:"body", name:"Book title"},
                    {value:'pages', name:'Page'},
                ]}
                >
            </MySelect>
        </div>
    )
}