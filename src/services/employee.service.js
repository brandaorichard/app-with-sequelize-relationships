const { Address, Employee } = require('../models/');

const getAll = async () => {
  const employees = await Employee.findAll({
    include: { model: Address, as: 'addresses', 
      attributes: { exclude: ['number'] },
    },
  });
  return employees;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
      include: [{ model: Address, as: 'addresses' }],
    });
  return employee;
}

module.exports = { 
  getAll,
  getById
};