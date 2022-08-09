import People from './people'
import { useState } from 'react'

function Team () {
    const initialState = [
            {personName: 'John Doe', email: 'johnd@gmail.com'},
            {personName: 'Jane Doe', email: 'janed@gmail.com'},
            {personName: 'Someone', email: 'someone@gmail.com'}
        ]
        const [people, setPeople] = useState(initialState);

        return (
            <div>
                <People people={people} setPeople={setPeople} />
            </div>
        )
    }


export default Team