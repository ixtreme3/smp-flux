import "./styles.css"
import Wrapper1 from "./Wrapper1";
import { useState } from "react";


function App() {
  return (
    <div className="App">
      <h1>Flux implementation</h1>
      <Wrapper1/>
    </div>
  );
}

/* Версия без использования Flux - состояние поднимаем до родительского компонента и передаем переменную состояния
   и коллбэки вниз по дереву элементов. Данный подход описан в вордовском файле.
   Все закоментированные строки (в файлах Wrapper1.js Wrapper2.js Wrapper3.js) - код приложения без использования
   паттерна Flux.
*/
// function App() {
//     const [counter, setCounter] = useState(0);
//
//     const increaseCounter = () => {
//         setCounter(counter + 1)
//     }
//
//     const decreaseCounter = () => {
//         setCounter(counter - 1)
//     }
//
//     return (
//         <div className="App">
//             <h1>Flux implementation</h1>
//             <Wrapper1 value={counter} incr={increaseCounter} decr={decreaseCounter}/>
//         </div>
//     );
// }

export default App;
