import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '购物车',
          goods: [
            {id: 1, name: '玩具', price: 1000, count: 0},
            {id: 2, name: '房产', price: 1000000, count: 0}
          ]
        }
      }
    
      minus(item, index) {
        if (item.count > 0) {
          this.setState({
            goods: [...this.state.goods.slice(0, index), Object.assign(item, {count: item.count - 1}), ...this.state.goods.slice(index + 1)]
          });
        }
      }
    
      plus(item, index) {
        this.setState({
          goods: [...this.state.goods.slice(0, index), Object.assign(item, {count: item.count + 1}), ...this.state.goods.slice(index + 1)]
        });
      }
    
      render() {
        return (<table>
          <thead>
            <tr>
              <th>名称</th>
              <th>价格</th>
              <th>数量</th>
              <th>金额</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.goods.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => this.minus(item, index)}>-</button>
                      <span>{item.count}</span>
                      <button onClick={() => this.plus(item, index)}>+</button>
                    </td>
                    <td>{item.price * item.count}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>)
      }
}
