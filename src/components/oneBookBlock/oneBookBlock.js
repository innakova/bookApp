import './oneBookBlock.css'

export const OneBookBlock = ({title, body}) => {
    return (
        <div className="post">
            <div className="post-content"> 
                <h2>{title}</h2>
                <h3>{body}</h3>
            </div>            
        </div>
    )
}