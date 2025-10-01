import {ConsumptionItemModel, ConsumptionType, WalletAddress} from "./types";

/**
 * 消费账单01
 */
const consumptionBill: ConsumptionItemModel[] = [
  {
    createTime: "2025-10-01",
    billDate: "2025-10-01",
    preBill: [
      {
        type: ConsumptionType.住房月供,
        price: 2000,
        wallet: WalletAddress.支付宝_小荷包_住房月供,
      },
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
    extraBill: [],
  },
  {
    createTime: "2025-09-28",
    billDate: "2025-09-01",
    preBill: [
      {
        type: ConsumptionType.住房月供,
        price: 2000,
        wallet: WalletAddress.支付宝_小荷包_住房月供,
      },
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
    extraBill: [{
      time: '2025-9-21',
      price: 240,
      type: ConsumptionType.娱乐会员,
      name: 'WPS升级大会员',
      desc: 'WPS升级大会员10年'
    },{
      time: '2025-9-20',
      price: 480,
      type: ConsumptionType.社交,
      name: '国庆回家高铁票',
      desc: '两个人，往返重庆和成都'
    }],
  }
]

export default consumptionBill;