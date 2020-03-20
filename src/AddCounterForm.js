import React, {useState} from 'react';
import './App.css';

function AddCounterForm(props) {
    const [name, setName] = useState('---');
    const [count, setCount] = useState('456');

    const onSubmit = () => {
        props.onSubmit(name, Number(count));
        setName('');
        setCount(0);
    }
    return (
        <div className='row'>
            <div className="col">
                <input type="text" name='name' value={name} onChange={e => setName(e.target.value)}
                       className='form-control'/>

            </div>
            <div className="col">
                <input type="number" count='count' onChange={e => setCount(e.target.value)} className='form-control'/>

            </div>
            <div className="col">
                <button onClick={() => onSubmit(name, count)} className='btn btn-outline-secondary'>Create</button>

            </div>
        </div>
    );
}

export default AddCounterForm;
