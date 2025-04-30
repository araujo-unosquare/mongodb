db.persons.aggregate([
  { $match: { "dob.age": { $gt: 50 } } },
  {
    $group: {
      _id: "$gender",
      totalPersons: { $sum: 1 },
      avgAge: { $avg: "$dob.age" },
    },
  },
  { $sort: { totalPersons: -1 } },
]);
