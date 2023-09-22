import './bookBlock.css'
import { OneBookBlock } from "../oneBookBlock/oneBookBlock";


export const BookBlock = ({posts, remove}) => {

    return (
        <div>
            <h2 className="last-book-block-title">Last book</h2>
          <div className="post-block">
            {posts.map(post =>
            <OneBookBlock
                title={post.title}
                body={post.body}
                remove={() => remove(post)}
                key={post.id}
            />)}  
          </div>         
        </div>
    )
}


