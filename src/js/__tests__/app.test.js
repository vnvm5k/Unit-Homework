import healthIndicator, { arraySort } from '../app';


// Task 1

test('health Indicator', () => {
  const result = healthIndicator({ name: 'Маг', health: 51 });
  expect(result).toBe('healthy');
});

test('health Indicator1', () => {
  const result1 = healthIndicator({ name: 'Маг', health: 49 });
  expect(result1).toBe('wounded');
});


test('health Indicator2', () => {
  const result2 = healthIndicator({ name: 'Маг', health: 16 });
  expect(result2).toBe('wounded');
});

test('health Indicator3', () => {
  const result3 = healthIndicator({ name: 'Маг', health: 14 });
  expect(result3).toBe('critical');
});




// Task 2

const array = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];


test('sort1', () => {
  const result = arraySort(array);
  expect(result[0]).toEqual({ name: 'маг', health: 100 });
});

test('sort2', () => {
  const result = arraySort(array);
  expect(result[1]).toEqual({ name: 'лучник', health: 80 });
});

test('sort3', () => {
  const result = arraySort(array);
  expect(result[2]).toEqual({ name: 'мечник', health: 10 });
});

