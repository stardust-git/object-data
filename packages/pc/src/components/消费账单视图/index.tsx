import React from 'react';
import consumptionBillData from "@pinecore/common/metadata/消费账单/index";
import moment from "moment";
import {ConsumptionItemModel} from "@pinecore/common/metadata/消费账单/types";
import styles from './index.less';

const sumData = (data: ConsumptionItemModel['preBill']) => {
  return data.reduce((pre, cur) => {
    return pre + cur.price;
  }, 0);
}

const sumData2 = (data: ConsumptionItemModel['extraBill']) => {
  return data.reduce((pre, cur) => {
    return pre + cur.price;
  }, 0);
}

const ConsumptionBillView = () => {

  return (
    <div className={styles.consumptionBillView}>
      {
        consumptionBillData.map((bill, index) => {
          return (
            <div key={bill.createTime}>
              <h2>{moment(bill.billDate).format('YY-MM')}</h2>
              <div>
                <span>基础消费：</span>
                <span>{sumData(bill.preBill)}</span>
              </div>
              <div>
                <span>大账单：</span>
                <span>{sumData2(bill.extraBill)}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default ConsumptionBillView;