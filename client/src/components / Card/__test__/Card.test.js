import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../Card';

const cardProps = {
    name:'Olesya',
    phone:'111-111',
    email:'katia@nch.org',
    image:{url: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800', alt: 'cute cat'},
    favoured:false,
}

describe('test the Card component', () => {
    test('it shows the name of a cat', () => {
        render(<Card {...cardProps}/>);
        expect(screen.getByRole('heading', {name: /olesya/i})).toBeInTheDocument();
    });

    test('it shows the telephone number', () => {
        render(<Card {...cardProps}/>);
        expect(screen.getByText(/111-111/i)).toBeInTheDocument();
    });

    test('it shows the email', () => {
        render(<Card {...cardProps}/>);
        expect(screen.getByText(/katia@nch.org/i)).toBeInTheDocument();
    });

    test('the image has the right source', () => {
        render(<Card {...cardProps}/>);
        expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
    });

    test('the heart is an outline', () => {
        render(<Card {...cardProps}/>);
        expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    });

    test('the heart is filled', () => {
        render(<Card {...cardProps} favoured = {true}/>);
        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    });

    test('hearts toggle', () => {
        render(<Card {...cardProps}/>);
        userEvent.click(screen.getByRole("button"));
        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
        userEvent.click(screen.getByRole("button"));
        expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    })

});