import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"

const renderHeader = (props?: { onBack?: () => void }) => {
    render(<Header {...props} />)
}
describe('Header component', () => {
    test('should render icon', () => {
        renderHeader();

        const icon = screen.getByTestId("back-icon");

        expect(icon).toBeInTheDocument();
    })

    test('should render image', () => {
        renderHeader();

        const img = screen.getByTestId("logo-img");

        expect(img).toBeInTheDocument();
    })

    test('should call handler when icon clicked', () => {
        const handler = jest.fn();

        renderHeader({ onBack: handler });

        const icon = screen.getByTestId("back-icon");
        fireEvent.click(icon);

        expect(handler).toBeCalled();
    })

    test('should not call handler when onBack is not present', () => {
        const handler = jest.fn();

        renderHeader();

        const icon = screen.getByTestId("back-icon");
        fireEvent.click(icon);

        expect(handler).not.toBeCalled();
    })
})