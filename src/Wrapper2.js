import Wrapper3 from "./Wrapper3";

const Wrapper2 = (props) => {
    return (
        <div className="wrapper-f">
            <h3>This is second wrapper, in real life this could be some real functioning component</h3>
            <Wrapper3/>
        </div>
    );
}

// const Wrapper2 = (props) => {
//     return (
//         <div className="wrapper">
//             <h3>This is second wrapper, in real life this could be some real functioning component</h3>
//             <Wrapper3 value={props.value} incr={props.incr} decr={props.decr}/>
//         </div>
//     );
// }

export default Wrapper2;