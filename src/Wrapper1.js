import Wrapper2 from "./Wrapper2";

const Wrapper1 = (props) => {
    return (
        <div className="wrapper-f">
            <h2>This is first wrapper, in real life this could be some real functioning component</h2>
            <Wrapper2/>
        </div>
    );
}

// const Wrapper1 = (props) => {
//     return (
//         <div className="wrapper">
//             <h2>This is first wrapper, in real life this could be some real functioning component</h2>
//             <Wrapper2 value={props.value} incr={props.incr} decr={props.decr}/>
//         </div>
//     );
// }

export default Wrapper1;