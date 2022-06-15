const generateColor = (char) => {
  switch (char) {
    case "A":
    case "8":
    case "B":
      return "#FF3399";
    case "6":
    case "D":
    case "G":
    case "E":
      return "#00CC33";
    case "X":
    case "I":
    case "H":
      return "#FFCC66";
    case "S":
    case "3":
    case "K":
      return "#FFCC33";
    case "L":
    case "2":
    case "M":
    case "N":
      return "#3399FF";
    case "Q":
    case "0":
    case "P":
    case "F":
      return "#FF6600";
    case "5":
    case "R":
    case "C":
    case "7":
    case "T":
      return "#FF9999";
    case "U":
    case "4":
    case "V":
    case "9":
    case "Y":
    case "1":
      return "#3399CC";
    default:
      return "#ddd";
  }
};

const createAvtString = function (string) {
  if (string) {
    const arr = string.split(" ");
    const char1 = arr[0].charAt(0)?.toUpperCase();
    // const char2 = arr[1] ? arr[1].charAt(0)?.toUpperCase() : "";

    const str = char1; //+ char2;
    return {
      name: str,
      color: generateColor(str.charAt(0)),
    };
  } else {
    return {
      name: "",
      color: "#ddd",
    };
  }
};

// export default {
//     // Inject $hello(msg) in Vue, context and store.
//     install: (app, options) => {
//       app.config.globalProperties.$markdown = markdown;
//     },
//   };

export default createAvtString;
