const mortgageAmount = document.querySelector('#a-number')
const mortgageTerm = document.querySelector('.tr-number')
const interestRate = document.querySelector('.tr-rate')
const repayment = document.querySelector('.type-r')
const interest = document.querySelector('.type-i')
const error = document.querySelector('.error')
const monthlyRepayments = document.querySelector('.monthly-repayments')
const totalPayment = document.querySelector('.total-payment')


function calculateMortgage(button){
    if(!mortgageAmount.value || !mortgageTerm.value || !interestRate.value || repayment.value || interest.value){
        error.style.display = 'block'
        error.textContent = "PLEASE INPUT 'ALL' VALUES"
        setTimeout(()=>{
            error.style.display = 'none'
        },2000)
    } else{
        const mortgageAmountNumber = Number(mortgageAmount.value)
        const mortgageTermNumber = Number(mortgageTerm.value)
        const interestRateNumber = Number(interestRate.value)

        const annualInterestRate = (interestRateNumber/100) / 12
        const numberOfPayments = mortgageTermNumber * 12
        const monthlyPayments = (annualInterestRate * ((1 + annualInterestRate)**numberOfPayments))/(((1 + annualInterestRate)**numberOfPayments) - 1) * mortgageAmountNumber
        const payments = monthlyPayments * numberOfPayments
        monthlyRepayments.textContent = monthlyPayments
        totalPayment.textContent = payments
    }
}

