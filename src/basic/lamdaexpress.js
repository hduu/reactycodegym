//forEach((item,index)=>{code...})
// foreach dung để duyệt mỗi phần tử mảng, ko duyệt mảng rỗng
const fruit = ["apple", "honda", "sam sung", "hawei"];
fruit.forEach((item, index) => {
  console.log(item, index);
});

const kid = [
  { id: 1, name: "a", age: 12 },
  { id: 2, name: "b", age: 3 },
  { id: 3, name: "c", age: 4 },
  { id: 4, name: "d", age: 18 },
  { id: 5, name: "e", age: 6 },
];
// push đẩy giá trị vào mảng mới
const mau_giao = [];
kid.forEach((item) => {
  if (item.id > 4) {
    mau_giao.push({
      id: item.id,
      name: item.name,
    }); // push đẩy vào cuối mảng
  }
});
console.log(mau_giao);
// map() tạo ra array mới bằng cách gọi 1 hàm cho từng phần tử của mảng cũ,
//  ko làm thay đổi mảng cũ, ko chạy mảng rỗng
const numb = [4, 9, 16, 25];
const newArr = numb.map(Math.sqrt(item)); // [2,3,4,5]
console.log(newArr);
// join(" ") nối 2 chuỗi : object = {fname:'nguyen',lname:'duc'}
// [object.fname,object.lname].join(" "); nối và cách nhau dấu phẩy
//filter() tạo ra mảng mới vs điều kiện đc thỏa mãn
//array.filter(function) function sẽ tác động đến từng phần tử mà filter nó chạy qua của mảng array
const age = [32, 34, 20, 27, 63];
const newage = age.filter((item) => {
  return item > 30;
});
console.log(newage);
let kids = [
  {id:1,name:"a",age:20},
  {id:2,name:"ab",age:15},
  {id:3,name:"abc",age:17},
  {id:4,name:"abcd",age:13},
  {id:5,name:"abcde",age:30}
]
const kd = kids
    .filter(item => item > 15 ) // lọc ra phần tử theo điều kiện rồi map để ra mảng mới 
    .map(item => ({ // ko cần push thì map nó tạo ra mảng mới 
      id: item.id,
      name:item.name
    }))
console.log(kd)
