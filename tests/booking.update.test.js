import { expect } from 'chai'
import { ApiClient } from '../clients/bookingClient.js'

describe('Update booking', () => {
    const client = new ApiClient()
    let bookingId
    before(async () => {
        const bookingInformation = {
            firstname: 'Jim',
            lastname: 'Brown',
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: '2018-01-01',
                checkout: '2019-01-01',
            },
            additionalneeds: 'Breakfast',
        }
        const response =
            await client.createBooking(
                bookingInformation
            )
        const data = await response.json()
        bookingId = data.bookingid
    })
    it('should update booking', async () => {
        const updatedBbookingInformation = {
            firstname: 'Tom',
            lastname: 'Black',
            totalprice: 222,
            depositpaid: false,
            bookingdates: {
                checkin: '2018-01-01',
                checkout: '2019-01-01',
            },
            additionalneeds: 'Dinner',
        }
        const response =
            await client.updateBooking(
                bookingId,
                updatedBbookingInformation
            )
        expect(response.status).to.equal(200)
        expect(
            response.headers.get('content-type')
        ).to.include('application/json')
        const data = await response.json()
        expect(data.firstname).to.equal(
            updatedBbookingInformation.firstname
        )
        expect(data.lastname).to.equal(
            updatedBbookingInformation.lastname
        )
        expect(data.totalprice).to.equal(
            updatedBbookingInformation.totalprice
        )
        expect(data.depositpaid).to.equal(
            updatedBbookingInformation.depositpaid
        )
        expect(
            data.bookingdates.checkin
        ).to.equal(
            updatedBbookingInformation
                .bookingdates.checkin
        )
        expect(
            data.bookingdates.checkout
        ).to.equal(
            updatedBbookingInformation
                .bookingdates.checkout
        )
        expect(data.additionalneeds).to.equal(
            updatedBbookingInformation.additionalneeds
        )
    })
})
