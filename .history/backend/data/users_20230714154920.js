import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'sanishsoftwarica@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  }
]

export default users
