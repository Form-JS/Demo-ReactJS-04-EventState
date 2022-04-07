import { Component } from 'react';

class MutliNumberClass extends Component {

    static defaultProps = {
        multiplier: 2
    };

    constructor(props) {
        super(props);
        this.state = {
            nb: 1
        };
    };

    handleMulti = () => {
        this.setState((state, props) => ({
            nb: state.nb * props.multiplier
        }));
    };

    render() {
        const { multiplier } = this.props;
        const { nb } = this.state;

        return (
            <>
                <h3>Multiplication par {multiplier} (Classe)</h3>
                <div>
                    <p>Valeur : {nb}</p>
                    <button onClick={this.handleMulti}>x {multiplier}</button>
                </div>
            </>
        );
    }
}

export default MutliNumberClass;