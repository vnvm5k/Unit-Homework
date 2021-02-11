export default function healthIndicator(object) {
	if (object.health > 0 && object.health < 15) {
		return 'critical'
	} else if(object.health >= 15 && object.health <= 50) {
		return 'wounded'
	} else if (object.health > 50) {
		return 'healthy' 
	}
}


export function arraySort(array) {

	return array.sort((prev, next) => next.health - prev.health);
	 
}

