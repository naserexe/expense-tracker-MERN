import React,{useState, useContext} from 'react'
import { Form, Input, Button} from 'antd';
import {Typography} from 'antd'
import {GlobalContext} from '../context/GlobalState';

const { Title} = Typography;

export const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(500);

  const onSubmit = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  return (
    <>
    <Title level={3}>Add Transaction</Title>
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        label="Text "
        name="text"
        rules={[{ required: true, message: 'Please add some text!' }]}
      >
        <Input value={text} onChange={(e) => setText(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Please add amount!' }]}
      >
      <Input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}
