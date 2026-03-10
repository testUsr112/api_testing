export class ApiClient {

    get BASE_URL() {
        return 'https://restful-booker.herokuapp.com';
    }

    get USERNAME() {
        return 'admin';
    }

    get PASSWORD() {
        return 'password123';
    }

    constructor() {
        this.bookingUrl = this.BASE_URL.concat('/booking');
        this.token = 0;
    }

    async createToken() {
        const authUrl = this.BASE_URL.concat('/auth');
        const body = {
            username: this.USERNAME,
            password: this.PASSWORD
        };
        const response = fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(body)
        })
        let data = await response.json();
        this.token = data.token;
        return this.token;
    }

    async createBooking(body) {
        return fetch(this.bookingUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(body)
        })
    }

    async getBookingById(id) {
        return fetch(this.bookingUrl.concat('/', id));
    }

    async updateBooking(id, body) {
        return fetch(this.bookingUrl.concat('/', id), {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
                //'Cookie': 'token='.concat(this.token)
            },
            body: JSON.stringify(body)
        })
    }

    async deleteBooking(id) {
        return fetch(this.bookingUrl.concat('/', id), {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
                //'Cookie': 'token='.concat(this.token)
            }
        })
    }
}