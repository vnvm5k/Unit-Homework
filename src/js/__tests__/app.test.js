import healthIndicator from '../app';


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

test('empty value', () => {
  const result4 = healthIndicator({ name: 'Маг', health: -1 });
  expect(result4).toBe('');
});
