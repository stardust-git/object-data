import React from 'react';
import consumptionBillData from "@pinecore/common/metadata/消费账单/index";
import incomeManagementData from "@pinecore/common/metadata/我的收入";
import styles from './index.less';
import {Card} from "antd";
import walletManagementData from "@pinecore/common/metadata/钱包管理";
import InvestManagementData from "@pinecore/common/metadata/投资管理";
import moment from "moment";

const RenderCountYM = ['2025-09', '2025-10'];

const sumConsumptionData = (countYM: string) => {
  const target = consumptionBillData.find(item => item.countYM === countYM);
  if (!target) {
    return NaN;
  }
  const preBill = target.preBill.reduce((pre, cur) => pre + cur.price, 0);
  const extraBill = target.extraBill.reduce((pre, cur) => pre + cur.price, 0);
  return preBill + extraBill;
}

const sumIncomeData = (countYM: string) => {
  const target = incomeManagementData.find(item => item.countYM === countYM);
  if (!target) {
    return 0;
  }
  return target.data.reduce((pre, cur) => pre + cur.price, 0);
}

const sumAllData = (countYM: string) => {
  const target = walletManagementData.find(item => item.countYM === countYM);
  if (!target) {
    return NaN;
  }
  return target.data.reduce((pre, cur) => pre + cur.price, 0);
}

const sumInvestInterestData = (countYM: string) => {
  const targetList = InvestManagementData.filter(item => {
    if (!item.endTime) {
      return false;
    }
    return moment(item.endTime).format('YYYY-MM') === countYM;
  });
  if (targetList.length === 0) {
    return 0;
  }
  return targetList.reduce((pre, cur) => pre + cur.interest, 0);
}

const sumInvestPrincipalData = () => {
  const targetList = InvestManagementData.filter(item => {
    return !item.endTime;
  });
  return targetList.reduce((pre, cur) => pre + cur.principal, 0);
}

const BillManageView = () => {

  const renderCard = (countYM: string) => {
    const investSum = sumInvestPrincipalData();
    const allData = sumAllData(countYM);
    return (
      <Card title={`${countYM} 账单统计`} style={{width: 300}}>
        <div>可用余额：{allData} 元</div>
        <div>收入：{sumIncomeData(countYM)} 元</div>
        <div>消费：{sumConsumptionData(countYM)} 元</div>
        <div>投资中：{investSum} 元</div>
        <div>当月投资收益：{sumInvestInterestData(countYM)} 元</div>
        <div>总额：{investSum + allData} 元</div>
      </Card>
    )
  }

  return (
    <div className={styles.consumptionBillView}>
      {
        RenderCountYM.map((countYM) => {
          return (
            <div className={styles.billItem}>
              {renderCard(countYM)}
            </div>
          )
        })
      }
    </div>
  );
};

export default BillManageView;