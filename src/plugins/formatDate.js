import moment from "moment/min/moment-with-locales.min.js";
// import "moment/locale/vi";
moment.locale("vi");

export default function formatDate(seconds) {
  const nowDate = moment().format("D MMMM YYYY");

  let str = moment(seconds * 1000)
    .format("hh:mm, D MMMM YYYY")
    .split(",");

  // console.log(nowDate?.trim() == str[1]?.trim());
  if (nowDate?.trim() == str[1]?.trim()) {
    str = "HÔM NAY" + " lúc " + str[0];
  } else {
    str = str[1] + " lúc " + str[0];
  }

  str = str.toUpperCase();
  return str;
}

//dddd D MMMM YYYY
