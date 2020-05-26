
// ============================================================= CMD LINE

// docker pull datastax/dse-server:6.7.8
// docker pull datastax/dse-studio

// docker run -e DS_LICENSE=accept —-name my-dse -d -p 9042:9042 datastax/dse-server:6.7.8  // docker logs -f my-dse -> will display 'DSE Startup Complete' when ready
// docker run -e DS_LICENSE=accept —-link my-dse —-name my-studio -p 9091:9091 -d datastax/dse-studio  // http://localhost:9091

// docker exec -it my-dse bash
// cqlsh

/*
  USE sdc;

  DROP TABLE IF EXISTS products;

  CREATE TABLE products (
    sku int primary key,
    product_title text,
    sale_price float,
    msrp float,
    quantity int,
    category text
  );
*/

// Copies data.csv to docker container
// sudo docker cp /Users/blakeguidry/Desktop/Pricing-Component/data.csv 77ceef49bc34:/

// COPY products(sku, product_title, sale_price, msrp, quantity, category) FROM '/data.csv' WITH HEADER = TRUE AND DELIMITER = ',';

// =============================================================
