// Nabil Cheque Printer JavaScript
class NabilChequePrinter {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.setDefaultDate();
    }

    initializeElements() {
        this.payeeNameInput = document.getElementById("payeeName");
        this.amountInput = document.getElementById("amount");
        this.dateInput = document.getElementById("date");
        this.acPayeeCheckbox = document.getElementById("acPayeeCheckbox");
        this.generateChequeBtn = document.getElementById("generateCheque");
        this.printChequeBtn = document.getElementById("printCheque");
        this.chequeOutput = document.getElementById("chequeOutput");
    }

    bindEvents() {
        this.generateChequeBtn.addEventListener("click", () => this.generateCheque());
        this.printChequeBtn.addEventListener("click", () => this.printCheque());
        this.acPayeeCheckbox.addEventListener("change", () => this.generateCheque());
        this.amountInput.addEventListener("input", (e) => this.restrictDecimalPlaces(e.target));
    }

    setDefaultDate() {
        this.dateInput.valueAsDate = new Date();
    }

    restrictDecimalPlaces(input) {
        let value = input.value;
        
        // Prevent entering more than two decimal places
        if (value.includes('.')) {
            let parts = value.split('.');
            if (parts[1].length > 2) {
                input.value = parts[0] + '.' + parts[1].slice(0, 2);
            }
        }
    }

    // Convert numbers to Nepali words based on Lakh and Crore system
    numberToWordsNepali(num) {
        const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
        const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

        if (num === 0) return 'Zero';

        let str = '';

        if (Math.floor(num / 10000000) > 0) {
            str += this.numberToWordsNepali(Math.floor(num / 10000000)) + ' Crore ';
            num %= 10000000;
        }

        if (Math.floor(num / 100000) > 0) {
            str += this.numberToWordsNepali(Math.floor(num / 100000)) + ' Lakh ';
            num %= 100000;
        }

        if (Math.floor(num / 1000) > 0) {
            str += this.numberToWordsNepali(Math.floor(num / 1000)) + ' Thousand ';
            num %= 1000;
        }

        if (Math.floor(num / 100) > 0) {
            str += this.numberToWordsNepali(Math.floor(num / 100)) + ' Hundred ';
            num %= 100;
        }

        if (num > 0) {
            if (num < 20) {
                str += a[num];
            } else {
                str += b[Math.floor(num / 10)];
                if (num % 10 > 0) {
                    str += ' ' + a[num % 10];
                }
            }
        }

        return str.trim();
    }

    convertAmountToWords(amount) {
        let [rupees, paisa] = amount.split('.');

        rupees = parseInt(rupees, 10);
        
        // Ensure paisa is always treated as two digits
        paisa = paisa ? (paisa.length === 1 ? parseInt(paisa) * 10 : parseInt(paisa, 10)) : 0;

        let rupeesInWords = this.numberToWordsNepali(rupees);
        let result = rupeesInWords + ' Rupees';

        if (paisa > 0) {
            let paisaInWords = this.numberToWordsNepali(paisa);
            result += ' and ' + paisaInWords + ' Paisa';
        }

        result += ' Only';
        return result;
    }

    generateCheque() {
        const payee = this.payeeNameInput.value;
        const amount = this.amountInput.value;
        const date = this.dateInput.value.split("-").reverse().join("");

        if (!payee || !amount || !date) {
            alert("Please fill in all required fields");
            return;
        }

        const amountInWords = this.convertAmountToWords(amount);
        const acPayeeChecked = this.acPayeeCheckbox.checked;
        const acPayeeText = acPayeeChecked ? '<div class="ac-payee">AC PAYEE</div>' : '';
        const dateHtml = date.split('').map(char => `<span>${char}</span>`).join('');

        this.chequeOutput.innerHTML = `
            <div class="date-box">${dateHtml}</div>
            <div class="name-box">${payee}</div>
            <div class="amount-words-box">
                <p>${amountInWords}</p>
            </div>
            <div class="amount-figure-box">${amount}/-</div>
            ${acPayeeText}
        `;

        // Display the cheque box in the web view
        this.chequeOutput.style.display = 'block';
    }

    printCheque() {
        if (!this.chequeOutput.innerHTML.trim()) {
            alert("Please generate a cheque first");
            return;
        }

        const chequeOutput = this.chequeOutput.innerHTML;
        const printWindow = window.open('', '', 'height=600,width=800');
        
        printWindow.document.write('<html><head><title>Print Cheque</title>');
        printWindow.document.write('<link rel="stylesheet" href="styles/nabil.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div class="cheque-box">');
        printWindow.document.write(chequeOutput);
        printWindow.document.write('</div></body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new NabilChequePrinter();
}); 