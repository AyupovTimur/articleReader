import {fireEvent, render, screen} from "@testing-library/react"
import {Sidebar} from "widgets/Sidebar";
import {renderWitchTranslation} from "shared/lib/tests/renderWitchTranslation/renderWitchTranslation";

describe("Sidebar tests", () => {

    test("Sidebar render", () => {
        renderWitchTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test("Sidebar toggle", () => {
        renderWitchTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})
