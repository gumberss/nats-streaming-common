/**
 * Here you must define all the subjects that
 * exists in your microsservice world as you
 *  can see the examples below
 */
export enum Subjects {
	TicketCreated = 'ticket:created',
	TicketUpdated = 'ticket:updated',
	OrderCreated = 'order:created',
	OrderCancelled = 'order:cancelled',
	OrderUpdated = 'order:updated',
	expirationComplete = 'expiration:complete',
	PaymentCreated = 'payment:created',
}
