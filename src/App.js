import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import AddCounterForm from "./AddCounterForm";
import ConfirmationDelete from "./ConfirmationDelete";



function App() {

    const initialCountersState = [
        {id: 123, name: 'Counter1', count: 2},
        {id: 234, name: 'Counter2', count: 5},
        {id: 345, name: 'Counter3', count: 8},
        {id: 456, name: 'Counter4', count: 48},
    ];
    const [counters, setCounters] = useState(initialCountersState);
    const [confirmCounter, setConfirmCounter] = useState({});

    const resetTotalCount = () => {
        console.log('reset total count');
        const newCounts = counters.map(el => ({...el, count: 0}));
        setCounters(newCounts)
    };
    // there are two examples how to make buttons incrementCounter/decrementCounter
    // these two examples basicaly do the same thing but with different aproach
    const incrementCounter = (id) => {
        console.log('Increment' + id);
        const index = counters.findIndex(el => el.id === id);
        const newCounts = [...counters];
        newCounts[index].count = newCounts[index].count + 1;

        setCounters(newCounts);
    };
    const decrementCounter = (id) => {
        console.log('Decrement' + id);
        const newCounters = counters.map(el => (el.id === id) ? {
                ...el,
                count: el.count - 1
            } : el
        );
        setCounters(newCounters);

    };
    const confirmRemoveCounter = (counter) => {
        setConfirmCounter(counter);
    };
    const removeCounfirmed = id => {
        const newCounters = counters.filter(el => el.id !== confirmCounter.id);
        setCounters(newCounters);
        setConfirmCounter({});

    }
    const confirmDeleteCancel = id => {
        setConfirmCounter({});

    }
    const addCounter = (name, count) => {
        const newCounters = [...counters, {
            id: Math.random(),
            name,
            count: count
        }];
        setCounters(newCounters);
    };


    return (
        <div className='container'>

            <h1>Counter</h1>
            Total {counters.reduce((acc, cur) => acc + cur.count, 0)}
            <button onClick={resetTotalCount} className='btn btn-danger'> Reset Total Count</button>
            <hr/>
            {
                counters.map(el => <Counter key={el.id}
                                            counter={el}
                                            increment={incrementCounter}
                                            decrement={decrementCounter}
                                            remove={confirmRemoveCounter}


                />)
            }

            <hr/>
            <AddCounterForm onSubmit={addCounter}/>
            <ConfirmationDelete
            name={confirmCounter.name}
            onSuccess={removeCounfirmed}
            onCancel={confirmDeleteCancel}
            />

        </div>
    );
}

export default App;
