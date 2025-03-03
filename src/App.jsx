import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      if (initialPersons) {
        setPersons(initialPersons)
      } else {
        console.error('La respuesta del servidor no es un array:', initialPersons)
        setPersons([])
      }
    }).catch(error => {
      console.error('Error al obtener Personas:', error)
      setPersons([]) 
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const existingPerson = persons.find((person) => person.name === newName)

    const personObject = {
      name: newName,
      phone: newPhone,
    }

    if (existingPerson) {
      personService.update(existingPerson.id, personObject)
        .then((updatedPerson) => {
          setPersons(persons.map((person) => (person.id === updatedPerson.id ? updatedPerson : person)))
          setNewName('')
          setNewPhone('')
        })
        .catch((error) => {
          console.error('Error al actualizar la persona', error)
        })
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
      })
      .catch((error) => {
        console.error('Error al agregar la persona', error)
      })
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Phone <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key = {person.id}>{person.name} {person.phone}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
