/**
 * Programming With JavaScript - QAP2
 *
 *
 * Please update the following with your information, and attach this file to the html page and run it in a browser.
 *
 *      Name: Kassaundra Fequet
 *      Date: June 6/2025 - June 13/2025
 */
window.addEventListener("DOMContentLoaded", function () {
  /*******************************************************************************
   * Problem 1: replace all internal whitespace in a string value with underscore
   * ('_'), and makes it lowercase.
   *
   * We want to be able to convert a string to Lower Snake Case style, so that all
   * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
   * are converted to '_' and all letters are lower cased.
   *
   * The snake() function should work like this:
   *
   * snake('abc') --> returns 'abc'
   * snake(' ABC ') --> returns 'abc'
   * snake('ABC') --> returns 'abc'
   * snake('A BC') --> returns 'a_bc'
   * snake(' A bC  ') --> returns 'a_bc'
   * snake('A   BC') --> returns 'a_bc'
   * snake('A.BC') --> returns 'a_bc'
   * snake(' A..  B   C ') --> returns 'a_b_c'
   *
   ******************************************************************************/

  let snakeForm = document.querySelector("#snakeForm");
  snakeForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    function snake(convertSnake) {
      return convertSnake
        .trim()
        .replace(/[.\s\t]+/g, "_")
        .replace(/_+/g, "_")
        .toLowerCase();
    }

    let snakeInput = document.querySelector("#snakeInput").value;
    let result1 = snake(snakeInput);
    document.getElementById("snakeOutput").innerText = result1;
  });

  /*******************************************************************************
   * Problem 2: create an HTML <video> element for the given url.
   *
   * In HTML, we use markup syntax to indicate how browsers should format elements
   * of a web page.  For example, here is a URL to video:
   *
   * http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4
   *
   * Try navigating to it in your browser.  In order for a web page to know how to
   * interpret this URL (e.g., should we show the text of the URL itself, or use
   * it to load an image? or a video?), we have to use special markup. The <video>
   * tag is how we specify that a URL is to be interpreted as a video, see:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
   *
   * Here is how we might use HTML to markup this video:
   *
   * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>
   *
   * Our <video> has two attributes:
   *
   * - src: the URL to a video file
   * - width: the width to use (in pixels) when showing the video
   *
   * Write the createVideo() function to accept a URL and width, and return the
   * properly formatted video element.  For example:
   *
   * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
   *
   * should return the following string of HTML:
   *
   * '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
   *
   * A <video> can also optionally contain a `controls` attribute, which turns on the play/pause/etc controls. For example:
   *
   * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>
   *
   * In this case, the <video> element should include the user controls.  Therefore,
   * your createVideo() function should also accept a third argument, controls:
   *
   * // No controls
   * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
   * // With controls
   * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true)
   *
   * The returned <video> HTML string should be formatted as follows:
   *
   * - Remove leading/trailing whitespace from src before you use them
   * - The src and width attribute values should be wrapped in double-quotes (e.g., src="..." width="...")
   * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." width="..." controls)
   * - The width attribute should only be added if a vali d integer value (number or string) is included.  Otherwise ignore it.
   *
   * ******************************************************************************/
  let urlForm = document.querySelector("#urlForm");
  urlForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    function createVideo(src, width, controls) {
      src = src.trim();

      let videoString = `<video src="${src}"`;
      if (/^\d+$/.test(width)) {
        videoString += ` width="${width}"`;
      }
      if (controls) {
        videoString += " controls";
      }
      videoString += "></video>";

      return videoString;
    }
    let src = document.querySelector("#srcInput").value;
    let width = document.querySelector("#widthInput").value;
    let controls = document.querySelector("#controlsInput").checked;

    let result2 = createVideo(src, width, controls);
    document.getElementById("urlOutput").innerText = result2;
  });

  /*******************************************************************************
   * Problem 3: extract Date from date string
   *
   * A date string is expected to be formatted as follows:
   *
   * YYYY-MM-DD
   *
   * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
   *
   * January 1, 2021 would therefore be the following date string:
   *
   * 2021-01-01
   *
   * Similarly, September 29, 2021 would be:
   *
   * 2021-09-29
   *
   * Write a function, parseDateString() that accepts a date string of the format
   * specified above, and returns a JavaScript Date object, set to the correct day.
   * In your solution, you are encouraged to use the following Date methods:
   *
   * - setFullYear()
   * - setMonth()
   * - setDate()
   *
   * To help developers using your function, you are asked to provide detailed error
   * messages when the date string is formatted incorrectly.  We will use the `throw`
   * statement to throw an Error object when a particular value is not what we expect, see:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
   *
   * For example: parseDateString('01-01-01') should fail, because the year is
   * not 4 digits.
   *
   * Similarly, parseDateString('2021-1-01') should fail because
   * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
   * the month is not 2 digits.
   *
   * Also, a totally invalid date string should also
   * cause an exception to be thrown, for example parseDateString(null) or
   * parseDateString("this is totally wrong").
   *
   ******************************************************************************/

  let dateStringForm = document.querySelector("#dateStringForm");
  dateStringForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    function parseDateString(date1) {
      let date1Regex = /^(\d{4})-(\d{2})-(\d{2})$/;
      if (!date1Regex.test(date1))
        throw new Error("ERROR - YYYY-MM-DD format required");

      let [year1, month1, day1] = date1.split("-");

      year1 = Number(year1);
      month1 = Number(month1);
      day1 = Number(day1);

      if (month1 < 1 || month1 > 12) throw new Error("ERROR - Invalid month");
      if (day1 < 1 || day1 > 31) throw new Error("ERROR - Invalid day");

      let dateResult1 = new Date();
      dateResult1.setFullYear(year1);
      dateResult1.setMonth(month1 - 1);
      dateResult1.setDate(day1);
      return dateResult1;
    }

    let dateString = document.querySelector("#dateStringInput").value;

    let result3 = parseDateString(dateString);
    document.getElementById("dateStringOutput").innerText = result3;
  });

  /*******************************************************************************
   * Problem 4: convert Date to date string with specified format.
   *
   * As above, a date string is expected to be formatted as follows:
   *
   * YYYY-MM-DD
   *
   * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
   *
   * Write a function, toDateString() that accepts a Date object, and returns a
   * date string formatted according to the specification above. Make sure your
   * day and month values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
   *
   * In your solution, you are encouraged to use the following Date methods:
   *
   * - setFullYear()
   * - setMonth()
   * - setDate()
   *
   * NOTE: it should be possible to use parseDateString() from the previous question
   * and toDateString() to reverse each other. For example:
   *
   * toDateString(parseDateString('2021-01-29)) should return '2021-01-29'
   *
   * If an invalid Date is passed, throw an Error object with an appropriate error message.
   * HINT: use try/catch, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
   *
   ******************************************************************************/

  let dateObjectForm = document.querySelector("#dateObjectForm");
  dateObjectForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    function toDateString(date2) {
      try {
        if (!date2) {
          throw new Error("ERROR - Invalid/No Date Selected");
        }

        let dateObj;

        if (date2 instanceof Date) {
          dateObj = date2;
        } else {
          dateObj = new Date(date2 + "T00:00");
        }

        let year2 = String(dateObj.getFullYear());
        let month2 = String(dateObj.getMonth() + 1).padStart(2, "0");
        let day2 = String(dateObj.getDate()).padStart(2, "0");

        let dateResult2 = `${year2}-${month2}-${day2}`;
        return dateResult2;
      } catch (error) {
        console.log(error.message);
      }
    }

    let dateObject = document.querySelector("#dateObjectInput").value;

    try {
      let result4 = toDateString(dateObject);
      document.getElementById("dateObjectOutput").innerText = result4;
    } catch (error) {
      document.getElementById("dateObjectOutput").innerText = `${error}`;
    }
  });

  /*******************************************************************************
   * Problem 5: parse a geographic coordinate
   *
   * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
   * A example, let's suppose the Keyin College St.John's campus is located at:
   *
   * Longitude: -77.4369 (negative number means West)
   * Latitude: 42.9755 (positive number means North)
   *
   * A dataset includes thousands of geographic coordinates, stored as strings.
   * However, over the years, different authors have used slightly different formats.
   * All of the following are valid and need to be parsed:
   *
   * 1. "42.9755,-77.4369" NOTE: no space
   * 4. "[-77.4369, 42.9755]" NOTE: the space, as well as lat/lng values are reversed
   *
   * Valid Longitude values are decimal numbers between -180 and 180.
   *
   * Valid Latitude values are decimal numbers between -90 and 90.
   *
   * Parse the value and reformat it into the form: "(lat, lng)"
   *
   ******************************************************************************/
  function normalizeCoord(coordValue) {
    coordValue = coordValue
      .replace(/^[\s\[\]\(\)\{\}]+|[\s\[\]\(\)\{\}]+$/g, "")
      .trim();

    let coordSplit = coordValue.split(",");

    if (coordSplit.length !== 2) {
      throw new Error("ERROR - Invalid coordinate");
    }

    let split1 = parseFloat(coordSplit[0].trim());
    let split2 = parseFloat(coordSplit[1].trim());

    if (isNaN(split1) || isNaN(split2)) {
      throw new Error("ERROR - Coordinates need to be numbers");
    }

    let lat;
    let long;

    if (split1 >= -90 && split1 <= 90 && split2 >= -180 && split2 <= 180) {
      lat = split1;
      long = split2;
    } else if (
      split2 >= -90 &&
      split2 <= 90 &&
      split1 >= -180 &&
      split1 <= 180
    ) {
      lat = split2;
      long = split1;
    } else {
      throw new Error("ERROR - Coordinates are out of range");
    }

    let latlongResult = `(${lat}, ${long})`;
    return latlongResult;
  }

  let coordForm = document.querySelector("#coordForm");
  coordForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let coordValue = document.querySelector("#coordInput").value;
    let result5;
    result5 = normalizeCoord(coordValue);
    document.getElementById("coordOutput").innerText = result5;
  });

  /*******************************************************************************
   * Problem 6: format any number of coordinates as a list in a string
   *
   * You are asked to format geographic lat, lng coordinates in a list using your
   * normalizeCoord() function from problem 5.
   *
   * Where normalizeCoord() takes a single geographic coord, the formatCoords()
   * function takes a list of any number of geographic coordinates, parses them,
   * filters out any invalid coords, and creates a list.
   *
   * For example: given the following coords, "42.9755,-77.4369" and "[-62.1234, 42.9755]",
   * a new list would be created of the following form "((42.9755, -77.4369), (42.9755, -62.1234))".
   *
   * Notice how the list has been enclosed in an extra set of (...) braces, and each
   * formatted geographic coordinate is separated by a comma and space.
   *
   * The formatCoords() function can take any number of arguments, but they must all
   * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
   * an Error is thrown), skip the value.  For example:
   *
   * formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000") should return
   * "((42.9755, -77.4369), (42.9755, -62.1234))" and skip the invalid coordinate.
   *

  ******************************************************************************/
  let multCoordForm = document.querySelector("#multCoordForm");
  multCoordForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    function formatCoords(coordsValue) {
      if (coordsValue === "") {
        alert("ERROR - Empty coordinates");
        return;
      } else {
        let coordRows = coordsValue.split("\n");
        let rowsArray = [];
        coordRows.forEach(function (row) {
          let rowsTrim = row.trim();
          if (rowsTrim.length > 0) rowsArray.push(rowsTrim);
        });

        let Coords = [];
        let i = 0;
        while (i < rowsArray.length) {
          let rowsFormat = normalizeCoord(rowsArray[i]);
          if (rowsFormat) Coords.push(rowsFormat);
          i++;
        }
        if (Coords.length === 0) return "(ERROR - No valid coordinates)";
        return `(${Coords.join(", ")})`;
      }
    }

    let coordsValue = document.querySelector("#multCoordInput").value;

    let result6 = formatCoords(coordsValue);
    document.getElementById("multCoordOutput").innerText = result6;
  });

  /*******************************************************************************
   * Problem 7: determine MIME type from filename extension
   *
   * Web browsers and servers exchange streams of bytes, which must be interpreted
   * by the receiver based on their type.  For example, an HTML web page is
   * plain text, while a JPG image is a binary sequence.
   *
   * The Content-Type header contains information about a resource's MIME type, see:
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
   *
   * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
   * The type is general, for example, 'text' or 'video'.  The subtype is more
   * specific, indicating the specific type of text, image, video, etc.  See:
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
   *
   * A number of common types are used in web development:
   *
   * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
   *
   * Your mimeFromFilename() function should support all of the following extensions
   * with and without the leading '.':
   *
   * - .html, .htm --> text/html
   * - .css --> text/css
   * - .js --> text/javascript
   * - .jpg, .jpeg --> image/jpeg
   * - .gif --> image/gif
   * - .bmp --> image/bmp
   * - .ico, .cur --> image/x-icon
   * - .png --> image/png
   * - .svg --> image/svg+xml
   * - .webp --> image/webp
   * - .mp3 --> audio/mp3
   * - .wav --> audio/wav
   * - .mp4 --> video/mp4
   * - .webm --> video/webm
   * - .json --> application/json
   * - .mpeg --> video/mpeg
   * - .csv --> text/csv
   * - .ttf --> font/ttf
   * - .woff --> font/woff
   * - .zip --> application/zip
   * - .avi --> video/x-msvideo
   *
   *
   * NOTE: any other extension should use the `application/octet-stream` MIME type,
   * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
   * also use `application/octet-stream` if the file has no extension.
   *

  ******************************************************************************/
  let mimeForm = document.querySelector("#mimeForm");
  mimeForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    function mimeFromFilename(filename) {
      filename = filename.trim();

      let file = filename.split(".").pop().toLowerCase();

      let mimeFile;
      switch (file) {
        case "txt":
          mimeFile = "text/plain";
          break;

        case "html":
        case "htm":
          mimeFile = "text/html";
          break;

        case "css":
          mimeFile = "text/css";
          break;

        case "js":
          mimeFile = "text/javascript";
          break;

        case "jpg":
        case "jpeg":
          mimeFile = "image/jpeg";
          break;

        case "gif":
          mimeFile = "image/gif";
          break;

        case "bmp":
          mimeFile = "image/bmp";
          break;

        case "ico":
        case "cur":
          mimeFile = "image/x-icon";
          break;

        case "png":
          mimeFile = "image/png";
          break;

        case "svg":
          mimeFile = "image/svg+xml";
          break;

        case "webp":
          mimeFile = "image/webp";
          break;

        case "mp3":
          mimeFile = "audio/mp3";
          break;

        case "wav":
          mimeFile = "audio/wav";
          break;

        case "mp4":
          mimeFile = "video/mp4";
          break;

        case "webm":
          mimeFile = "video/webm";
          break;

        case "json":
          mimeFile = "application/json";
          break;

        case "mpeg":
          mimeFile = "video/mpeg";
          break;

        case "csv":
          mimeFile = "text/csv";
          break;

        case "ttf":
          mimeFile = "font/ttf";
          break;

        case "woff":
          mimeFile = "font/woff";
          break;

        case "zip":
          mimeFile = "application/zip";
          break;

        case "avi":
          mimeFile = "video/x-msvideo";
          break;

        default:
          mimeFile = "application/octet-stream";
      }
      return mimeFile;
    }

    let mimeInput = document.querySelector("#mimeInput").value;

    let result7 = mimeFromFilename(mimeInput);
    document.getElementById("mimeOutput").innerText = result7;
  });

  /*******************************************************************************
   * Problem 8, Part 1: generate license text and link from license code.
   *
   * Images, videos, and other resources on the web are governed by copyright.
   * Everything you find on the web is copyright to its creator automatically, and
   * you cannot reuse it unless you are granted a license to do so.
   *
   * Different licenses exist to allow creators to share their work. For example,
   * the Creative Commons licenses are a popular way to allow people to reuse
   * copyright material, see https://creativecommons.org/licenses/.
   *
   * Below is a list of license codes, and the associated license text explaining the code:
   *
   * CC-BY: Creative Commons Attribution License
   * CC-BY-NC: Creative Commons Attribution-NonCommercial License
   * CC-BY-SA: Creative Commons Attribution-ShareAlike License
   * CC-BY-ND: Creative Commons Attribution-NoDerivs License
   * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
   * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
   *
   * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
   * and the explanation text, "All Rights Reserved"
   *
   * Write a function, generateLicenseLink(), which takes a license code, and returns
   * an HTML link to the appropriate license URL, and including the explanation text.
   *
   * For example:
   *
   * generateLicenseLink('CC-BY-NC') should return the following HTML string:
   *
   * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
   *
   * The URL is generated based on the license code:
   *
   * - remove the `CC-` prefix
   * - convert to lower case
   * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
   *
   * Your generateLicenseLink() function should also accept an optional second argument,
   * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
   * so that the URL opens in a blank tab/window.
   *
   * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   *
   ******************************************************************************/

  let licenseForm = document.querySelector("#licenseForm");
  licenseForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    function generateLicenseLink(licenseCode, targetBlank) {
      licenseCode = licenseCode.trim().toLowerCase();
      let newCode = licenseCode.replace(/^cc-/, "");

      let licenseText, licenseUrl;

      switch (newCode) {
        case "by":
          licenseText = "Creative Commons Attribution License";
          licenseUrl = "https://creativecommons.org/licenses/by/4.0/";
          break;
        case "by-nc":
          licenseText = "Creative Commons Attribution-NonCommercial License";
          licenseUrl = "https://creativecommons.org/licenses/by-nc/4.0/";
          break;
        case "by-sa":
          licenseText = "Creative Commons Attribution-ShareAlike License";
          licenseUrl = "https://creativecommons.org/licenses/by-sa/4.0/";
          break;
        case "by-nd":
          licenseText = "Creative Commons Attribution-NoDerivs License";
          licenseUrl = "https://creativecommons.org/licenses/by-nd/4.0/";
          break;
        case "by-nc-sa":
          licenseText =
            "Creative Commons Attribution-NonCommercial-ShareAlike License";
          licenseUrl = "https://creativecommons.org/licenses/by-nc-sa/4.0/";
          break;
        case "by-nc-nd":
          licenseText =
            "Creative Commons Attribution-NonCommercial-NoDerivs License";
          licenseUrl = "https://creativecommons.org/licenses/by-nc-nd/4.0/";
          break;
        default:
          licenseText = "All Rights Reserved";
          licenseUrl = "https://choosealicense.com/no-permission/";
      }

      let target = "";
      if (targetBlank) {
        target = ' target="_blank"';
      }

      return `<a href="${licenseUrl}"${target}>${licenseText}</a>`;
    }

    let licenseInput = document.querySelector("#licenseTextInput").value;
    let targetInput = document.querySelector("#licenseCheckInput").checked;

    let result8 = generateLicenseLink(licenseInput, targetInput);
    document.getElementById("licenseOutput").innerHTML = result8;
  });

  /*******************************************************************************
   * Problem 9 Part 1: convert a value to a Boolean (true or false)
   *
   * A dataset contains fields that indicate a value is true or false.  However,
   * users have entered data in various formats and languages (English and French)
   * over the years, and the data is a mess. For example, the dataset contains all
   * of the following values:
   *
   * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
   * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
   *
   * Write a function pureBool() which takes a String, Number, or Boolean,
   * and attempts to convert it into a pure Boolean value, according to these rules:
   *
   * 1. If the value is already a Boolean (true or false) return the value without conversion
   * 2. If the value is one of the "true" type values, return `true` (Boolean)
   * 3. If the value is one of the "false" type values, return `false` (Boolean)
   * 4. If the value is none of the "true" or "false" values, throw an error with the error
   * message, 'invalid value'.
   *
   ******************************************************************************/

  function pureBool(booleanValue) {
    let pureType = Object.prototype.toString.call(booleanValue);

    if (pureType === "[object Boolean]") {
      return booleanValue;
    }

    let numType = Number(booleanValue);
    if (!isNaN(numType) && String(booleanValue).trim() !== "") {
      return numType > 0;
    }

    let stringType = String(booleanValue).trim().toLowerCase();

    let trueValues = ["yes", "y", "t", "true", "oui", "o", "vrai", "v"];
    let falseValues = ["no", "non", "n", "false", "faux", "f"];

    if (trueValues.includes(stringType)) return true;
    if (falseValues.includes(stringType)) return false;

    throw new Error("ERROR - invalid value");
  }

  /*******************************************************************************
   * Problem 9 Part 2: checking for all True or all False values in a normalized list
   *
   * Using your pureBool() function above, create three new functions to check
   * if a list of arguments are all "true", partially "true", or all "false" values:
   *
   * every('Y', 'yes', 1) --> returns true
   * any('Y', 'no', 1) --> returns true
   * none('Y', 'invalid', 1) --> returns false
   *
   * Use try/catch syntax to avoid having your functions throw errors when pureBool()
   * throws on invalid data.
   ******************************************************************************/

  function every(...booInputValues) {
    for (let i = 0; i < booInputValues.length; i++) {
      try {
        if (!pureBool(booInputValues[i])) {
          return false;
        }
      } catch (error) {
        return false;
      }
    }
    return true;
  }

  function any(...booInputValues) {
    for (let i = 0; i < booInputValues.length; i++) {
      try {
        if (pureBool(booInputValues[i])) {
          return true;
        }
      } catch (error) {}
    }
    return false;
  }

  function none(...booInputValues) {
    for (let i = 0; i < booInputValues.length; i++) {
      try {
        if (pureBool(booInputValues[i])) {
          return false;
        }
      } catch (error) {}
    }
    return true;
  }

  document
    .getElementById("booleanForm")
    .addEventListener("submit", function (evt) {
      evt.preventDefault();

      let booInputValues = [];
      let booleanInput = document.getElementById("booleanInput").value;

      if (booleanInput !== "") {
        let booValuesArray = booleanInput.split(",");
        for (let i = 0; i < booValuesArray.length; i++) {
          let booTrimValue = booValuesArray[i].trim();
          if (booTrimValue.length > 0) {
            booInputValues.push(booTrimValue);
          }
        }
      }

      try {
        if (booInputValues.length === 0) {
          throw new Error("ERROR - invalid value");
        }

        if (booInputValues.length === 1) {
          let result9half = pureBool(booInputValues[0]);
          document.getElementById("booleanOutput").innerText = `${result9half}`;
        } else {
          let resultEvery = every(...booInputValues);
          let resultAny = any(...booInputValues);
          let resultNone = none(...booInputValues);

          document.getElementById(
            "booleanOutput"
          ).innerText = `Every: ${resultEvery}\nAny: ${resultAny}\nNone: ${resultNone}`;
        }
      } catch (error) {
        console.error(error);
      }
    });

  /*******************************************************************************
   * Problem 10 - build a URL
   *
   * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
   * for data involves formatting a URL in a particular way.  As we know might know, a URL can contain optional name=value pairs. For reference: read query strings on web :)
   *
   * For example:
   *
   *   https://www.store.com/search?q=dog includes q=dog
   *
   *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
   *   both _encoding=UTF8 and also node=18521080011, separated by &
   *
   * We will write a buildUrl() function to build a URL for the iNaturalist API
   * based on arguments passed by the caller.
   *
   * The buildUrl() function accepts the following arguments:
   *
   * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
   * - order: a string indicating sort order, with possible values of `ascending` or `descending`
   * - count: a number from 1 to 50, indicating how many results to return per page
   * - license: a string indicating which items to return (e.g., which license they use). Possible
   *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
   *
   * Write an implementation of buildUrl() that accepts arguments for all of the above
   * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
   * a properly formatted URL.
   *
   * For example:
   *
   * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
   *
   * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
   *
   * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
   *
   * NOTE: make sure you properly encode the query value, since URLs can't contain
   * spaces or other special characters. HINT: use the encodeURIComponent() function
   * to do this, see:
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
   *
   * The following might be the parameters
   *
   *  "query" the query to use. Must be properly URI encoded
   * "order" the sort order to use, must be one of `ascending` or `descending`
   * "count" the number of results per page, must be 1-50
   * "license" the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
   *
   ******************************************************************************/

  let orderValues = [
    { value: "", label: "Select order" },
    { value: "ascending", label: "Ascending" },
    { value: "descending", label: "Descending" },
  ];

  let licenseValues = [
    { value: "", label: "Select license" },
    { value: "none", label: "None" },
    { value: "any", label: "Any" },
    { value: "cc-by", label: "CC-BY" },
    { value: "cc-by-nc", label: "CC-BY-NC" },
    { value: "cc-by-sa", label: "CC-BY-SA" },
    { value: "cc-by-nd", label: "CC-BY-ND" },
    { value: "cc-by-nc-sa", label: "CC-BY-NC-SA" },
    { value: "cc-by-nc-nd", label: "CC-BY-NC-ND" },
  ];

  let urlOrderInput = document.getElementById("urlOrderInput");
  let urlLicenseInput = document.getElementById("urlLicenseInput");

  for (let i = 0; i < orderValues.length; i++) {
    let orderOption = document.createElement("option");
    orderOption.value = orderValues[i].value;
    orderOption.innerText = orderValues[i].label;
    urlOrderInput.appendChild(orderOption);
  }

  for (let i = 0; i < licenseValues.length; i++) {
    let licenseOption = document.createElement("option");
    licenseOption.value = licenseValues[i].value;
    licenseOption.innerText = licenseValues[i].label;
    urlLicenseInput.appendChild(licenseOption);
  }

  function buildUrl(query, order, count, license) {
    if (!query) {
      throw new Error("ERROR - query is required.");
    }

    let encodedQuery = encodeURIComponent(query);

    switch (order) {
      case "ascending":
      case "descending":
        break;
      default:
        throw new Error("ERROR - order is required.");
    }

    if (!Number.isInteger(count) || count < 1 || count > 50) {
      throw new Error("ERROR - must be a number between 1 and 50.");
    }

    switch (license) {
      case "none":
      case "any":
      case "cc-by":
      case "cc-by-nc":
      case "cc-by-sa":
      case "cc-by-nd":
      case "cc-by-nc-sa":
      case "cc-by-nc-nd":
        break;
      default:
        throw new Error("ERROR - license must be one listed.");
    }

    let result10 = `https://api.inaturalist.org/v2/observations?query='${encodedQuery}'&count=${count}&order=${order}&license=${license}`;

    return result10;
  }

  let buildUrlOutput = document.getElementById("buildUrlOutput");

  document.getElementById("buildURLForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let urlQuery = document.getElementById("urlQueryInput").value.trim();
    let urlOrder = document.getElementById("urlOrderInput").value.trim();
    let urlCountValue = document.getElementById("count").value.trim();
    let urlCount = urlCountValue === "" ? NaN : parseInt(urlCountValue, 10);
    let urlLicense = document.getElementById("urlLicenseInput").value.trim();

    try {
      let result10 = buildUrl(urlQuery, urlOrder, urlCount, urlLicense);
      buildUrlOutput.innerText = `${result10}`;
    } catch (error) {
      buildUrlOutput.innerText = `${error}`;
    }
  });
});
