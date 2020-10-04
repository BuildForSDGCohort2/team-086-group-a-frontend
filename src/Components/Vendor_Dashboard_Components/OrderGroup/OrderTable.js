import React from 'react';
import OrderTableStyle from './OrderTop.module.css';

export default class OrderTable extends React.Component {
  render() {
    const {table} = OrderTableStyle;
    return (
      <div className={table}>
        <table className={table}>
          <thead>
            <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8767465-7</td>
              <td>Henry KC</td>
              <td>05/30/2020</td>
              <td>Delivered</td>
              <td>
                <span><i className="fal fa-ellipsis-v"></i></span>
                <span><i className="fas fa-pen-square"></i></span>
              </td>
            </tr>
            
            <tr>
              <td>8767465-7</td>
              <td>Henry KC</td>
              <td>05/30/2020</td>
              <td>Pending</td>
              <td>
                <span><i className="fal fa-ellipsis-v"></i></span>
                <span><i className="fas fa-pen-square"></i></span>
              </td>
            </tr>
            
            <tr>
              <td>8767465-7</td>
              <td>Henry KC</td>
              <td>05/30/2020</td>
              <td>Refund</td>
              <td>
                <span><i className="fal fa-ellipsis-v"></i></span>
                <span><i className="fas fa-pen-square"></i></span>
              </td>
            </tr>
            
            <tr>
              <td>8767465-7</td>
              <td>Henry KC</td>
              <td>05/30/2020</td>
              <td>Pending</td>
              <td>
                <span><i className="fal fa-ellipsis-v"></i></span>
                <span><i className="fas fa-pen-square"></i></span>
              </td>
            </tr>
            
            <tr>
              <td>8767465-7</td>
              <td>Henry KC</td>
              <td>05/30/2020</td>
              <td>Delivered</td>
              <td>
                <span><i className="fal fa-ellipsis-v"></i></span>
                <span><i className="fas fa-pen-square"></i></span>
              </td>
            </tr>
            
            <tr>
              <td>8767465-7</td>
              <td>Henry KC</td>
              <td>05/30/2020</td>
              <td>Delivered</td>
              <td>
                <span><i className="fal fa-ellipsis-v"></i></span>
                <span><i className="fas fa-pen-square"></i></span>
              </td>
            </tr>
            
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    )
  }
}

