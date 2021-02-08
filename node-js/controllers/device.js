const route = require('express').Router();
const models = require('../models');

route.get('/', async (req, res) => {
  const deviceList = await models.Device.findAll();

  res.send(deviceList);
});

route.post('/', async (req, res) => {
  const { device, os, manufacturer } = req.body;
  try {
    var insertedDevice = await models.Device.create({ device: device, manufacturer: manufacturer, os: os });
    res.send(insertedDevice);
  } catch (err) {
    console.log(err);
    res.send({error: err.message })
  }
});

route.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    var insertedDevice = await models.Device.destroy({
      where: {
        id: id
      }
    });
    res.send("successfully deleted");
  } catch (err) {
    console.log(err);
    res.send({error: err.message })
  }
});


module.exports = route