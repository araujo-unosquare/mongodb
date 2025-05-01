db.createUser({ user: "dbAdmin", pwd: "dev", roles: ["dbAdminAnyDatabase"] });

db.createUser({ user: "usrAdmin", pwd: "dev", roles: ["userAdmin"] });

db.createUser({
  user: "appdev2",
  pwd: "dev",
  roles: [
    { role: "readWrite", db: "customers" },
    { role: "readWrite", db: "sales" },
  ],
});
