/**
 * 消费类型
 */
export enum ConsumptionType {
  娱乐会员 = '娱乐会员',
  旅游经费 = '旅游经费',
  买衣服 = '买衣服',
  吃饭 = '吃饭',
  日常开销 = '日常开销',
  住房月供 = '住房月供',
  社交 = '社交',
}

export interface ConsumptionTypeMapModel {
  description: string; // 消费类型描述
  necessary: boolean; // 是否必要消费
  autoAdd: boolean; // 是否自动添加
  updateLog?: {
    updateTime: string; // 更新时间
    updateContent: string; // 更新内容
  }[]; // 更新日志
}

/**
 * 消费类型相关说明
 */
export const ConsumptionTypeMap: Record<ConsumptionType, ConsumptionTypeMapModel> = {
  [ConsumptionType.社交]: {
    necessary: false,
    autoAdd: false,
    description: '用于社交相关的消费',
  },
  [ConsumptionType.住房月供]: {
    necessary: true,
    autoAdd: true,
    description: '每月的住房月供',
  },
  [ConsumptionType.娱乐会员]: {
    necessary: false,
    autoAdd: true,
    description: '用于购买线上或线下的娱乐消费',
  },
  [ConsumptionType.旅游经费]: {
    necessary: false,
    autoAdd: true,
    description: '攒旅游经费',
  },
  [ConsumptionType.买衣服]: {
    necessary: true,
    autoAdd: true,
    description: '攒衣服经费',
  },
  [ConsumptionType.吃饭]: {
    description: "吃饭消费，每天生活费不超过50，每周一次两人大餐多花200",
    autoAdd: false,
    necessary: true,
  },
  [ConsumptionType.日常开销]: {
    description: "水电气、油盐酱醋、生活家具、宽带话费等日常开销",
    necessary: false,
    autoAdd: false,
  }
}

/**
 * 钱包地址
 */
export enum WalletAddress {
  支付宝_小荷包_娱乐会员 = '支付宝_小荷包_娱乐会员',
  支付宝_小荷包_旅游经费 = '支付宝_小荷包_旅游经费',
  支付宝_小荷包_买衣服 = '支付宝_小荷包_买衣服',
  兴业银行_天天宝 = '兴业银行_天天宝',
  支付宝_小荷包_住房月供 = '支付宝_小荷包_住房月供',
}

/**
 * 消费账单类型
 */
export interface ConsumptionItemModel {
  createTime: string; // 创建时间
  billDate: string;   // 统计的账单日期
  preBill: { // 预支出的消费账单
    type: ConsumptionType; // 消费类型
    price: number; // 金额
    wallet: WalletAddress; // 钱包地址
  }[];
  extraBill: { // 额外的大账单
    time: string; // 大账单时间
    type: ConsumptionType; // 大账单类型
    name: string; // 大账单名称
    price: number; // 大账单金额
    desc?: string; // 大账单描述
  }[]
}