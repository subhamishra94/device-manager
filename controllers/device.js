const route = require("express").Router();
const models = require("../models");
const Sequelize = require("sequelize");

route.get("/", async (req, res) => {
  const deviceList = await models.Device.findAll({
    where: {
      isDeleted: false
    },
    attributes: [
      'id',
      'device',
      'os',
      'manufacturer',
      'isCheckedOut',
      'lastCheckedoutBy',
      'lastCheckedOutDate',
      [Sequelize.fn("AVG", Sequelize.col("Feedbacks.rating")), "avgRating"],
    ],
    include: models.Feedback,
    group: ['Device.id']
  });

  res.send(deviceList);
});

route.post("/", async (req, res) => {
  const { device, os, manufacturer } = req.body;
  try {
    var insertedDevice = await models.Device.create({
      device: device,
      manufacturer: manufacturer,
      os: os,
    });
    res.send(insertedDevice);
  } catch (err) {
    console.log(err);
    res.send({ error: err.message });
  }
});

route.delete("/:deviceId", async (req, res) => {
  const { deviceId } = req.params;
  try {
    var deletedDeviceId = await models.Device.update(
      {
        isDeleted: true
      },
    {
      where: {
        id: deviceId,
      },
    });
    res.send("successfully deleted device with id " + deletedDeviceId);
  } catch (err) {
    console.log(err);
    res.send({ error: err.message });
  }
});

route.post("/check-in-out", async (req, res) => {
  const { checkoutBy, deviceId, rating } = req.body;
  try {
    if (checkoutBy) {
      var updateDevice = await models.Device.update(
        {
          lastCheckedoutBy: checkoutBy,
          isCheckedOut: true,
          lastCheckedOutDate: new Date(),
        },
        {
          where: {
            id: deviceId,
          },
        }
      );
      res.send({ isSuccess: updateDevice });
    } else {
      var updateDevice = await models.Device.update(
        {
          isCheckedOut: false,
        },
        {
          where: {
            id: deviceId,
          },
        }
      );
      const device = await models.Device.findOne({
        where: {
          id: deviceId,
        },
      });

      await models.Feedback.create({
        deviceId,
        checkedUser: device.lastCheckedoutBy,
        rating,
      });

      res.send({ isSuccess: updateDevice });
    }
  } catch (err) {
    console.log(err);
    res.send({ error: err.message });
  }
});

module.exports = route;
