import fs from 'fs/promises';
import http from 'http';
import url from 'url';
import { calculator } from './calculator';

const PORT = process.env.PORT || 3476;

export const server = http.createServer((req, resp) => {
    // const data = calculator(6, 3);
    const path = url.parse(req.url as string).path;
    resp.end(path);
    console.log(path?.split('?'));

    // let dataFile: string = `./data/${path}.txt`;
    // fs.readFile(dataFile, { encoding: 'utf-8' })
    //     .then((data) => {
    //         console.log(data);
    //         const template = `<h1>CALCULADORA</h1><p>${data.name}</p>`;
    //         resp.end(template);
    //     })
    //     .catch((err: Error) => {
    //         resp.end('La cagasteeeee');
    //         console.log(err.message);
    //     });
});

server.listen(PORT);
console.log(`Server listening in port ${PORT}`);
