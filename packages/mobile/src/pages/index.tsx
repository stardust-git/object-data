import React from 'react';
import styles from './index.less';
import {testUtil} from "@pinecore/common/utils/test.util";
import {environment} from "@pinecore/common/environment";

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button onClick={() => {
        testUtil();
        console.log(environment, 'environment');
      }}>测试
      </button>
    </div>
  );
}
