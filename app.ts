interface TotalPrice { 
    price: number, discount: number, isInstallment : boolean, months : number
}// присвоил ключи и значения

const totalPrice = ({ price, discount, isInstallment, months } : TotalPrice) : number => {//добавил интерфейс и после вывел ожидаемое значение 
   //вводим переменную, если рассрочка делим еще и на указанные месяца, если нет выводим с учетом только скидки 
   let newPrice 
    if(isInstallment){
    newPrice = (price - ( price * discount)/100 )/ months
   } else {
    newPrice = (price - ( price * discount)/100 )
   }
   return newPrice
};

const price = totalPrice ({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250