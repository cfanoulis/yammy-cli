

module.exports = (sequelize, db) => {
  Object.defineProperty(db, "users", {
    value: sequelize.define("users", {
      active: sequelize.BOOLEAN,
      username: sequelize.STRING,
      password: sequelize.TEXT("tiny"),
      firstName: sequelize.STRING,
      role: {
        type: sequelize.ENUM,
        values: ["user", "admin"],
      },
    }),
  });
  Object.defineProperty(db, "stores", {
    value: sequelize.define("stores", {
      name: sequelize.TEXT("tiny"),
      serves: {
        type: sequelize.ENUM,
        values: ["Σάντουιτς", "Πίτσα", "Ασιατικό", "Burger"],
      },
      telephone: sequelize.INTEGER(10),
      website: sequelize.STRING(128),
    }),
  });
  sequelize.sync().catch((err) => {
    throw err
  });
};
