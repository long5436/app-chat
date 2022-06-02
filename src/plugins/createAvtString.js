const createAvtString = function (string) {
  if (string) {
    const arr = string.split(" ");
    const char1 = arr[0].charAt(0)?.toUpperCase();
    const char2 = arr[1] ? arr[1].charAt(0)?.toUpperCase() : "";

    const str = char1 + char2;
    return str;
  } else {
    return "";
  }
};

// export default {
//     // Inject $hello(msg) in Vue, context and store.
//     install: (app, options) => {
//       app.config.globalProperties.$markdown = markdown;
//     },
//   };

export default createAvtString;
