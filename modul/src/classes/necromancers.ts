import { ArmourType } from './armourType.enum'
import IAtributes from './atributes.interface'
import ILightArmour from './lightArmour.interface'
import Militia from './militia'

export default class Necromancers implements IAtributes, ILightArmour {
	cost: number
	speed: number
	armour: ArmourType.LIGHT_ARMOUR
	body: Militia

	constructor(body: Militia) {
		this.cost = 5
		this.speed = 15
		this.armour = ArmourType.LIGHT_ARMOUR
		this.body = body
		if (body.homeguardsman === 'ALIVE') this.cost += 1
	}
}