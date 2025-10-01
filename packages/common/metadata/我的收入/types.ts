export enum IncomeType {
  工资 = '工资',
  绩效 = '绩效',
}

export interface IncomeManagementModel {
  createTime: string; // 创建时间
  countTime: string; // 统计的时间，一般是统计上一个月的数据
  income: { // 收入
    type: IncomeType;
    time: string;
    name: string;
    price: number;
    desc?: string;
  }[];
}

