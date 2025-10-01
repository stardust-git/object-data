import {IncomeManagementModel, IncomeType} from "./types";

const incomeManagement: IncomeManagementModel[] = [
  {
    createTime: '2025-10-01',
    countTime: '2025-09-01',
    income: [
      {
        type: IncomeType.工资,
        time: '2025-10-01',
        name: '10月份工资',
        price: 11147,
      },
      {
        type: IncomeType.工资,
        time: '2025-10-01',
        name: '通讯补贴',
        price: 300,
      },
      {
        type: IncomeType.工资,
        time: '2025-09-28',
        name: '国庆节福利',
        price: 1800,
      },
      {
        type: IncomeType.工资,
        time: '2025-09-28',
        name: '中秋节福利',
        price: 1000,
      },
      {
        type: IncomeType.工资,
        time: '2025-09-28',
        name: '国庆节日费',
        price: 1800,
      },
      {
        type: IncomeType.工资,
        time: '2025-09-08',
        name: '8月份工资',
        price: 11257,
      },
      {
        type: IncomeType.工资,
        time: '2025-09-08',
        name: '通讯补贴',
        price: 300,
      },
    ]
  }
]

export default incomeManagement

