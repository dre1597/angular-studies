class Queue<T> {
  private data: T[] = [];

  public add(item: T): void {
    this.data.push(item);
  }

  public remove(): void {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();
nameQueue.add('John');
nameQueue.add('Jane');

const numberQueue = new Queue<number>();
numberQueue.add(1);
numberQueue.add(2);
