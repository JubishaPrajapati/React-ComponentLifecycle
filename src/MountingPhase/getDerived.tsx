import React, { Component } from "react";

interface GetDerivedProps {
    name: string;
}

interface GetDerivedState {
    count: number;
}
class GetDerived extends Component<GetDerivedProps, GetDerivedState> {
    constructor(props: GetDerivedProps) {
        super(props);
        this.state = { count: 0 };
    }

    static getDerivedStateFromProps(nextProps: GetDerivedProps, nextState: GetDerivedState) {
        if (nextProps.name === "Hari") {
            return { count: 10 };
        }
        return null;
    }

    render() {
        return (
            <div>
                <h3>Hi, I am from Mounting Phase static getderivedfromprops</h3>
                <p>Hello, {this.props.name}</p>
                <p>Count: {this.state.count}</p>
            </div>
        )
    }
}
export default GetDerived;