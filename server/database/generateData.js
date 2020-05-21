const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
let counter = 0;

const dataGen = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for (let i = 0; i < 10000000; i++) {
    let price = faker.commerce.price();
    let msrp = price + Math.floor(Math.random() * 100);
    writer.write({
      sku: counter++,
      product_title: faker.commerce.productName(),
      sale_price: price,
      msrp: msrp,
      quantity: Math.floor(Math.random() * 100),
      category: faker.commerce.department()
    })
  }
  writer.end();
  console.log('done');
}

dataGen();