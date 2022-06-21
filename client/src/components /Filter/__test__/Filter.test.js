import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from '../Filter'

describe('Filter', () =>{
    test('able to change the value of the sex select', () => {
        render(<Filter filters={{}} setFilters={() => {}}/>);
        const select = screen.getByLabelText(/sex/i);
        expect(select.value).toBe('any');
        userEvent.selectOptions(select, 'male');
        expect(select.value).toBe('male');
        userEvent.selectOptions(select, 'female');
        expect(select.value).toBe('female');
    });
})