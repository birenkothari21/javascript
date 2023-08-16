console.log("Just Advanced Functions Concepts Examples...");

/* 
    // pure vs impure functions...

    function add(num1, num2) {
        // this is pure function because it doesn't affect the code of the outside of this funciton...
        return num1 + num2;
    }

    const sum = add(10, 34);
    console.log("Sum : ", sum); 
*/

/* 
    function addHobbie(h) {
        // this function is impure because it affect the array declared outside of this block...
        h.push("Reading");
    }

    const hobbies = ["Sport", "Coding"];
    console.log(hobbies);
    addHobbie(hobbies);
    console.log(hobbies);
 */

/* 
    function numGenerator(n) {
        // this is also an impure function because it's output is not predictable...
        return n * Math.random();
    }

    console.log("Result : ", numGenerator(10));
 */

/* 
    // Example of Recursion - function calling itself...

    function getPower(b, e) {
        if (e === 1) {
            return b;
        }
        return b * getPower(b, e - 1);
    }

    const base = 5;
    const exponent = 3;

    const power = getPower(base, exponent);
    console.log(`Base : ${base}, Exponent : ${exponent}, Result : ${power}`);
 */

/* 
    // another recursion example...

    const friends = {
        name: "Biren",
        friends: [
            {
                name: "Bhavya",
                friends: [
                    {
                        name: "Vivek",
                    },
                ],
            },
            {
                name: "Maulik",
            },
        ],
    };

    function getFirends(person) {
        const collectedNames = [];

        if (!person.friends) {
            return [];
        }

        console.log(person);

        for (const friend of person.friends) {
            collectedNames.push(friend.name);
            collectedNames.push(...getFirends(friend));
        }

        return collectedNames;
    }

    console.log("Friend List : ", getFirends(friends));
 */

/*     
    // factory function / high-order function...

    function createTaxCalculator(tax) {
        function calcTax(amount) {
            return (amount * tax) / 100;
        }

        return calcTax;
    }

    const calculateGstTax = createTaxCalculator(7.5);
    const calculateIncomeTax = createTaxCalculator(5);

    console.log("Total GST Tax : ", calculateGstTax(200000));
    console.log("Total GST Tax : ", calculateGstTax(200000));

    console.log("Total  Income Tax : ", calculateIncomeTax(10000));
    console.log("Total Income Tax : ", calculateIncomeTax(15000));
 */

/* 
    // Clouser ecample...

    let userName = "Vivek";

    function greetUser() {
        let name = "Anant Maheta";
        console.log(`Hi ${name}`);
    }

    let name = "Anant Doshi";
    userName = "Vivek Doshi";

    greetUser();
 */

/* 
    // clining object using structuredClone

    const obj = {
        name: "Biren Kothari",
        age: 22,
        address: {
            localArea: {
                wordNo: 1,
                streetNo: 2,
                landmark: "MG Road",
            },
            city: "Visavadar",
            pincode: 362130,
            district: "Junagadh",
            state: "Gujarat",
            country: "India",
        },
    };

    console.log("Object when created : ", obj);

    const clonedObj1 = { ...obj };
    clonedObj1.age = 23;
    clonedObj1.address.city = "Bilkha";

    console.log("After Cloning Object : ", obj);
    console.log("After Cloning Cloned Object (Spread Operator) : ", clonedObj1);

    const clonedObj2 = structuredClone(obj);
    clonedObj2.age = 25;
    clonedObj2.address.city = "Amreli";
    clonedObj2.address.district = "Amreli";
    clonedObj2.address.localArea.wordNo = 25;

    console.log("After Cloning Object : ", obj);
    console.log("After Cloning Cloned Object (structuredClone) : ", clonedObj2);

    const clonedObj3 = JSON.parse(JSON.stringify(obj));
    clonedObj3.address.localArea.landmark = "Yogi Nagar";

    console.log("After Cloning Object : ", obj);
    console.log(
        "After Cloning Cloned Object (JSON.parse(JSON.stringify(obj))) : ",
        clonedObj3
    );
 */
