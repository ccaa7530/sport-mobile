/**
 * 订单状态
 */
export enum OrderStatusEnum {
  /**
   * 待确认
   */
  Created = 0,
  /**
   * 确认中
   */
  Confirming = 1,
  /**
   * 已拒绝
   */
  Rejected = 2,
  /**
   * 已取消
   */
  Canceled = 3,
  /**
   * 已确认
   */
  Confirmed = 4,
  /**
   * 已结算
   */
  Settled = 5,
  /**
   * 预约提前结算中
   */
  ReserveCashout = 101,
  /**
   * 提前结算
   */
  Cashout = 102,
}
