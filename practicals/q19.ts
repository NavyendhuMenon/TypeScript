function calculateIncomeTax(annualIncome: number): number {
    let taxAmount = 0;

    if (annualIncome <= 250000) {
        taxAmount = 0;
    } else if (annualIncome <= 500000) {
        taxAmount = (annualIncome - 250000) * 0.05;
    } else if (annualIncome <= 1000000) {
        taxAmount = (250000 * 0.05) + (annualIncome - 500000) * 0.20;
    } else if (annualIncome <= 5000000) {
        taxAmount = (250000 * 0.05) + (500000 * 0.20) + (annualIncome - 1000000) * 0.30;
    } else {
        taxAmount = (250000 * 0.05) + (500000 * 0.20) + (4000000 * 0.30) + (annualIncome - 5000000) * 0.30;
    }

    return taxAmount;
}


console.log(calculateIncomeTax(600000))