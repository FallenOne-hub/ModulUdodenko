import { ArmourType } from './armourType.enum'
import IAtributes from './atributes.interface'
import ILightArmour from './lightArmour.interface'

type Body = 'DEAD' | 'ALIVE'

const randomBody = (): Body => {
	if (Math.random() < 0.5) {
		return 'DEAD'
	}
	return 'ALIVE'
}

export default class Militia implements IAtributes, ILightArmour {
	cost: number
	speed: number
	armour: ArmourType.LIGHT_ARMOUR
	homeguardsman: Body

	constructor() {
		this.cost = 0
		this.speed = 5
		this.armour = ArmourType.LIGHT_ARMOUR
		this.homeguardsman = randomBody()
	}
}