/*
	WEB 303 Assignment 1 - jQuery
	{Gurjeet Singh}
*/


$("document").ready(() => {

	const annualPay = $("#yearly-salary");
	const techRatio = $("#percent");
	const techPrice = $("#amount");

	function techExpenseCalculate(){
		let amount = annualPay.val() * techRatio.val() / 100;
		techPrice.text(`$${amount.toFixed(2)}`);
	}
	annualPay.keyup(techExpenseCalculate);
	techRatio.keyup(techExpenseCalculate);
});