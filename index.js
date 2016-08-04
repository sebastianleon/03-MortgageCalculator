$(document).ready(function() {
 $("#button").click(function(){
   var loanBalance = $("#balance").val();
   var loanTerm = $("#term").val();
   var loanInterest = $("#interest").val();
   var howManyMonths =$("#period option:selected").val();
var numberOfPayments = loanTerm * howManyMonths;     
var monthlyInterestRate =(loanInterest / 100) / howManyMonths;          
var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);  
var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
var monthlyPayment =Math.round((loanBalance * interestQuotient) * 100) / 100;

    
$("#userResult").html('Wow! Your paying ' + monthlyPayment + ' thats way too much!');



});

});
