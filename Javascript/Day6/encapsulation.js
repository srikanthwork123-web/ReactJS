class BankAccount {

  #balance = 0; //private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }

}

const acc = new BankAccount();

acc.deposit(1000);

console.log(acc.getBalance());