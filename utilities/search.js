const binarySearch = (low, high, search) => {
  if (typeof search == "number" && !Number.isNaN(search)) {
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
  } else {
    throw new Error("search element is not a number");
  }
};

module.exports = binarySearch;
