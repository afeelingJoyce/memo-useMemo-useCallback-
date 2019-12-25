import React, { useState, memo } from 'react';
import { Button } from 'antd'
import './Example.scss'




/**
 *  memo的用法：
 * 
 * 如果 子组件的数据是静态的 即不需要父组件获取props 那么memo可以解决重复渲染的问题
 * 
 */


const MemoTestChild = memo(TestChild)




function Test() {
    const [count, setCount] = useState(100);
    return (
        <div className='App'>
            <h2>{count}</h2>
            <Button type='primary' onClick={() => setCount(count + 1)}>Click me</Button>
            {/* 引入子组件 */}
            <MemoTestChild />
        </div>
    )
}
export default Test;




//创建一个子组件
function TestChild() {
    console.log('TestChild运行了');
    return (
        <div style={{ border: '1px solid #ccc', padding: '50px', margin: '10px' }}>
            <h3>我是子组件</h3>
        </div>
    );
}
