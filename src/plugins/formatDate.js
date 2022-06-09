import moment from "moment/min/moment-with-locales.min.js";
// import "moment/locale/vi";
// moment.locale("vi");

function formatDate(seconds) {
  let nowDate = moment().format("D MMMM YYYY");

  let str = moment(seconds * 1000)
    .format("HH:mm, D MMMM YYYY")
    .split(",");

  // console.log(nowDate?.trim() == str[1]?.trim());
  // console.log(moment(seconds * 1000).format("HH:mm"));
  if (nowDate?.trim() == str[1]?.trim()) {
    str = "Hôm nay" + " lúc " + str[0];
  } else {
    str = str[1] + " lúc " + str[0];
  }
  // str = str.toUpperCase();
  // console.log("seconds: " + seconds);
  // console.log("str is : " + str);
  return str;
}

//dddd D MMMM YYYY

function formatTime(seconds) {
  // let nowDate = moment().format("D MMMM YYYY");

  let str = moment(seconds * 1000).format("HH:mm");
  // .split(",");

  // console.log(nowDate?.trim() == str[1]?.trim());
  // console.log(moment(seconds * 1000).format("HH:mm"));

  // str = str[1] + " lúc " + str[0];
  // str = str.toUpperCase();
  // console.log("seconds: " + seconds);
  // console.log("str is : " + str);
  return str;
}

export { formatDate, formatTime };
