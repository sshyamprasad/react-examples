import { useState } from "react";

const UseStateExample = () => {
    let [count, setCount] = useState(10);
    return (<div>
        <button onClick={()=> {setCount(++count)}}>+</button>
        {count}
        <button onClick={()=> count<=0?0:setCount(--count)}>-</button>
    </div>);
}

export default UseStateExample