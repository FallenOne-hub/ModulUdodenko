import IAtributes from './atributes.interface'
import Militia from './militia'

export default class Orks implements IAtributes {
	cost: number
	speed: number
	feed: Militia

	constructor(feed: Militia) {
		this.cost = 3
		this.speed = 13
		this.feed = feed
	}
}