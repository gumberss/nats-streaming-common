export enum OrderStatus {
  /**
   * When the order has been created, but the ticket
   * it is triyng to order has not been reserved
   */
  Created = 'created',
  /**
   * The ticket the order is trying to reserve has already
   * been reserverd, or when the user has cancelled the order
   */
  Cancelled = 'cancelled',
  /**
   * The order has successfully reserved the ticket
   */
  AwaitingPayment = 'await:payment',
  /**
   * The order has reserved the ticket and the 
   * user has provided payment successfully
   */
  Complete = 'complete'
}