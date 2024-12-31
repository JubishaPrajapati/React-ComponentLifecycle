import React, { Component } from "react";

interface MountConstructorProps {
    name: string;
}

interface MountConstructorState {
    count: number;
}
class ConstructorMount extends Component<MountConstructorProps, MountConstructorState> {
    constructor(props: MountConstructorProps) {
        super(props);
        this.state = { count: 0 };
        console.log("Constructor call");
    }

    render() {
        return (
            <div>
                <h3>Hi, I am from Mounting Phase constructor</h3>
                <p>Hello, {this.props.name}</p>
                <p>Count: {this.state.count}</p>
            </div>
        )
    }
}
export default ConstructorMount;