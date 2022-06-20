import fs from 'fs/promises';
import http from 'http';
import url from 'url';
import { iInquirerAnswers, setup } from './setup.js';

const PORT = process.env.PORT || 3204;

const answers: iInquirerAnswers = await setup();

export const server = http.createServer((req, resp) => {
    const path = url.parse(req.url as string).path;
    let dataFile: string = `./data/${path}.txt`;
    fs.readFile(dataFile, { encoding: 'utf-8' })
        .then((data) => {
            console.log(data);
            const template = `<h1>Holaaaaa, soy ${answers.name}</h1><p>${data}</p>`;
            resp.end(template);
        })
        .catch((err: Error) => {
            resp.end('La cagasteeeee');
            console.log(err.message);
        });
});

server.listen(PORT);
console.log(`Server listening in port ${PORT}`);
