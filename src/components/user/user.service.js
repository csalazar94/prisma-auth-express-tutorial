import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  addUser = async (user) => {
    const SALT_ROUNDS = 10;
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const { password, ...createdUser } = await this.prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
    return createdUser;
  };

  getUsers = () => this.prisma.user.findMany({
    select: {
      id: true,
      email: true,
      age: true,
    },
  });

  getUser = (id) => this.prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      age: true,
    },
  });

  getUserByEmail = (email) => this.prisma.user.findUnique({
    where: { email },
  });
}

export default UserService;
