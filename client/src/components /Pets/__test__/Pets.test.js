import { screen, render } from '@testing-library/react';
import Pets from '../pets';
import {rest, setupServer} from 'msw/node';
import dogsMock from '../../../mocks/dogs.json';

const server = setupServer(
    rest.get('http://localhost:4000/dogs',(req, res, ctx)=>{
    return res(
        ctx.json(dogsMock)
    )
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close())

test('that Pets render correctly',async () =>{
    render(<Pets/>);
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(4);
});