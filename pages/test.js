// Given the following structure of Item Object, please write a function to organize an array of items based on category:

// Item {
//   itemName // String
//   itemNumber // Number
//   category // String
// }

//e.g.

const item1 = {
  itemName: "Apple",
  itemNumber: 1,
  category: "Fruit"
}

const item2 = {
  itemName: "Pork Rib",
  itemNumber: 2,
  category: "Meat"
}

const item3 = {
  itemName: "Banana",
  itemNumber: 3,
  category: "Fruit"
}


/*
Input: [item1, item2, item3]
Output: {
  "Fruit": [item1, item3],
  "Meat": [item2],
  ...
}
*/

/**
 * @param {Item[]} items
 * @return {"category": Item[], ...}
 **/
var itemsArr = [ item1, item2, item3];
var getCategory2Item = function(itemsArr) {

    var output = {

    };


    itemsArr.map((item) => {

    //    if(output.category){

    //    }

    //    output[category] = itemName;

    console.log('====================================');
    console.log(item);
    console.log('====================================');

        // if(category === "Fruit"){
        //     output.Fruit = itemName;
        // }else{
        //     output.Meat = itemName;
        // }else{

        // }
    });

};

getCategory2Item(itemsArr);
