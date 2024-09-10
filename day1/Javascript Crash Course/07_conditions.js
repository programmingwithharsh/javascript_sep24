var today = "Monday";

/*
if (today == "Monday") {
    console.log("Today is Monday");
} else {
    console.log("Today is Sunday");
}
*/

/*
if (today == "Monday") {
  console.log("Today is Monday");
} else if (today == "Tuesday") {
  console.log("Today is Tuesday");
} else if (today == "Wednesday") {
  console.log("Today is Wednesday");
} else if (today == "Thursday") {
  console.log("Today is Thursday");
} else if (today == "Friday") {
  console.log("Today is Friday");
} else if (today == "Saturday") {
  console.log("Today is Saturday");
} else if (today == "Sunday") {
  console.log("Today is Sunday");
}  else {
  console.log("Today is Holiday");
}
*/

switch ("Monday") {
    case "Monday":
        console.log("Today is Monday");
        break;

    case "Tuesday":
        console.log("Today is Tuesday");
        break;

    case "Wednesday":
        console.log("Today is Wednesday");
        break;

    case "Thursday":
        console.log("Today is Thursday");
        break;

    case "Friday":
        console.log("Today is Friday");
        break;

    case "Saturday":
        console.log("Today is Saturday");
        break;

    case "Sunday":
        console.log("Today is Sunday");
        break;

    default:
        console.log("Today is Holiday");
        break;
};


