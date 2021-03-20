import React, { Component } from 'react'
import Hello from './components/hello'
import { Button,message } from 'antd';
import './App.css'

export default class App extends Component {
    state = {
        values:null
    }


    click = () => {
        message.success('click this button')
    }


    render() {
        return (
            <div>
                <input onChange={this.inputs} ref={c=>{this.inputs1=c}} type="text"/>
                <br/><br/><br/>
                <div>{this.state.values}</div>
                <Hello/>
                <Button type="primary" onClick={this.click}>Button</Button>
            </div>
        )
    }
}
