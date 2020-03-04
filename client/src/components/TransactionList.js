import React, { useContext, useEffect } from 'react'
import { Typography, Button } from 'antd';
import { List } from 'antd';

import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'


const {   Text } = Typography;

export const TransactionList = () => {
  const { transactions, deleteTransaction , getTransactions} = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
        <List
          size="large"
          header={<div>History</div>}
          bordered
          dataSource={transactions}
          renderItem={item => (
            <List.Item>
              <Text style={item.amount < 0 ? {color: 'red', fontSize:'20px'} : {color:'green', fontSize:'20px'}}>
          {numberWithCommas(item.text)}</Text> 
          <Text style= {{fontSize:'20px'}} >{item.amount < 0 ? ' -$' : '+$'}{numberWithCommas(Math.abs(item.amount))}</Text>  {'  '}
          <Button  size='small' onClick={() => deleteTransaction(item._id)} type="danger">x</Button>
          </List.Item>  
          )}
        />
    </>
  )
}
