beforeEach(function() {
  spyOn(window, "swap").and.callThrough();
});

describe("Bubble Sort", function() {
  // afterEach(function() {
  //   arr = [];
  // });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sorts an array of numbers in ascending order", function() {
    expect(bubbleSort([6, 9, 1, 3])).toEqual([1, 3, 6, 9]);
  });
  it("swap is called twice", function() {
    bubbleSort([6, 9, 1, 3]);
    expect(window.swap.calls.count()).toEqual(4);
  });
  it("returns a single item if array length was 1", function() {
    expect(bubbleSort([3])).toEqual([3]);
  });
});
