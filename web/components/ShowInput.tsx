import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import JSONTree from "react-json-tree";

export default class ShowInput extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="INPUT" bordered={false}>
              <p>InputData1:</p>
              <JSONTree
                hideRoot={true}
                shouldExpandNode={() => false}
                labelRenderer={([key]) => <strong>{key}</strong>}
                valueRenderer={(raw) => <em>{raw}</em>}
                data={{ in: { a: [1, 2] }, data: 222 }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
