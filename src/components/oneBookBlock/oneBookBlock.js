import PositionedMenu from '../positionedMenu/positionedMenu'
import './oneBookBlock.css'

export const OneBookBlock = ({title, body, remove}) => {
    return (
        <div className="post">
            <div className="post-content"> 
                <h2>{title}</h2>
                <h3>{body}</h3>
                <PositionedMenu 
                remove={remove}
                // onClick={() => props.remove(props.post)} 
                />
                {/* <div className='mini-circle-block'>
                    <div className='mini-circle'></div>
                    <div className='mini-circle'></div>
                    <div className='mini-circle'></div>
                </div> */}
            </div>            
        </div>
    )
}