import React from 'react';
import consumptionBillData from "@pinecore/common/metadata/消费账单/index";
import incomeManagementData from "@pinecore/common/metadata/我的收入";
import styles from './index.less';
import {Card} from "antd";
import walletManagementData from "@pinecore/common/metadata/钱包管理";

const RenderCountYM = ['2025-09'];

const sumConsumptionData = (countYM: string) => {
  const target = consumptionBillData.find(item => item.countYM === countYM);
  if (!target) {
    return '没有找到账单信息'
  }
  const preBill = target.preBill.reduce((pre, cur) => pre + cur.price, 0);
  const extraBill = target.extraBill.reduce((pre, cur) => pre + cur.price, 0);
  return preBill + extraBill + '元';
}

const sumIncomeData = (countYM: string) => {
  const target = incomeManagementData.find(item => item.countYM === countYM);
  if (!target) {
    return '没有找到账单信息'
  }
  return target.data.reduce((pre, cur) => pre + cur.price, 0) + '元';
}

const sumAllData = (countYM: string) => {
  const target = walletManagementData.find(item => item.countYM === countYM);
  if (!target) {
    return '没有找到账单信息'
  }
  return target.data.reduce((pre, cur) => pre + cur.price, 0) + '元';
}

const BillManageView = () => {
  return (
    <div className={styles.consumptionBillView}>
      {
        RenderCountYM.map((countYM) => (
          <Card title="9月账单统计" style={{width: 300}}>
            <div>总额：{sumAllData(countYM)}</div>
            <div>收入：{sumIncomeData(countYM)}</div>
            <div>消费：{sumConsumptionData(countYM)}</div>
            <div>投资：</div>
          </Card>
        ))
      }
    </div>
  );
};

export default BillManageView;