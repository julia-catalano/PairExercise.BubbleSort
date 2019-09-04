describe('Split Array Function', function() {

  it('handles an empty array', function() {
    expect(split([])).toEqual([])
  })
  it('handles an array with one element', function() {
    expect(split([4])).toEqual([4])
  })
  it('is able to split an array into two halves', function() {
    expect(split([5, 8, 10, 12])).toEqual([[5, 8], [10, 12]])
  })
  it('is able to split an odd array into two halves', function() {
    expect(split([3, 7, 4, 9, 6])).toEqual([[3, 7, 4], [9, 6]])
  })
})

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([3, 7, 9], [4, 6, 8])).toEqual([3, 4, 6, 7, 8, 9])
  })
})
