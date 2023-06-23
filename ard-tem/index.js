const { Board, Thermometer } = require("johnny-five");
const board = new Board({ port: "/dev/cu.usbmodem101" });
board.on("ready", () => {
  const thermometer = new Thermometer({
    controller: "DS18B20",
    pin: 2, // Replace with the actual digital pin the sensor is connected to
  });

  thermometer.on("change", () => {
    console.log(`Temperature: ${thermometer.celsius}°C`);
  });
});
