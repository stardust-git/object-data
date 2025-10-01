/**
 * 账单统计数据模型
 */
export interface BillRecordModel<T> {
  createTime: string; // 创建时间
  countYM: string; // 统计年月 YYYY-MM，一般是统计上一个月的数据，也可能是当月数据
  data: T[];
}