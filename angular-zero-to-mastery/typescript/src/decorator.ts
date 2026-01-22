import crypto from 'crypto';

function MenuItem(itemId: string) {
  return (target: Function) => {
    target.prototype.id = itemId;
  };
}


@MenuItem(crypto.randomUUID())
class Pizza {
  id?: string;
}

@MenuItem(crypto.randomUUID())
class Hamburger {
  id?: string;
}

console.log(new Pizza().id);
