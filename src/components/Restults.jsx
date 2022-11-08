import React from 'react'

const Restults = ({ data }) => {
    return (
        <>
            <div>
                <ul className='list-group list-group-flush ' >
                    {data.map((item) => (
                        <li className='list-group-item'>
                            <h2>Name: {item.name}</h2>
                            <h3>Number {item.number}</h3>
                            <h4>Drink: {item.drink}</h4>
                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
}

export default Restults