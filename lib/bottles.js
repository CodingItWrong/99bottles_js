import { capitalize, downTo } from './helpers';

export class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map(i => this.verse(i))
      .join('\n');
  }

  verse(number) {
    return (
      `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ` +
          `${this.quantity(number)} ${this.container(number)} of beer.\n` +
          `${this.action(number)}, ` +
          `${this.quantity(this.successor(number))} ${this.container(this.successor(number))} of beer on the wall.\n`
    );
  }

  container(number) {
    return new BottleNumber(number).container();
  }

  pronoun(number) {
    return new BottleNumber(number).pronoun();
  }

  quantity(number) {
    return new BottleNumber(number).quantity();
  }

  action(number) {
    return new BottleNumber(number).action();
  }

  successor(number) {
    return new BottleNumber(number).successor();
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  container() {
    if (this.number === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
  }

  pronoun() {
    if (this.number === 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  quantity() {
    if (this.number === 0) {
      return 'no more';
    } else {
      return this.number.toString();
    }
  }

  action() {
    if (this.number === 0) {
      return 'Go to the store and buy some more';
    } else {
      return `Take ${this.pronoun()} down and pass it around`;
    }
  }

  successor() {
    if (this.number === 0) {
      return 99;
    } else {
      return this.number - 1;
    }
  }
}
