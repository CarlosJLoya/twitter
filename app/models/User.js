class User {
    constructor(id, username, name, bio, updateCreated, lastUpdated) {
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = updateCreated
        this.lastUpdated = lastUpdated
    }
}
module.exports = User
