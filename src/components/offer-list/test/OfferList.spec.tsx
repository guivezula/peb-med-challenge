import { fireEvent, render, screen } from "@testing-library/react"
import OfferList, { OfferListProps } from "../OfferList"
import { OFFERS_DATA_MOCK } from "../../../constants/mocks"

const renderOfferList = (props: OfferListProps) => {
    return render(<OfferList {...props} />)
}

describe('OfferList component', () => {
    let props: OfferListProps;
    beforeAll(() => {
        props = {
            email: 'any@email.com',
            offers: OFFERS_DATA_MOCK,
            onSelect: jest.fn(),
        }
    })

    test('should show header', () => {
        renderOfferList(props);

        const header = screen.getByText("Confira seu plano:");

        expect(header).toBeInTheDocument();
    })

    test('should show email', () => {
        renderOfferList(props);

        const email = screen.getByText("any@email.com");

        expect(email).toBeInTheDocument();
    })

    test('should render offer list', () => {
        renderOfferList(props);

        const offerItemsCount = screen.getByTestId('offer-list-section').childNodes.length
        expect(offerItemsCount).toBe(OFFERS_DATA_MOCK.length)
    })

    test('should call onSelect when a card is selected', () => {
        const handler = jest.fn();
        const localProps = {...props, onSelect: handler };
        renderOfferList(localProps);

        const card = screen.getByTestId("offer-card-32");
        fireEvent.click(card);

        expect(handler).toHaveBeenCalled();
    })
    test('should show help info', () => {
        renderOfferList(props);

        const helpInfo = screen.getByText("Sobre a cobrança");

        expect(helpInfo).toBeInTheDocument();
    })

    test('should show help icon', () => {
        renderOfferList(props);

        const icon = screen.getByTestId("help-icon");

        expect(icon).toBeInTheDocument();
    })
})