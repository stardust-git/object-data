import {WalletManagementModel, WalletType} from "./types";

const walletManagement: WalletManagementModel[] = [
  {
    createTime: '2025-11-01',
    countYM: '2025-10',
    data: [
      {
        type: WalletType.支付宝_余额宝,
        price: 1588,
      },
      {
        type: WalletType.支付宝_银行存款,
        price: 2000,
      },
      {
        type: WalletType.微信_零钱通,
        price: 7574,
      },
      {
        type: WalletType.招商银行_理财,
        price: 169701,
      },
      {
        type: WalletType.招商银行_朝朝宝,
        price: 44732,
      },
      {
        type: WalletType.网商银行_理财,
        price: 30128,
      },
      {
        type: WalletType.网商银行_余利宝,
        price: 1910
      }
    ]
  },
  {
    createTime: '2025-10-01',
    countYM: '2025-09',
    data: [
      {
        type: WalletType.支付宝_余额宝,
        price: 1582,
      }, {
        type: WalletType.支付宝_银行存款,
        price: 2000,
      }, {
        type: WalletType.微信_零钱通,
        price: 5149,
      }, {
        type: WalletType.招商银行_理财,
        price: 169325,
      }, {
        type: WalletType.招商银行_朝朝宝,
        price: 18660,
      }, {
        type: WalletType.兴业银行_理财,
        price: 31325,
      }, {
        type: WalletType.网商银行_理财,
        price: 30083,
      }, {
        type: WalletType.网商银行_余利宝,
        price: 1913
      }
    ]
  }
]

export default walletManagement

