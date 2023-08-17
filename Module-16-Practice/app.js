/* 
    // Random Number Generator...

    function randomNumberGenerator(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    console.log(
        `Randon Number Between 10000 & 99999 : ${randomNumberGenerator(
            100000,
            999999
        )}`
    );
 */

/*     
    // Tagged Templates...

    function productDescription(strings, prdName, prdPrice) {
        console.log(strings);
        console.log(prdName);
        console.log(prdPrice);

        let prdCategory = "";

        if (prdPrice > 500) {
            prdCategory = "Too Costly";
        } else {
            prdCategory = "Cheper";
        }

        return `${strings[0]}${prdName}${strings[1]}${prdCategory}${strings[2]}`;
    }

    const prdName = "JS Course";
    const prdPrice = 1100;

    const productOutput = productDescription`This Product '${prdName}' is '${prdPrice}'`;

    console.log(productOutput);
 */

// Math Methods...
