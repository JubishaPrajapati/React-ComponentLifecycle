import React, { Component } from "react";

interface MountingCompDidMountProps {   //defines title props which will be passed to component
  title: string;
}

interface MountingCompDidMounttate {   //defines msg state which will change after comp mounts
  message: string;
}

class MountingCompDidMount extends Component<MountingCompDidMountProps, MountingCompDidMounttate> {   //props and state are arguments
  constructor(props: MountingCompDidMountProps) {
    super(props);   //to call parent class constructor

    this.state = {
      message: "Component is mounting..."
    };
    console.log("Constructor: Component is initializing");   //when constructor is called
  }


  componentDidMount() {  //called after comp has been mounted to DOM
    console.log("componentDidMount: Component mounted");
  };
  componentWillUnmount(): void {
    console.log("Component will mount");
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default MountingCompDidMount; 
