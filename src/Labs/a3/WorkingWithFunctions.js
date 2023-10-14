import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import React from 'react';

function WorkingWithFunctions() {
  return(
      <div>
        <ES5Functions/><br/>
        <ArrowFunctions/><br/>
        <ImpliedReturn/><br/>
        <FunctionParenthesisAndParameters/><br/>
      </div>
  );
}
export default WorkingWithFunctions