export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  }

  const onClickPractice = () => {
    let total: number = 0;
    //代入した関数側で型指定がされておらず、想定外の型を返されたとしても
    //変数に型を指定していればnumber型の変数にstring型は代入できないよエラーが出してくれる
    total = getTotalFee(1000);
    console.log(total);
  }

  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={ onClickPractice }>練習問題3を実行</button>
    </div>
  )
}