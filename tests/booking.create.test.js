import { expect } from 'chai';
import { ApiClient } from '../clients/bookingClient.js';

describe('Create booking', () => {
    const client = new ApiClient();
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
    it('should create a booking', async () => {
        const response = await client.createBooking(bookingInformation);
        expect(response.status).to.equal(200);
        expect(response.headers.get('content-type')).to.include('application/json');
    });
});