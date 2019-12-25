import React, { useState, memo, useCallback, useMemo } from 'react';
//memo性能优化后的子组件
const MemoTestChild = memo(TestChild);
function Test() {
    const [count, setCount] = useState(100);
    const [config, setConfig] = useState({
        color: '#f60',
        fontSize: '10px'
    });

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>++</button>
            {/* 引入子组件 */}
            {/* <TestChild/>       把父组件的状态和设置状态的函数传递给子组件     */}
            <MemoTestChild
                // config={config}

                // 当传递的props为对象时，如果是useState定义的对象不需要使用useMemo优化，如果porps包含useState定义的属性和其他的一些属性 要使用useState优化
                config={useMemo(() => ({ color: config.color, fontSize: '20px' }), [config.color])}
                // config={useMemo(() => ({ name, color: config.color }), [name, config.color])}
                onClick={useCallback((obj) => setConfig(obj), [])}
            />
            {/* useCallback((newName: string) => setName(newName),[]) */}
            {/* 这里使用了useCallback优化了传递给子组件的函数，只初始化一次这个函数，下次不产生新的函数 */}
        </>
    )
}
export default Test;

function TestChild({ config, onClick }) {
    console.log(config)
    console.log('TestChild运行了?');
    return (
        <>
            <h3 style={{ color: config.color, fontSize: config.fontSize }}>我是子组件,这是父组件传递过来的样式</h3>
            <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
        </>
    );
}