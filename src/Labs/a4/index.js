import Add from "./Add";
import ClickEvents from "./ClickEvents";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import "./index.css"


function Assignment4() {
  function sayHello() {
    alert("Hello");
  }
  return (
      <div className={'page-setup'}>
        <h1>Assignment 4</h1>
        <ReduxExamples/><br/>
        <ParentStateComponent/><br/>
        <ArrayStateVariable/><br/>
        <ObjectStateVariable/><br/>
        <DateStateVariable/><br/>
        <StringStateVariables/><br/>
        <BooleanStateVariables/><br/>
        <Counter/><br/>
        <EventObject/><br/>
        <PassingFunctions theFunction={sayHello} /><br/>
        <PassingDataOnEvent/><br/>
        <ClickEvents/><br/>
        <Add a={1} b={2} /><br/>
      </div>
  );
}
export default Assignment4;