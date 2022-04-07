import { useState } from 'react';

const BtnDemo = () => {

    const [day, setDay] = useState(false);

    const handleBtn = () => {
        setDay(old => !old);
        console.log('Click: ', day);
    };

    return (
        <div>
            <p>{day ? 'Jour' : 'Nuit'}</p>
            <button onClick={handleBtn}>Here !!!</button>
        </div>
    );
};

export default BtnDemo;