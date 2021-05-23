function solve(percent) {
    let arr = ['['];

    if (percent === 100) {
        console.log(`${percent}% Complete!`);
        console.log('[%%%%%%%%%%]');
        return;
    }

    for (let i = 1; i <= 11; i++) {
        if (i <= percent / 10) {
            arr.push('%');
        } else if (i === 11) {
            arr.push(']')
        }
        else {
            arr.push('.');
        }
    }

    console.log(`${percent}% ${arr.join('')}`);
    console.log('Still loading...');
}

function otherSolution(num) {
    let percent = '%'.repeat(num / 10);
    let dots = '.'.repeat((100 - num) / 10);

    if (num >= 0 && num <= 90) {
        console.log(`${num}% [${percent}${dots}]`);
        console.log('Still loading...')
    } else {
        console.log('100% Complete!');
        console.log(`[${percent}]`);
    }
}

solve(30)
otherSolution(30)