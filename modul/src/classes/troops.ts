import Necromancers from './necromancers'
import Militia from './militia'
import Orks from './orks'

export default class Troops {
	private necromancers: Necromancers[] = []
	private militia: Militia[] = []
	private orks: Orks[] = []

	constructor(num: number) {
		this.create(num)
	}

	private create(num: number) {
		for (let i = 0; i < num; i++) {
			this.militia.push(new Militia())
			this.necromancers.push(new Necromancers(this.militia[i]))
			this.orks.push(new Orks(this.militia[i]))
		}
	}

	private calculate() {
		let cost, speed, bodyNum, feedNum
		cost = speed = bodyNum = feedNum = 0
		for (let e of this.necromancers) {
			cost += e.cost
			speed += e.speed
			if (e.body) bodyNum += 1
		}
		for (let e of this.militia) {
			cost += e.cost
			speed += e.speed
		}
		for (let e of this.orks) {
			cost += e.cost
			speed += e.speed
			if (e.feed) feedNum += 1
		}
		return { cost, speed, bodyNum, feedNum }
	}

	public show(): string {
		const { cost, speed, bodyNum, feedNum } = this.calculate()
		return `Вартість війська: ${cost} ~ Швидкість війська: ${speed} ~
				Кількість тіл: ${bodyNum} ~ Кількість корму: ${feedNum}`
	}
}