import React from 'react';
import styles from './index.less';
import BillManageView from "@/components/账单管理视图";

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <BillManageView/>
    </div>
  );
}
