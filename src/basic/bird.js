const birds = [
  { ID: "DV8", Name: "Eurasian Collared-Dove", Type: "Dove" },
  { ID: "HK12", Name: "Bald Eagle", Type: "Hawk" },
  { ID: "HK6", Name: "Cooper's Hawk", Type: "Hawk" },
  { ID: "SP11", Name: "Bell's Sparrow", Type: "Sparrow" },
  { ID: "DV2", Name: "Mourning Dove", Type: "Dove" },
];
const bd = birds.map((item) => item.ID); // tao ra mảng mới chi có id
console.log(bd);
let sum = 14;
console.log(`gia tri: ${sum}`);
const bid = birds.map((bi) => {
  return [bi.Name, bi.Type].join(" ");
});
console.log(bid);
// join để nối bằng khoảng trắng
