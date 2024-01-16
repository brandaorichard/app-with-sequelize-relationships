const EmployeeService = require('../services/employee.service');
const AddressService = require('../services/address.service');

const getAll = async (_req, res) => {
  try {
    const employees = await EmployeeService.getAll();
    return res.status(200).json(employees);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await EmployeeService.getById(id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      if (req.query.includeAddresses === 'true') {
        const addresses = await AddressService.getAllByEmployeeId(id);
        return res.status(200).json({ employee, addresses });
      }
      return res.status(200).json(employee);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    };
  }

module.exports = {
  getAll,
  getById
};