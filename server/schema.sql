DROP DATABASE IF EXISTS worstbuy;

CREATE DATABASE worstbuy;

USE worstbuy;






DROP TABLE IF EXISTS products;
CREATE TABLE products(
  sku INTEGER  NOT NULL PRIMARY KEY
  ,product_title VARCHAR(50) NOT NULL
  ,sale_price NUMERIC(30,2) NOT NULL
  ,msrp NUMERIC(30,2) NOT NULL
  ,quantity INTEGER  NOT NULL
  ,category VARCHAR(25) NOT NULL
);
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134511,'Microsoft Windows Millennium (2000)',1999.99,59.99,7,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134512,'Microsoft Bob',1499.99,79.99,12,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134513,'Microsoft Internet Explorer 6 (2001)',2999.99,99.99,10,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134514,'Gateway 2000 10th Anniversary PC (1995)',169.99,150.00,1,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134515,'Iomega Zip Drive',79.99,499.99,8,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134516,'Comet Systems Comet Cursor (1997)',39.99,159.99,22,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134517,'Apple Macintosh Portable',1049.99,119.99,3,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134518,'IBM Deskstar 75GXP',999.99,169.99,19,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134519,'OQO Model 1',1499.99,799.99,6,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134520,'DigitalConvergence CueCat',899.99,1299.99,5,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134521,'Eyetop Wearable DVD Player',35999.99,49.99,45,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134522,'The NoPhone Air',799.99,59.99,1,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134523,'Commodore Plus/4',789.98,299.99,8,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134524,'Sinclair QL',389.99,149.99,16,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134525,'Refurbished Compaq Desktop',1044.99,79.99,3,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134526,'Refurbished OptiPlex Desktop',249.99,99.99,5,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134527,'Chrumybook - Sparkly Silver',134.99,79.99,89,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134528,'Samsing laptop',159.99,89.99,6,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134529,'dull laptop',1129.99,459.99,18,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134530,'Mucbook novice',912.99,199.99,56,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134531,'humanware laptop',89.99,29.99,5,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134532,'laptop',999.99,29.99,8,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134533,'samsing ultimate laptop',1199.99,999.99,14,'computer');
INSERT INTO products(sku,product_title,sale_price,msrp,quantity,category) VALUES (134534,'Tushiba laptop',799.99,599.99,18,'computer');

