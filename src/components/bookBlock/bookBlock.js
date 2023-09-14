import './bookBlock.css'
import { OneBookBlock } from "../oneBookBlock/oneBookBlock";


export const BookBlock = ({posts}) => {

    return (
        <div>
            <h2 className="last-book-block-title">Last book</h2>
          <div className="post-block">
            {posts.map(post =>
            <OneBookBlock
                title={post.title}
                body={post.body}
            />)}  
          </div>         
        </div>
    )
}


