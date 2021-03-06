![alt text](https://raw.githubusercontent.com/x8BitRain/meta-theme-sky-color/master/example/ex.png "Morning, Noon, and Night")

# meta-theme-sky-color
Js snippet that changes the mobile Chrome nav bar color to the color of the sky based on time of day.
It can be modified to change the color of anything by replacing ```document.querySelector('meta[name="theme-color"]')``` to a div or a css class, etc.

## usage

Insert this

```<script src="https://cdn.jsdelivr.net/gh/x8BitRain/meta-theme-sky-color@latest/metaskycol.min.js" type="text/javascript"></script>```

into the ``<head>`` of your webpage.

## demo
Visiting https://btr.pm/test on Chrome android/ios will display the following colors in the nav bar.
Or download the example html file in the example folder.

* #9bc5ed between 5am - 6am.

* #94dbf8 between 7am - 8am.

* #87ceeb between 9am - 4pm.

* #ffa365 between 5pm - 6pm.

* #141852 between 7pm - 9pm.

* #000    between 10pm - 4am.

* #26282c as a fallback.

![alt text](https://raw.githubusercontent.com/x8BitRain/meta-theme-sky-color/master/example/colors.png "Colors in use")
