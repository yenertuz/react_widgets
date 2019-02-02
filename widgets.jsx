import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';

class Root extends React.Component {
    render() {
        return (
            <div>Widgets
                <br />
                <Clock />

            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root/>, root);
})