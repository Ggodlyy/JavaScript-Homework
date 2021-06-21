(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.includes(str)) {
            return str + this;
        } else {
            return this;
        }
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.includes(str)) {
            return this + str;
        } else {
            return this;
        }
    };

    String.prototype.isEmpty = function () {
        this === '' ? true : false;
    };

    String.prototype.truncate = function (n) {
        if (this.length < 4) {
            return '.'.repeat(n);
        } else if (this.length < n) {
            return this;
        } else {
            if (this.includes(' ')) {
                let arr = this.split(' ');
             
            } else {

            }
        }
    };

    String.myTest = function() {
        console.log(this);
    }
})();

let str = 'my string';
str = str.ensureStart('my');
String.myTest();
// str = str.ensureStart('hello ');
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// str = String.format('jumps {0} {1}',
//     'dog');

