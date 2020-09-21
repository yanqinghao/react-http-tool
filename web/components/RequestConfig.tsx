import { Button } from 'antd'
import React, { Component } from 'react'
import RequestItem from './RequestItem'

export default class RequestConfig extends Component {
    render() {
        return (
            <div>
                <RequestItem />
                <Button>+</Button>
            </div>
        )
    }
}
