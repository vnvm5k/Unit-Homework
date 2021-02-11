import healthIndicator, {arraySort} from '../app';


//Task 1

test('health Indicator', () => {
  let result = healthIndicator({name: 'Маг', health: 51});
  expect(result).toBe('healthy');
});

test('health Indicator1', () => {
  let result1 = healthIndicator({name: 'Маг', health: 49});
  expect(result1).toBe('wounded');
});


test('health Indicator2', () => {
  let result2 = healthIndicator({name: 'Маг', health: 16});
  expect(result2).toBe('wounded');
});

test('health Indicator3', () => {
  let result3 = healthIndicator({name: 'Маг', health: 14});
  expect(result3).toBe('critical');
});


test('health Indicator4', () => {
  let result4 = healthIndicator({name: 'Маг', health: -1});
  expect(result4).toBe('critical');
});



//Task 2

let array = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  ];



test('sort1', () => {
	let result = arraySort(array);
  expect(result[0]).toEqual({name: 'маг', health: 100});
});

test('sort2', () => {
	let result = arraySort(array);
  expect(result[1]).toEqual({name: 'лучник', health: 80});
});

test('sort3', () => {
	let result = arraySort(array);
  expect(result[2]).toEqual({name: 'мечник', health: 10});
});

test('sort4', () => {
	let result = arraySort(array);
  expect(result[2]).toEqual({name: 'нежить', health: -100});
});