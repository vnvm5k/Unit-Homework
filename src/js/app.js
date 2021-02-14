export default function healthIndicator(object) {
  let state = '';
  if (object.health > 0 && object.health < 15) {
    state = 'critical';
  } if (object.health >= 15 && object.health <= 50) {
    state = 'wounded';
  } if (object.health > 50) {
    state = 'healthy';
  }
  return state;
}


export function arraySort(array) {
  return array.sort((prev, next) => next.health - prev.health);
}
