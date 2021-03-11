function main(){
  var firstNum = 6;
      firstNum *= 9;
  var secondNum = 25;
      secondNum /= 5;
  var thirdNum = 5.2;
      thirdNum *= 10;

      return{

        firstNum,
        secondNum,
        thirdNum
      };

}
console.log(main());
module.exports = main;