// name => RGB To Hex Conversion

// Masala sharti

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// RGB To Hex Conversion
// 5 kyu

const rgb = (r, g, b) =>
  [r, g, b]
    .map((v) => {
      if (v < 255 && v > 0)
        return v < 16
          ? `0${v.toString(16).toUpperCase()}`
          : v.toString(16).toUpperCase();
      else if (v >= 255) return "FF";
      else return "00";
    })
    .join("");

console.log(rgb(244, 82, 8));

//=====================================
// function rgb(r, g, b) {
//   r = Math.max(0, Math.min(255, r));
//   g = Math.max(0, Math.min(255, g));
//   b = Math.max(0, Math.min(255, b));

//   let color = (r << 16) + (g << 8) + b;

//   return ("00000" + color.toString(16).toUpperCase()).slice(-6);
// }
