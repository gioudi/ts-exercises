export type User = {
    id: number,
    name: String,
    username: String,
    email: String,
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geo: {
        lat: Number,
        lng: Number
      }
    },
    phone: Number,
    website: String,
    company: {
      name: String,
      catchPhrase: String,
      bs: String
    }
}