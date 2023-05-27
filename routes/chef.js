const route = require("express").Router();
const fs = require("fs/promises");
const path = require("path");

/**
 * Get all chefs 
 */
route.get("/", async (req, res) => {
  try {
    let chefList = await fs.readFile(
      path.join(path.dirname(require.main.filename), "fakeDB", "chef.json")
    );
    chefList = JSON.parse(chefList);
    res.status(200).json(chefList);
  } catch (error) {
    console.log(error);
  }
});

/**
 * get specific chef details  
 */
route.get("/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
      let chefList = await fs.readFile(
        path.join(path.dirname(require.main.filename), "fakeDB", "chef.json")
      );
      chefList = JSON.parse(chefList);
  
      // binary search
      let low = chefList[0]._id;
      let high = chefList[chefList.length - 1]._id;
      let mid = parseInt((high + low) / 2);
      for (;;) {
        if (id === mid) {
          console.log(chefList[id - 1]);
          break;
        } else if (id > mid) {
          low = mid + 1;
          mid = parseInt((high + low) / 2);
        } else if (id < mid) {
          high = mid - 1;
          mid = parseInt((high + low) / 2);
        }
  
        // Not found condition
        if (low > high) {
          res.status(404).json({ message: "Chef Not Found" });
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  });


module.exports = route;
