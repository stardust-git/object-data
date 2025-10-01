export enum InvestType {
  刘宇航理财 = '刘宇航理财',
}

export type InvestManagementModel = {
  type: InvestType; // 投资类型
  principal: number; // 本金
  startTime: string; // 开始时间
  endTime: string | null; // 结束时间
  interest: number; // 利息
  desc?: string; // 描述
}

