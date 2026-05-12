
const amountInput = document.getElementById("amount")
const descriptionInput = document.getElementById("desc")
const incomeButton = document.getElementById("incomeBtn")
const expenseButton = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const balanceDisplay = document.getElementById("balance")

let balance = 0
let incomes = []
let expenses = []

function addIncome(){
    const newDescription = descriptionInput.value
    const newAmount = Number(amountInput.value)

    if (isNaN(newAmount) || newDescription === ""){
        alert("Vänligen ange en giltig beskrivning och ett numeriskt belopp.")
        descriptionInput.value = ""
        amountInput.value = ""
        return
    }

    const existingIncome = {
        incomeName: newDescription,
        incomeAmount: newAmount
    }

    let incomeExists = false

    for (income of incomes){
        if (income.incomeName === newDescription){
            income.incomeAmount += newAmount
            incomeExists = true
        }
    }

    if (!incomeExists){
        incomes.push(existingIncome)
    }

    descriptionInput.value = ""
    amountInput.value = ""
}

function addExpense(){
    const newDescription = descriptionInput.value
    const newAmount = Number(amountInput.value)

    if (isNaN(newAmount) || newDescription === ""){
        alert("Vänligen ange en giltig beskrivning och ett numeriskt belopp.")
        descriptionInput.value = ""
        amountInput.value = ""
        return
    }

    const existingExpense = {
        expenseName: newDescription,
        expenseAmount: newAmount
    }

    let expenseExists = false

    for (expense of expenses){
        if (expense.expenseName === newDescription){
            expense.expenseAmount += newAmount
            expenseExists = true
        }
    }

    if (!expenseExists){
        expenses.push(existingExpense)
    }

    descriptionInput.value = ""
    amountInput.value = ""
}

function displayIncomes(){
    incomeList.innerHTML = ""

    for (const income of incomes){
        incomeList.innerHTML += `<li>${income.incomeName} - ${income.incomeAmount} kr (Inkomst)</li>`
    }
}

function displayExpenses(){
    expenseList.innerHTML = ""
    
    for (const expense of expenses){
        expenseList.innerHTML += `<li>${expense.expenseName} - ${expense.expenseAmount} kr (Utgift)</li>`
    }
}

function updateBalance(){
    balance = 0
    for (const income of incomes){
        balance += income.incomeAmount
    }
    for (const expense of expenses){
        balance -= expense.expenseAmount
    }
    balanceDisplay.textContent = `${balance}`
}

incomeButton.addEventListener("click", function(){
    addIncome()
    displayIncomes()
    updateBalance()
})

expenseButton.addEventListener("click", function(){
    addExpense()
    displayExpenses()
    updateBalance()
})

