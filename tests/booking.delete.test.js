import { expect } from 'chai';
import { ApiClient } from '../clients/bookingClient.js';

describe('Delete booking', () => {
    const client = new ApiClient();
    let bookingId;
    before(async () => {
        let bookingInformation = {
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
        let response = await client.createBooking(bookingInformation);
        const data = await response.json();
        bookingId = data.bookingid;
    });
    it('should delete booking', async () => {
        const response = await client.deleteBooking(bookingId);
        expect(response.status).to.equal(201);
    })
});