import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState(
            {
                time: new Date()
            }
        );
    }

    componentDidMount()
    {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.interval);
    }

    render () {
        return (
        <div>
        <h1>Clock</h1>
        <span className="time">{this.state.time.toLocaleTimeString()}</span>
        </div>
        );
    }

}

export default Clock;
