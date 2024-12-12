import React from "react";
import MountingCompDidMount from "./MountingPhase/compDidMount";       //MountingPhaseComp ko satto can be other names as well
import ConstructorMount from "./MountingPhase/constructorMount";
import GetDerived from "./MountingPhase/getDerived";
import GetDerivedUpdate from "./UpdatingPhase/getDerivedUpdate";
import ShouldUpdate from "./UpdatingPhase/shouldCompUpdate";
import CompWillUnmount from "./UnmountingPhase/compWillUnmount";
import UpdatePhaseComp from "./UpdatingPhase/compDidUpdate";

const App: React.FC = () => {
  //arrow func in ts
  return (
    <div>
      <ConstructorMount name="I am from constrctor method" />
      <MountingCompDidMount title="React Mounting Phase Example" /> {/*this part passes title prop */}
      <GetDerived name="Hari" />
      <GetDerivedUpdate val={5} />
      <UpdatePhaseComp initialCount={0} />
      <ShouldUpdate />
      <CompWillUnmount />
    </div>
  );
};

export default App;
