import { Button } from 'antd'
import React, { Component } from 'react'
import AddItem from './AddItem'

export default class RequestConfig extends Component {
    render() {
        return (
            <div>
                <AddItem />
                <Button>+</Button>
            </div>
        )
    }
}
