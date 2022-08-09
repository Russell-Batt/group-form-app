import People from './people'
import { useState } from 'react'

function Team () {
    const initialState = [
            {personName: 'John Doe', email: 'johnd@gmail.com', company_roles: []},
            {personName: 'Jane Doe', email: 'janed@gmail.com', company_roles: []},
            {personName: 'Someone', email: 'someone@gmail.com', company_roles: []}
        ]
        const [people, setPeople] = useState(initialState);

        return (
            <div>
                <People people={people} setPeople={setPeople} />
            </div>
        )
    }


export default Team