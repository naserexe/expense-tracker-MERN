import React, {useContext} from 'react'
import { Card,Row, Col } from 'antd';
import { Typography } from 'antd';
import { GlobalContext } from '../context/GlobalState'
import {numberWithCommas} from '../utils/format'

const { Text } = Typography;

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0).toFixed(2);

  return (
    <Row>
      <Col span={12}>
        <Card title="Income"  bordered={true}>
          <Text style={{color: '#00a854',fontSize:'18px'}}>${numberWithCommas(income)}</Text>
        </Card>
      </Col>

      <Col span={12}>
        <Card title="Expense" bordered={true}>
          <Text style={{color: '#f04134', fontSize:'18px'}}>${numberWithCommas(Math.abs(expense))}</Text>
        </Card>
      </Col>
  </Row>
  )
}
