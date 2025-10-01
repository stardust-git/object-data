export enum WalletType {
  支付宝_余额宝 = '支付宝_余额宝',
  支付宝_银行存款 = '支付宝_银行存款',
  招商银行_理财 = '招商银行_理财',
  招商银行_朝朝宝 = '招商银行_朝朝宝',
  兴业银行_理财 = '兴业银行_理财',
  网商银行_理财 = '网商银行_理财',
  网商银行_余利宝 = '网商银行_余利宝',
  微信_零钱通 = '微信_零钱通',
}

export enum WalletStorage {
  支付宝 = '支付宝',
  微信 = '微信',
  招商银行 = '招商银行',
  兴业银行 = '兴业银行',
  网商银行 = '网商银行',
}

export const WalletInfoMap: Record<WalletType, {
  desc: string;
  storage: WalletStorage;
  update?: {
    desc: string;
    time: string;
  }[]
}> = {
  [WalletType.兴业银行_理财]: {desc: "", storage: WalletStorage.兴业银行},
  [WalletType.微信_零钱通]: {desc: "", storage: WalletStorage.微信},
  [WalletType.招商银行_朝朝宝]: {desc: "", storage: WalletStorage.招商银行},
  [WalletType.招商银行_理财]: {desc: "", storage: WalletStorage.招商银行},
  [WalletType.支付宝_余额宝]: {desc: "", storage: WalletStorage.支付宝},
  [WalletType.支付宝_银行存款]: {desc: "", storage: WalletStorage.支付宝},
  [WalletType.网商银行_余利宝]: {desc: "", storage: WalletStorage.网商银行},
  [WalletType.网商银行_理财]: {desc: "", storage: WalletStorage.网商银行}
}


export interface WalletManagementModel {
  createTime: string; // 创建时间
  countTime: string; // 统计的时间，一般是统计上一个月的数据
  wallets: { // 钱包
    type: WalletType;
    price: number;
  }[];
}

