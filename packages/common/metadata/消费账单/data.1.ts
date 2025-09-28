import {ConsumptionType, WalletAddress} from "./types";

/**
 * 消费账单01
 */
const consumptionBill: {
  createTime: string; // 创建时间
  billDate: string;   // 账单日期，通常在下月初统计上月的消费，并补充基础消费钱包
  baseBill: { // 消费明细
    type: ConsumptionType; // 消费类型
    price: number; // 金额
    wallet: WalletAddress; // 钱包地址
  }[];
  largeBill: {
    name: string; // 大账单名称
    price: number; // 大账单金额
    desc: string; // 大账单描述
  }[]
}[] = [
  {
    createTime: "2025-09-28",
    billDate: "2025-09-01",
    baseBill: [
      {
        type: ConsumptionType.娱乐会员,
        price: 100,
        wallet: WalletAddress.支付宝_小荷包_娱乐会员,
      },
      {
        type: ConsumptionType.旅游经费,
        price: 100,
        wallet: WalletAddress.支付宝_小荷包_旅游经费,
      },
      {
        type: ConsumptionType.买衣服,
        price: 100,
        wallet: WalletAddress.支付宝_小荷包_买衣服,
      },
      {
        type: ConsumptionType.吃饭,
        price: 2000,
        wallet: WalletAddress.兴业银行_天天宝,
      },
      {
        type: ConsumptionType.日常开销,
        price: 400,
        wallet: WalletAddress.兴业银行_天天宝,
      },
    ],
    largeBill: [],
  }
]

export default consumptionBill;