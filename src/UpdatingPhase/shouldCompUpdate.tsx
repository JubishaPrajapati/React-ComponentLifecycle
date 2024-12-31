import React, { Component } from "react";

// interface shouldUpdateProps {
//     text: string;
// }
interface shouldUpdateState {
    count: number;
}

class ShouldUpdate extends Component<{}, shouldUpdateState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 10,
            // text: "I am from should update component."
        }
    }

    shouldComponentUpdate(nextProps: {}, nextState: shouldUpdateState) {
        return nextState.count !== this.state.count;
    }

    changeCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <h3>I am from shouldupdate component</h3>
                <p>Count: {this.state.count}</p>
                <button onClick={this.changeCount}>Increment Count</button>
            </div>
        )
    }
}
export default ShouldUpdate;