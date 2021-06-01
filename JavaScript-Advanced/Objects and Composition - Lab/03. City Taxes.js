function solve() {
    const city =
        cityTaxes('Tortuga',
            7000,
            15000);
    console.log(city);

    city.collectTaxes();
    console.log(city.treasury);
    city.applyGrowth(5);
    console.log(city.population);
}

function cityTaxes(name, population, treasury) {
    let collectTaxes = function () {
        this.treasury += (this.population * this.taxRate);
    }

    let applyGrowth = function (percentige) {
        percentige /= 100;
        this.population += (this.population * percentige);
    }

    let applyRecession = function (percentige) {
        percentige /= 100;
        this.treasury -= (this.treasury * percentige);
    }

    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    }
}


solve()