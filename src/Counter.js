import React from "react";
import { connect } from "./MyFlux/flux";
import { incrementAction, decrementAction } from "./counterStore";

const Counter = (props) => (
    <div className="counter">
        <h5>Counter component</h5>
        <p>Value: {props.value}</p>
        <div>
            <button onClick={props.incr}>Increment</button>
            <button onClick={props.decr}>Decrement</button>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        value: state.counter
    };
};

const mapDispatchToProps = (dispatch) => ({
    incr: () => dispatch(incrementAction()),
    decr: () => dispatch(decrementAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
