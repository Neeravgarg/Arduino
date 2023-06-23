const { Board, Led } = require("johnny-five");
const board = new Board({ port: "/dev/cu.usbmodem101" });

board.on("ready", () => {
    const blink = new Led(13);
    blink.blink(100);
  //   const led = new Led.RGB({
  //     pins: {
  //       red: 9,
  //       green: 10,
  //       blue: 11,
  //     },
  //   });
  //   const colors = ["#FF0000", "#00FF00", "#0000FF"];
  //   let index = 0;
  //   setInterval(() => {
  //     led.color(colors[index]);
  //     index = (index + 1) % colors.length;
  //   }, 1000);
});
