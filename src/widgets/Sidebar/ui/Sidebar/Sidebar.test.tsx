import {fireEvent, screen} from "@testing-library/react"
import {Sidebar} from "widgets/Sidebar";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe("Sidebar tests", () => {

    test("Sidebar render", () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test("Sidebar toggle", () => {
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})
