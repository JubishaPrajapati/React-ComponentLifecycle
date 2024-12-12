import React from "react";
class ComponentOne extends React.Component {
    // Defining the componentWillUnmount method
    componentWillUnmount() {
        alert("The component is going to be unmounted");
    }

    render() {
        //1st msg that is shown 
        return <h1>Hello I am from component will unmount phase and if u click the btn below i will be unmounted</h1>;
    }
}

class CompWillUnmount extends React.Component {
    //1st the display is true 
    state = { display: true };
    delete = () => {
        this.setState({ display: false });   //del func to set state of dispaly as true 
    };

    render() {
        let comp;
        if (this.state.display) {       //if this.state is true then render compone class
            comp = <ComponentOne />;
        }
        return (
            <div>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }
}

export default CompWillUnmount;