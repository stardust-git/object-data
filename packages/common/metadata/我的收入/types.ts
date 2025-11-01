import {BillRecordModel} from "../../models/metadata.model";

export enum IncomeType {
  工资 = '工资',
  绩效 = '绩效',
  理财 = '理财',
}

export type IncomeManagementModel = BillRecordModel<{
  type: IncomeType;
  time: string;
  name: string;
  price: number;
  desc?: string;
}>

