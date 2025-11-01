import {InvestManagementModel, InvestType} from "./types";

const InvestManagement: InvestManagementModel[] = [
  {
    type: InvestType.刘宇航理财,
    startTime: '2025-10-15',
    endTime: null,
    interest: 0,
    principal: 160000,
  },
  {
    type: InvestType.刘宇航理财,
    startTime: '2025-9-11',
    endTime: '2025-10-15',
    interest: 2200,
    principal: 160000,
  },
  {
    type: InvestType.刘宇航理财,
    principal: 120000,
    startTime: '2025-8-15',
    endTime: '2025-9-10',
    interest: 1800
  }
]

export default InvestManagement

