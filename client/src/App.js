import React from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';
import {Balance} from './components/Balance'

import './App.css';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState'

const { Header, Content, Footer } = Layout;
const {  Title } = Typography;

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo">
            <Title level={3} type="warning">Expense Tracker App</Title>
          </div>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', margin: 'auto' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 500 , marginTop:50}}>
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
            <hr/>
            <AddTransaction/>
          </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Expense Tracker ©2020 Created by Abdullah Naser</Footer>
    </Layout>
  </GlobalProvider>
  );
}

export default App;