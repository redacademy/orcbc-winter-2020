const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    currentUser: (parent, args, { user, prisma }) => {
      if (!user) {
        throw new Error("Not Authenticated");
      }
      return prisma.user({ id: user.id, name: user.name });
    }
  },
  Mutation: {
    register: async (parent, { name, password, email }, ctx, info) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        name,
        password: hashedPassword,
        email
      });

      let token = null;

      if (user) {
        token = jwt.sign(
          {
            id: user.id,
            email: user.email
          },
          process.env.APP_SECRET,
          {
            expiresIn: "2h" // token will expire in 2 hours
          }
        );
      }

      return {
        token,
        user
      };
    },
    login: async (parent, { email, password }, ctx, info) => {
      const user = await ctx.prisma.user({ email });

      if (!user) {
        throw new Error("Invalid Login");
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("Invalid Passowrd");
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        process.env.APP_SECRET,
        {
          expiresIn: "8h" // token will expire in 8 hours
        }
      );
      return {
        token,
        user
      };
    }
  }
};
module.exports = resolvers;
