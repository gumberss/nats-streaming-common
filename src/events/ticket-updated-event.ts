/**
 * In this file, you must define the interfaces
 * of your event (one for each event)
 */

import { Subjects } from './subjects'

export interface TicketUpdatedEvent {
	subject: Subjects.TicketUpdated
	data: TicketUpdateEventData
}

export interface TicketUpdateEventData {
	id: string
	title: string
  price: number
	userId: string
	version: number
}
