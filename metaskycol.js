//meta-theme-sky-color by https://github.com/x8BitRain/meta-theme-sky-color/
//Overly commented because i hate vague code)))


//sets up the function to get the current hour

var now = new Date();
var hours = now.getHours();

//skY is the array that stores the HEX color values

var skY = ["9bc5ed", "94dbf8", "87ceeb", "ffa365", "141852", "000", "26282c"];

//just stores the # symbol to put infront of the hex values above
var hX = "#";


//this function combines skY and hX to become #94dbf8,etc and inserts it into the content="" value in the meta-color tag in <head>

function skyCol(f) {
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", hX + skY[f]);
}

//if there's not already a meta-color tag in <head> this will add it.

var link = document.createElement("meta");
link.name = "theme-color";
link.content = "#";
document.getElementsByTagName("head")[0].appendChild(link);

//if the time is between hour a and b, then execute the skyCol function, the 0 in "skyCol(0);" refences the skY array's first value (9bc5ed).
//if (hours > a && hours < b)


if (hours > 4 && hours < 7) {           // 5-6am - early morning
  skyCol(0);
} else if (hours > 6 && hours < 9) {    //7-8 am - morning
  skyCol(1);
} else if (hours > 8 && hours < 17) {   //9am-4pm day - noon
  skyCol(2);
} else if (hours > 16 && hours < 19) {  //5pm-6pm
  skyCol(3);
} else if (hours > 19 && hours < 22) {  //8pm-9pm
  skyCol(4);
} else if (hours > 21 || hours < 5) {   //10pm-4am
  skyCol(5);
} else {
  skyCol(6);                            // if it can't get the time for whatever reason, set the color to a tasteful dark grey.
}
