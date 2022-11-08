import React from 'react'

const form = ({field, setField}) => {

    const HandleChangeInput = (e) => {
        setField({...field, [e.target.name]: e.target.value})
    }

    return (
        <form action="" className='mt-5'>
            <label className='form-label h4' >Name</label>
            <input type="text" name="name" className='form-control' onChange={HandleChangeInput} value={field.name}/>

            <label className='form-label h4 mt-5' >Number</label>
            <select className='form-select' onChange={HandleChangeInput} name='number' value={field.number}>
                <option value="">Open select menu</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
            </select>

            <h4 className='form-label h4 mt-5' > Drinks </h4>

            <div>
                <div className='mt-3'>
                    <div className="form-check">
                        <input className="form-check-input" 
                            type="radio" 
                            name='drink'
                            value='water'
                            onChange={HandleChangeInput}/>
                            
                        <label className="form-check-label" htmlFor="water" value='water' >
                            Water
                        </label>
                        <br />
                        <input className="form-check-input" 
                            type="radio" 
                            name='drink'
                            value='soda'
                            onChange={HandleChangeInput}/>
                        <label className="form-check-label" htmlFor="soda" value='soda' name = 'drink' >
                            Soda
                        </label>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default form