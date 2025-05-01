/// security
db.createUser({
  user: "carlos",
  pwd: "carlos",
  roles: ["userAdminAnyDatabase"],
});

db.auth("carlos", "carlos");

db.createUser({ user: "appdev", pwd: "dev", roles: ["readWrite"] });

db.updateUser("appdev", {
  roles: ["readWrite", { role: "readWrite", db: "blog" }],
});
