import {render, screen} from '@testing-library/react';
import {Loader} from "shared/Loader/ui/Loader";

describe('Loader tests', () => {
    test('Loader render', () => {
        render(<Loader/>)
        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })
})
