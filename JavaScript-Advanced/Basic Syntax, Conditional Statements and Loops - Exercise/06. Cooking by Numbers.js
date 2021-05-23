function solve() {
    let num = Number(arguments[0]);

    for (let i = 1; i < arguments.length; i++) {
        let operation = arguments[i];

        switch (operation) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num -= num * 0.20;
                console.log(num);
                break;
        }
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')