import { useState } from 'react';

const MutliNumber = ({ multiplier }) => {

    const [nb, setNb] = useState(1);

    const handleMulti = () => {
        setNb(nb => nb * multiplier);
    };

    return (
        <>
            <h3>Multiplication par {multiplier}</h3>
            <div>
                <p>Valeur : {nb}</p>
                <button onClick={handleMulti}>x {multiplier}</button>
            </div>
        </>
    );
};

MutliNumber.defaultProps = {
    multiplier: 2
};

export default MutliNumber;