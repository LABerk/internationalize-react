import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [name, setName] = useState('')


    return (
        <div>
            <h1>Please Enter Your Name:</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Link to='/translation' state={{ name }} className='custom-link' >Next</Link>
        </div>
    )
}