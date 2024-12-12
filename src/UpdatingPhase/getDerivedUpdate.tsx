import React, { Component } from "react";

interface GetDerivedProps {
    val: number;
}
interface GetDerivedState {
    count: number;
}

class GetDerivedUpdate extends Component<GetDerivedProps, GetDerivedState> {
    constructor(props: GetDerivedProps) {
        super(props);
        this.state = {
            count: 1,
        }
    }
    static getDerivedStateFromProps(nextProps: GetDerivedProps, nextState: GetDerivedState) {
        console.log({ nextProps, nextState })
        if (nextProps.val == nextState.count) {
            return { count: nextProps.val };
        }
        return null;
    }

    render() {
        return (
            <div>
                <h3>I am from Getderived updating phase method</h3>
                <p>Value:{this.props.val}</p>
                <p>Count:{this.state.count}</p>
            </div>
        )
    }
}
export default GetDerivedUpdate;