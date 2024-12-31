import React, { Component } from "react";

interface updateProps {
    initialCount: number;
}
interface updateState {
    count: number;
}

class UpdatePhaseComp extends Component<updateProps, updateState> {
    constructor(props: updateProps) {
        super(props);

        this.state = {
            count: props.initialCount,
        };
        console.log("Component is initializing");
    }

    componentDidUpdate(prevProps: updateProps, prevState: updateState) {
        console.log("Component is updated");

        console.log("Previous props:", prevProps);
        console.log("Previous state:", prevState);
        console.log("Current state:", this.state);
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h3>React Updating Phase example</h3>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment} >Increase</button>
                <button onClick={this.decrement} >Decrease</button>
            </div>
        )
    }
}

export default UpdatePhaseComp;