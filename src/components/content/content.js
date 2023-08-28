import './content.css'

export const Content = ({dod_text, author}) => {
    return (
        <div className='content_dod'>
            <p>
                <q>{dod_text}</q> <b>{author}</b>
            </p>
        </div>
    )
}
