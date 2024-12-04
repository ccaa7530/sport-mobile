export enum SocketEnum {
  /**
   * 订单状态变更
   */
  OrderStatus = 2,
  /**
   * 事件变更
   */
  Events = 6,
  /**
   * 比分变更
   */
  Score = 7,
  /**
   * 心跳
   */
  Heart = 8,
  /**
   * 比赛状态变更
   */
  MatchStatus = 9,
  /**
   * 盘口销售状态变更
   */
  HandicapSale = 13,
  /**
   * 盘口赔率变更
   */
  HandicapOdds = 14,
  /**
   * 预约cashout订单状态变更
   */
  SubscribeCashout = 17,
  /**
   * cashout订单状态变更
   */
  Cashout = 18,
  /**
   * 开赛时间变更
   */
  MatchBeginTime = 19,
  /**
   * 比分推送， 赛事状态推送，赛事阶段推送
   */
  MatchDetail = 20,
}
