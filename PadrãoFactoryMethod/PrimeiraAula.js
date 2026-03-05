class Profile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class ProfileFactory {
    createProfile(name, age) {
        return new Profile(name, age);
    }
}


const factory = new ProfileFactory();
const profile1 = factory.createProfile('Alice', 30);
const profile2 = factory.createProfile('Bob', 25);

console.log(profile1); 
console.log(profile2); 