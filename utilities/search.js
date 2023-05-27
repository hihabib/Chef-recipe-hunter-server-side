const binarySearch = (low, high, search) => {
  //   let low = chefList[0]._id;
  //   let high = chefList[chefList.length - 1]._id;
  let mid = parseInt((high + low) / 2);
  for (;;) {
    if (search === mid) {
      return { index: search - 1 };
    } else if (search > mid) {
      low = mid + 1;
      mid = parseInt((high + low) / 2);
    } else if (search < mid) {
      high = mid - 1;
      mid = parseInt((high + low) / 2);
    }

    // Not found condition
    if (low > high) {
      return { error: "Not Found" };
    }
  }
};

module.exports = binarySearch;
