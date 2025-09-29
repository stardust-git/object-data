import React from 'react';
import styles from './index.less';
import ConsumptionBillView from "@/components/消费账单视图";

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <ConsumptionBillView/>
    </div>
  );
}
