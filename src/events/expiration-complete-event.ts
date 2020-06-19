import { Subjects } from './subjects'

export interface ExpirationCompleteEvent {
	subject: Subjects.expirationComplete
	data: ExpirationCompleteEventData
}

export interface ExpirationCompleteEventData {
	orderId: string
}
