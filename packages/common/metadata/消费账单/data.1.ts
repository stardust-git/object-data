import {ConsumptionItemModel, ConsumptionType, WalletAddress} from "./types";

/**
 * 消费账单01
 */
const consumptionBill: ConsumptionItemModel[] = [
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
        price: 200,
        wallet: WalletAddress.支付宝_小荷包_旅游经费,
      },
      {
        type: ConsumptionType.买衣服,
        price: 200,
        wallet: WalletAddress.支付宝_小荷包_买衣服,
      },
      {
        type: ConsumptionType.吃饭,
        price: 2000,
        wallet: WalletAddress.兴业银行_天天宝,
      },
      {
        type: ConsumptionType.日常开销,
        price: 500,
        wallet: WalletAddress.兴业银行_天天宝,
      },
    ],
    largeBill: [],
  }
]

export default consumptionBill;