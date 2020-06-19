import http from 'k6/http';

export let options = {
  duration: '1m',
  rps: 1000,
  vus: 50
};

export default function() {
  let sku = Math.floor(Math.random() * 9900000);
  http.get(`http://localhost:9003/price/${sku}`, {
    tags: { name: 'GetItemURL' },
  });
}