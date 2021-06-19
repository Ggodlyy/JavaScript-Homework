(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.includes(str)) {
            return str + this;
        } else {
            return this;
        }
    };

    String.prototype.ensureEnd = function (str) {

    };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');

