const myName: string | null = '';

const items: (string | number)[] = [5, 'item2', 'item3'];

interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposit?: (amount: number) => void;
}

const account: IAccount = {
  name: 'John Doe',
  balance: 0
};

class InvestmentAccount implements IAccount {
  constructor(public name: string, public balance: number) {
    this.name = name;
    this.balance = balance;
  }

  private withdraw(amount: number) {
    this.balance -= amount;
  }
}
