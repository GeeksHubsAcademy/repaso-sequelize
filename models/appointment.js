'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    PatiendId: DataTypes.INTEGER,
    PhysicianId: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {});
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Patient);
    Appointment.belongsTo(models.Physician);
  };
  return Appointment;
};