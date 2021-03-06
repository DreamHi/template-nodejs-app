module.exports = {
  default: "template",
  connections: {
    template: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 27017,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      dbName: process.env.DB_NAME || "template",
    },
  },
};
