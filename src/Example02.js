import React, { useState, memo, useCallback } from 'react';
import { Button } from 'antd'
//memo性能优化后的子组件
const MemoTestChild = memo(TestChild);







function Test() {
    const [count, setCount] = useState(100);
    const [name, setName] = useState('TestChild组件');

    function updateName(value) {
        console.log(value)
    }
    return (
        <>
            <h2>{count}</h2>
            <Button onClick={() => setCount(count + 1)}>++</Button>
            {/* 引入子组件 */}
            {/*  这里如果不使用useCallback 父组件在点击++的时候 也会触发子组件的执行 其实这里是不需要的 因为变化跟子组件无关     */}
            <MemoTestChild name={name} callback={useCallback((value) => updateName(value), [])} />
            {/* <MemoTestChild name={name} callback={(value) => updateName(value)} /> */}
        </>
    )
}
export default Test;




function TestChild({ name, callback }) {
    console.log('TestChild运行了?');
    function aa() {
        callback('xixi')
    }
    return (
        <>
            <h3>我是子组件,这是父组件传递过来的数据:{name}</h3>
            {/* 传值函数调用的两种写法 如果直接需要通过bind */}
            {/* <button onClick={aa}>改变name</button> */}
            <Button onClick={callback.bind(null, 'xixi')}>click me</Button>
        </>
    );
}