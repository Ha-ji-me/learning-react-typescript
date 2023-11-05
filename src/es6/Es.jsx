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

  //デフォルト値
  //引数等の初期値設定
  const sayHello = (name="ゲスト") => console.log(`こんにちは${name}さん！`);
  sayHello();

  //スプレッド構文
  const arr = [1,1,1,1,1,1,1,1,1,1,1];
  const arr2 = [2,2,2,2,2,2,2,2,2,2,2];
  const arr3 = [...arr, ...arr2];
  const arr4 = [...arr, 5,32];
  console.log(arr,arr2,arr3,arr4);

  return (
    <div>{name}</div>

  )
}
