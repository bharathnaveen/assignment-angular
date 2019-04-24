import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;

  // synchronous beforeEach
  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  it("filter pipe should be instanciated", () => {
    expect(FilterPipe).toBeDefined();
  });

  it("filter pipe should return items if no field is given", () => {
    let items = [];
    items.push({ ['Issue count']: '5' });

    let filtered = filterPipe.transform(items, null, "Issue count");
    expect(filtered).toEqual(items);
  });

  it("filter pipe should filter", () => {
    let items = [];

    items.push({ ['Issue count']: '5' });
    items.push({ ['Issue count']: '7' });
    items.push({ ['Issue count']: '7' });
    items.push({ ['Issue count']: '5' });

    let filtered = filterPipe.transform(items, '7', "Issue count");

    expect(filtered.length).toBe(2);
  });
});