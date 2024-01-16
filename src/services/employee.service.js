const { Address, Employee } = require('../models/');

const getAll = async () => {
  const employees = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return employees;
};

module.exports = { getAll };