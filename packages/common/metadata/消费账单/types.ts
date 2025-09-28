/**
 * 消费类型
 */
export enum ConsumptionType {
  娱乐会员 = '娱乐会员',
  旅游经费 = '旅游经费',
  买衣服 = '买衣服',
  吃饭 = '吃饭',
  日常开销 = '日常开销',
}

/**
 * 消费类型相关说明
 */
export const ConsumptionTypeMap: Record<ConsumptionType, {
  description: string; // 消费类型描述
  necessary: boolean; // 是否必要消费
  autoAdd: boolean; // 是否自动添加
  updateLog?: {
    updateTime: string; // 更新时间
    updateContent: string; // 更新内容
  }[]; // 更新日志
}> = {
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
}