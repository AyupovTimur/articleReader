import {render, screen} from "@testing-library/react"
import {Button, ButtonTheme} from "shared/Button/ui/Button";

describe("Button tests", () => {
    test('Render text', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    });

    test('Add theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug()
    })
});
