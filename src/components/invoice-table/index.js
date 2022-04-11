import React from 'react';
import { Table, Tag, Space } from 'antd';
import './invoice-table.scss';

const InvoiceTable = () => {

    const columns = [
        {
          title: 'Invoice No',
          dataIndex: 'InvoiceNo',
          key: 'Invoice No',
          
        },
        {
          title: 'Customer Name  ',
          dataIndex: 'CustomerName',
          key: 'Customer Name',
        },
        {
          title: 'Date',
          key: 'Date',
          dataIndex: 'Date',
        },
        {
            title: 'Amount',
            key: 'Amount',
            dataIndex: 'Amount',
            render: text => <span className='table-amount'>{text}</span>,
          },
          {
            title: 'Email',
            key: 'Email',
            dataIndex: 'Email',
          },
          {
            title: 'Product ID',
            key: 'ProductID',
            dataIndex: 'ProductID',
          },
          {
            title: 'Status',
            key: 'Status',
            dataIndex: 'Status',
            render: Status => (
              <>
                <span className={Status === "paid" ? 'paid' : Status === "pending" ? 'pending' : 'unpaid' }>{Status}</span>
              </>
            ),
          },
          {
            title: 'Options',
            key: 'Options',
            dataIndex: 'Options',
            render: Option => (
              <>
                <select name="" id="" className='details'>
                  <option value="">Details</option>
                  <option value="">1</option>
                </select>
              </>
            )
          },
      ];
      
      const data = [
        {
          key: '1',
          InvoiceNo: '#214314',
          CustomerName: "Jonathan Downing ",
          Date: '11/10/2020',
          Amount: '£123.00',
          Email: "email1434@domain.com ",
          ProductID : "003145",
          Status: "paid",
          Options: "Options"
        },
        {
            key: '2',
            InvoiceNo: '#215613',
            CustomerName: "Markus Rashford",
            Date: '11/10/2020',
            Amount: '£99.00',
            Email: "email1434@domain.com ",
            ProductID : "003145",
            Status: "pending",
            Options: "Options"
          },
          {
            key: '2',
            InvoiceNo: '#214314',
            CustomerName: "Jonathan Downing ",
            Date: '11/10/2020',
            Amount: '£123.00',
            Email: "email1434@domain.com ",
            ProductID : "003145",
            Status: "unpaid",
            Options: "Options"
          },
          {
            key: '1',
            InvoiceNo: '#214314',
            CustomerName: "Jonathan Downing ",
            Date: '11/10/2020',
            Amount: '£123.00',
            Email: "email1434@domain.com ",
            ProductID : "003145",
            Status: "paid",
            Options: "Options"
          },
          {
              key: '2',
              InvoiceNo: '#215613',
              CustomerName: "Markus Rashford",
              Date: '11/10/2020',
              Amount: '£99.00',
              Email: "email1434@domain.com ",
              ProductID : "003145",
              Status: "pending",
              Options: "Options"
            },
            {
              key: '2',
              InvoiceNo: '#214314',
              CustomerName: "Jonathan Downing ",
              Date: '11/10/2020',
              Amount: '£123.00',
              Email: "email1434@domain.com ",
              ProductID : "003145",
              Status: "unpaid",
              Options: "Options"
            },
        
        
      ];
  return (
    <div className='invoiceData-table p-3 mt-3'>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default InvoiceTable