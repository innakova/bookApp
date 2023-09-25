import './select.css'


export const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select className='select'
        value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option 
            className='options'
            disable='true'
            value=""
            >
                {defaultValue}
            </option>
            {options.map(options =>
                <option 
                key={options.value} 
                value={options.value}
                >
                {options.name}
                </option>
                )}
        </select>
    )
}