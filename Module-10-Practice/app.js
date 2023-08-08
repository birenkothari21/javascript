class Total {
    totalAmount(prdPrice, qnty) {
        return prdPrice * qnty;
    }
}

class Product extends Total {
    title = '';
    desc = '';
    price = '';

    constructor(title, desc, price) {
        this.title = title;
        this.desc = desc;
        this.price = price;
    }

    showProduct() {
        console.log('Product Title : ', this.title);
        console.log('Product Description : ', this.desc);
        console.log('Product Price : ', this.price);
    }

    // this.totalAmount(this.price, 5);
}

const prd1 = new Product('Book', 'This is used for writing', '100');
const prd2 = new Product('Pen', 'This is used for writing', '200');
prd1.showProduct();
prd2.showProduct();
