const Document = require('camo').Document;
const Role = require('./role');

class User extends Document {
    constructor() {
        super();

        this.firstName = String;
        this.lastName = String;
        this.email = String;
        this.password = String;
        this.role = Role;
    }
}

module.exports = User;