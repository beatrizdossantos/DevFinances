const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList.add('active')
    },

    close() {
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },

    {
        id: 2,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    },

    {
        id: 3,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021'
    }, 

    {
        id: 4,
        description: 'App',
        amount: 300000,
        date: '23/01/2021'
    }
]


const Transaction = {
    incomes() {
        //somar as entradas
    },

    expenses() {
        //somar as saídas
    },

    total() {
        //entradas - saídas
    },
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const cssClass = transaction.amount > 0 ? "income" : "expense"

        Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="date">${transaction.description}</td>
        <td class="${cssClass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img class="minus-button" src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `
        return html;
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})