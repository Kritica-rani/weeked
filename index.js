// function test() {
//   console.log("a", a); //ERROR
//   let a = 30;

//   return a + a;
// }
// test();

//Scope
//global scoped/functional
const api = "https://jsonplaceholder.typicode.com/posts";
const fetchData = async () => {
  try {
    const data = await fetch(api);
    const result = await data.json();
    renderDataOnUi(result);
  } catch (err) {
    console.log("error in fetching datas", err);
  }
};
const renderDataOnUi = (data) => {
  console.log("data", data);
};
fetchData();
