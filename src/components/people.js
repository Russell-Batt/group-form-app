import {useState, useEffect} from 'react'

function People(props) {
    const { people, setPeople } = props;

    const [ personName, setPersonName ] = useState('');
    const [ email, setEmail ] = useState ('');
    const [ errorMessage, setErrorMessage ] = useState (null);
    const companyRoles = ['Manager', 'Admin', 'Contributor'];
    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, (event.target.value)];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const addPerson = () => {
        setPeople([
            ...people,
            {
                'personName': personName,
                'email': email,
                'company_roles' : checked 
            }
        ])
    }

    useEffect (() => {
        console.log('Component mounted')
    }, [])
    
    useEffect (() => {
        console.log(checked)
    }, [checked])

    const submitHandler = (e) => {
        e.preventDefault();

        function validateInputs() {
            const regex = /^([^0-9]*)$/;
            const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

            if(regex.test(personName)) {
                addPerson()
                setErrorMessage(null);
            }else {
                return setErrorMessage('Please only use letters');
            }
            
            if(emailRegex.test(email)) {
                addPerson()
                setErrorMessage(null);
            }else {
                return setErrorMessage('Please enter a valid email address');
            }
        }
        validateInputs();
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={personName} onChange={(e) => setPersonName(e.target.value)} required /> 
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                </div>
                <div>
                    {companyRoles.map((item, index) =>
                        <div key={index}>
                            <input value={item} type="checkbox" onChange={handleCheck} />
                            <span>{item}</span>
                        </div>
                    )}
                </div>
                    <button type="submit">Add Person</button>
                    {errorMessage && <p>{errorMessage}</p>}
            </form>
            
            <div className="people-grid">
                {people.map((person, i) => {
                    return (
                        <div key={`person-${i}`}>
                            <p>{person.personName}</p>
                            <p>{person.email}</p>
                            <p>{person.company_roles.toString()}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default People