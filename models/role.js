var Document = require('camo').Document;

class Role extends Document {
    constructor() {
        super();
        this.name = String;
    }
}

module.exports = Role;