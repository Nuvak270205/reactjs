
const billValues = [275, 40, 430];

billValues.forEach(billValue => {
  const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  const total = billValue + tip;

  console.log(`Giá ban đầu ${billValue}, tiền tip là ${tip.toFixed(2)}, và tổng giá trị là ${total.toFixed(2)}`);
});