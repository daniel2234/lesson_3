// Question 4
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);


//A deep copy makes a duplicate of every item in an existing array or object. In particular, it creates completely new instances of any subarrays or subobjects in the source object. If we performed a deep copy on arr1, we would have two different arrays as well as four separate objects.


//A shallow copy only makes a duplicate of the outermost values in an array or object. If we perform a shallow copy on arr1, we end up with two different arrays, but we still only have one occurrence each of { first: 42 } and { second: 'value2' }. In this case, both arr1[0] and arr2[0] point to the same object in memory. Likewise, arr1[1] and arr2[1] point to the { second: 'value2' } object.

// arr1[0] and arr2[0] point to the same object, { first: "value1" }. Thus, when we replace the value of the first property by using arr2[0].first, the change shows up in arr1 as well. In the end, we get the following results:

// arr1                                                       arr2
// +---------+             +---------------------+              +---------+
// | pointer | ----------> |    { first: 42 }    | <----------- | pointer |
// +---------+             +---------------------+              +---------+
// | pointer | -----+                                    +----- | pointer |
// +---------+      |                                    |      +---------+
// |    3    |      |      +----------------------+      |      |    3    |
// +---------+      +----> | { second: "value2" } | <----+      +---------+
// |    4    |             +----------------------+             |    4    |
// +---------+                                                  +---------+
// |    5    |                                                  |    5    |
// +---------+                                                  +---------+