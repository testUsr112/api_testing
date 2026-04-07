import { expect } from 'chai';
import { ApiClient } from '../clients/bookingClient.js';

describe('Get booking by id', () => {
    const client = new ApiClient();
    let bookingId;
    before(async () => {
        const bookingInformation = {
            'firstname': 'Jim',
            'lastname': 'Brown',
            'totalprice': 111,
            'depositpaid': true,
            'bookingdates': {
                'checkin': '2018-01-01',
                'checkout': '2019-01-01'
            },
            'additionalneeds': 'Breakfast'
        };
        const response = await client.createBooking(bookingInformation);
        const data = await response.json();
        bookingId = data.bookingid;
    });
    it('should get booking by id', async () => {
        const response = await client.getBookingById(bookingId);
        expect(response.status).to.equal(200);
        expect(response.headers.get('content-type')).to.include('application/json');
        const data = await response.json();
        expect(data).to.have.property('firstname');
        expect(data).to.have.property('lastname');
        expect(data).to.have.property('totalprice');
        expect(data).to.have.property('depositpaid');
        expect(data).to.have.property('bookingdates');
        expect(data).to.have.property('additionalneeds');
        expect(data.bookingdates).to.have.property('checkin');
        expect(data.bookingdates).to.have.property('checkout');
    });
});