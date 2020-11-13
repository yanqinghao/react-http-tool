import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import JSONTree from "react-json-tree";

export default class ShowOutput extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="OUTPUT" bordered={false}>
              <p>InputData1:</p>
              <JSONTree
                hideRoot={true}
                shouldExpandNode={() => false}
                labelRenderer={([key]) => <strong>{key}</strong>}
                valueRenderer={(raw) => <em>{raw}</em>}
                data={'output'}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
