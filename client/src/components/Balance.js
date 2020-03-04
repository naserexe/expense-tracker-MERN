import React,{useContext} from 'react'
import { Typography } from 'antd';
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'

const { Title } = Typography;

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <Title style={{textAlign: 'center'}}>Your Balance</Title>
  <Title level={2} style={{textAlign: 'center'}}>${numberWithCommas(total)}</Title>
    </>
  )
}
