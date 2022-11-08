import Form from './components/Form'
import Rest from './components/Restults'
import { useState } from 'react'




const App = () => {
  const [field, setField] = useState({
    name: '',
    number: '',
    drink: ''
  })
  const [data, setData] = useState([])
  const HandleChangeSubmit = async(e) => {
    e.preventDefault()

    
    setData([...data, field])
    const jsonData = JSON.stringify(data)
    fetch('../data.json',{method: 'POST', body: jsonData})


    setField({
      name: '',
      number: '',
      drink: ''
    })
    
  }
  return (
    <>
      <div className="container text-center mt-5 mb-5">
        <h1>Kosmos challenge</h1>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col d-grid gap-2">
            <h2 className='display-5' >Form</h2>
            <Form setField={setField} field={field} />
            <input type="submit"
              className='btn btn-dark btn-lg mt-5 br-5'
              value='Submit'
              onClick={HandleChangeSubmit} />
          </div>
          <div className="col">
            <h2 className='display-5'>Results</h2>
            <Rest data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App