export const Es = () => {
  //分割代入
  //階層深くなった時に面倒なオブジェクトや配列の指定を解消
  const myObj = {
    name: "tst",
    age: 2,
  };
  const {name, age} = myObj;
  console.log(name, age);

  const myArr = ["test", 4];
  const [test, num] = myArr;
  console.log(test, num);

  return (
    <div>{name}</div>

  )
}
