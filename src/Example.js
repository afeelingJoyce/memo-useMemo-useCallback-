
import React, { useState, PureComponent } from 'react';

import { Button } from 'antd'

import './Example.scss'



/**
 * PureComponent原理时对shouldcomponentUpdate的封装 当props改变时 才会渲染触发组件的渲染
 * 
 * 但是 props如果结构比较复杂 可能会有渲染问题
 */

class Child extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(111)
        return <h1>{this.props.desc}</h1>
    }
}

function App() {
    const [nickName, setNickName] = useState(new Date().getTime())

    const [desc, setDesc] = useState('hello world')
    return (
        <div className="App">
            <h1>{nickName}</h1>
            <Button type='primary' onClick={() => { setNickName(new Date().getTime()); }}>Click me</Button>
            <Child desc={desc} />
        </div>
    )
}

export default App
