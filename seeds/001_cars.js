exports.seed = async function(knex) {
  await knex('cars').insert([
    {
      make: 'GMC',
      model: 'Denali Arcadia',
      VIN: 220334455654,
      mileage: 220000,
      transmission: 'manual',
      titleStatus: 'clean'
    },
    {
      make: 'Honda',
      model: 'Civic',
      VIN: 1234567891,
      mileage: 2000,
      transmission: null,
      titleStatus: 'clean'
    },
    {
      make: 'Ford',
      model: 'Explorer',
      VIN: 2200975643,
      mileage: 2000,
      transmission: 'automatic',
      titleStatus: 'salvage'
    },
    {
      make: 'BMW',
      model: '850iL',
      VIN: 2203342335654,
      mileage: 5000,
      transmission: 'auto',
      titleStatus: 'clean'
    }
  ]);
};
