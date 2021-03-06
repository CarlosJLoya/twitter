const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {

    test('1) Create an User object', () => {
        const user = new User(1, "CarlosL", "Carlos", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("CarlosL")
        expect(user.name).toBe("Carlos")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test('2) Add getters', () => {
        const user = new User(1, "CarlosL", "Carlos", "Bio")
        expect(user.getUsername).toBe("CarlosL")
        expect(user.getBio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('3) Add setters', () => {
        const user = new User(1, "CarlosL", "Carlos", "Bio")
        user.setUsername = "Loya"
        expect(user.username).toBe("Loya")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})