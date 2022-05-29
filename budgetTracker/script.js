const hBudgehhtValue = document.getElementById("budget-input")
const hBudgetTxt = document.getElementById("budget-text")
const confBudgetBtn = document.getElementById("confbtn")

const hExpenseItem = document.getElementById("expense-title")
const hExpenseAmount = document.getElementById("expense-amount") 
const hExpenseBtn = document.getElementById("expense-btn")
const hExpenseTxt = document.getElementById("expense-text")
const hFinalBalanceTxt = document.getElementById("balance-text")
let budget= 0
let expense = 0
let balance= 0
// let expenselist = [
//   {expenseTitle:"Buy milk", expenseValue:100},
//   {expenseTitle:"Buy milk", expenseValue:100},
//   {expenseTitle:"Buy milk", expenseValue:100},
//   {expenseTitle:"Buy milk", expenseValue:100},
// ]

confBudgetBtn.addEventListener("click", function(){
  budget = hBudgehhtValue.value
  hBudgetTxt.textContent ="$" + budget
  balance=budget-expense
  hFinalBalanceTxt.textContent = "$" + balance
})

hExpenseBtn.addEventListener("click", function(){
  expense = hExpenseAmount.value
  hExpenseTxt.textContent = "$" + expense
  balance=budget-expense
  hFinalBalanceTxt.textContent = "$" + balance
})


