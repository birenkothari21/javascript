class Total {
    calcAmount(prdPrice, qnty) {
        return prdPrice * qnty;
    }

    welcomeMessage(qlty) {}
}

class Product extends Total {
    title = '';
    desc = '';
    price = '';
    qnty = '';
    static totalProduct = 0;

    constructor(title, desc, price, qnty) {
        super();
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.qnty = qnty;
        this.totalAmount = this.calcAmount(this.price, this.qnty);
        Product.totalProduct++;
    }

    welcomeMessage() {
        console.log('Product Title : ', this.title);
    }

    showProduct() {
        this.welcomeMessage();
        console.log('Product Description : ', this.desc);
        console.log('Product Price : ', this.price);
        console.log('Quantity : ', this.qnty);
        console.log('Total Amount : ', this.totalAmount);
        console.log('-----');
    }
}

const prd1 = new Product('Book', 'This is used for writing', '100', 3);
const prd2 = new Product('Pen', 'This is used for writing', '200', 7);

prd1.showProduct();
prd2.showProduct();

console.log(
    'Is Prd1 instancof Product ? : ',
    prd1 instanceof Product ? 'Yes' : 'No'
);
