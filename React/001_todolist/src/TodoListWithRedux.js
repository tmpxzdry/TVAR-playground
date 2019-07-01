import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();

  }

  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input value={this.state.inputVal} placeholder="todo info" style={{ width: '200px' }} />
          <Button type="dashed">Submit</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '270px' }}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>

    )
  }
}

export default TodoList;