import Counter from "./Counter";

const Wrapper3 = (props) => {
    return (
        <div className="wrapper-f">
            <h4>This is third wrapper, in real life this could be some real functioning component</h4>
            <Counter/>
        </div>
    );
}

// const Wrapper3 = (props) => {
//     return (
//         <div className="wrapper">
//             <h4>This is third wrapper, in real life this could be some real functioning component</h4>
//             <Counter value={props.value} incr={props.incr} decr={props.decr}/>
//         </div>
//     );
// }

export default Wrapper3;