export const Practice4 = () => {

  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  }

  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  }

  return (
    <div>
      <p>練習問題：設定ふぁいるを触ってみる</p>
      <button onClick={ onClickPractice }>練習問題4を実行</button>
    </div>
  )
}