import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;

  // synchronous beforeEach
  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  it('should be instanciated', () => {
    expect(filterPipe).toBeDefined();
  });

  it('should return empty array if no items given', () => {
    const items = null;

    const filtered = filterPipe.transform(items, 'Issue count', '5');

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
  });

  it('should return items if no field is given', () => {
    const items = [];
    items.push({ ['Issue count']: '5' });

    const filtered = filterPipe.transform(items, null, '5');

    expect(filtered).toEqual(items);
  });

  it('should filter correctly', () => {
    const items = [];

    items.push({ ['Issue count']: '5' });
    items.push({ ['Issue count']: '7' });
    items.push({ ['Issue count']: '1' });

    const filtered = filterPipe.transform(items, 'Issue count', '5');

    expect(filtered.length).toBe(1);
  });
});