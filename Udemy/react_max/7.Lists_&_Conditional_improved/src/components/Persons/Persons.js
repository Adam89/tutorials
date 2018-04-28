import React from 'react'
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => { // index is parameter on map key has to be on outer
        return <Person 
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => props.clicked(index)}
                changed={(event) =>props.changed(event, person.id)}/>
      }); // If its it in one line you can omit the return statment

      export default persons;