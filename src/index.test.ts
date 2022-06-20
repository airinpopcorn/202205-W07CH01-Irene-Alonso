import { server } from './index';

describe('Given a http server', () => {
    test('Then the server has been instantiated', () => {
        expect(server).toBeTruthy();
    });
});
