/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/style.css
var style = __webpack_require__(0);

// CONCATENATED MODULE: ./src/country-codes.js
var isoCountries = {
  AF: {
    name: 'Afghanistan'
  },
  AX: {
    name: 'Aland Islands'
  },
  AL: {
    name: 'Albania'
  },
  DZ: {
    name: 'Algeria'
  },
  AS: {
    name: 'American Samoa'
  },
  AD: {
    name: 'Andorra'
  },
  AO: {
    name: 'Angola'
  },
  AI: {
    name: 'Anguilla'
  },
  AQ: {
    name: 'Antarctica'
  },
  AG: {
    name: 'Antigua And Barbuda'
  },
  AR: {
    name: 'Argentina'
  },
  AM: {
    name: 'Armenia'
  },
  AW: {
    name: 'Aruba'
  },
  AU: {
    name: 'Australia'
  },
  AT: {
    name: 'Austria'
  },
  AZ: {
    name: 'Azerbaijan'
  },
  BS: {
    name: 'Bahamas'
  },
  BH: {
    name: 'Bahrain'
  },
  BD: {
    name: 'Bangladesh'
  },
  BB: {
    name: 'Barbados'
  },
  BY: {
    name: 'Belarus'
  },
  BE: {
    name: 'Belgium'
  },
  BZ: {
    name: 'Belize'
  },
  BJ: {
    name: 'Benin'
  },
  BM: {
    name: 'Bermuda'
  },
  BT: {
    name: 'Bhutan'
  },
  BO: {
    name: 'Bolivia'
  },
  BA: {
    name: 'Bosnia And Herzegovina'
  },
  BW: {
    name: 'Botswana'
  },
  BV: {
    name: 'Bouvet Island'
  },
  BR: {
    name: 'Brazil'
  },
  IO: {
    name: 'British Indian Ocean Territory'
  },
  BN: {
    name: 'Brunei Darussalam'
  },
  BG: {
    name: 'Bulgaria'
  },
  BF: {
    name: 'Burkina Faso'
  },
  BI: {
    name: 'Burundi'
  },
  KH: {
    name: 'Cambodia'
  },
  CM: {
    name: 'Cameroon'
  },
  CA: {
    name: 'Canada'
  },
  CV: {
    name: 'Cape Verde'
  },
  KY: {
    name: 'Cayman Islands'
  },
  CF: {
    name: 'Central African Republic'
  },
  TD: {
    name: 'Chad'
  },
  CL: {
    name: 'Chile'
  },
  CN: {
    name: 'China'
  },
  CX: {
    name: 'Christmas Island'
  },
  CC: {
    name: 'Cocos (Keeling) Islands'
  },
  CO: {
    name: 'Colombia'
  },
  KM: {
    name: 'Comoros'
  },
  CG: {
    name: 'Congo'
  },
  CD: {
    name: 'Congo, Democratic Republic'
  },
  CK: {
    name: 'Cook Islands'
  },
  CR: {
    name: 'Costa Rica'
  },
  CI: {
    name: 'Cote D\'Ivoire'
  },
  HR: {
    name: 'Croatia'
  },
  CU: {
    name: 'Cuba'
  },
  CY: {
    name: 'Cyprus'
  },
  CZ: {
    name: 'Czech Republic'
  },
  DK: {
    name: 'Denmark'
  },
  DJ: {
    name: 'Djibouti'
  },
  DM: {
    name: 'Dominica'
  },
  DO: {
    name: 'Dominican Republic'
  },
  EC: {
    name: 'Ecuador'
  },
  EG: {
    name: 'Egypt'
  },
  SV: {
    name: 'El Salvador'
  },
  GQ: {
    name: 'Equatorial Guinea'
  },
  ER: {
    name: 'Eritrea'
  },
  EE: {
    name: 'Estonia'
  },
  ET: {
    name: 'Ethiopia'
  },
  FK: {
    name: 'Falkland Islands (Malvinas)'
  },
  FO: {
    name: 'Faroe Islands'
  },
  FJ: {
    name: 'Fiji'
  },
  FI: {
    name: 'Finland'
  },
  FR: {
    name: 'France'
  },
  GF: {
    name: 'French Guiana'
  },
  PF: {
    name: 'French Polynesia'
  },
  TF: {
    name: 'French Southern Territories'
  },
  GA: {
    name: 'Gabon'
  },
  GM: {
    name: 'Gambia'
  },
  GE: {
    name: 'Georgia'
  },
  DE: {
    name: 'Germany'
  },
  GH: {
    name: 'Ghana'
  },
  GI: {
    name: 'Gibraltar'
  },
  GR: {
    name: 'Greece'
  },
  GL: {
    name: 'Greenland'
  },
  GD: {
    name: 'Grenada'
  },
  GP: {
    name: 'Guadeloupe'
  },
  GU: {
    name: 'Guam'
  },
  GT: {
    name: 'Guatemala'
  },
  GG: {
    name: 'Guernsey'
  },
  GN: {
    name: 'Guinea'
  },
  GW: {
    name: 'Guinea-Bissau'
  },
  GY: {
    name: 'Guyana'
  },
  HT: {
    name: 'Haiti'
  },
  HM: {
    name: 'Heard Island & Mcdonald Islands'
  },
  VA: {
    name: 'Holy See (Vatican City State)'
  },
  HN: {
    name: 'Honduras'
  },
  HK: {
    name: 'Hong Kong'
  },
  HU: {
    name: 'Hungary'
  },
  IS: {
    name: 'Iceland'
  },
  IN: {
    name: 'India'
  },
  ID: {
    name: 'Indonesia'
  },
  IR: {
    name: 'Iran, Islamic Republic Of'
  },
  IQ: {
    name: 'Iraq'
  },
  IE: {
    name: 'Ireland'
  },
  IM: {
    name: 'Isle Of Man'
  },
  IL: {
    name: 'Israel'
  },
  IT: {
    name: 'Italy'
  },
  JM: {
    name: 'Jamaica'
  },
  JP: {
    name: 'Japan'
  },
  JE: {
    name: 'Jersey'
  },
  JO: {
    name: 'Jordan'
  },
  KZ: {
    name: 'Kazakhstan'
  },
  KE: {
    name: 'Kenya'
  },
  KI: {
    name: 'Kiribati'
  },
  KR: {
    name: 'Korea'
  },
  KW: {
    name: 'Kuwait'
  },
  KG: {
    name: 'Kyrgyzstan'
  },
  LA: {
    name: 'Lao People\'s Democratic Republic'
  },
  LV: {
    name: 'Latvia'
  },
  LB: {
    name: 'Lebanon'
  },
  LS: {
    name: 'Lesotho'
  },
  LR: {
    name: 'Liberia'
  },
  LY: {
    name: 'Libyan Arab Jamahiriya'
  },
  LI: {
    name: 'Liechtenstein'
  },
  LT: {
    name: 'Lithuania'
  },
  LU: {
    name: 'Luxembourg'
  },
  MO: {
    name: 'Macao'
  },
  MK: {
    name: 'Macedonia'
  },
  MG: {
    name: 'Madagascar'
  },
  MW: {
    name: 'Malawi'
  },
  MY: {
    name: 'Malaysia'
  },
  MV: {
    name: 'Maldives'
  },
  ML: {
    name: 'Mali'
  },
  MT: {
    name: 'Malta'
  },
  MH: {
    name: 'Marshall Islands'
  },
  MQ: {
    name: 'Martinique'
  },
  MR: {
    name: 'Mauritania'
  },
  MU: {
    name: 'Mauritius'
  },
  YT: {
    name: 'Mayotte'
  },
  MX: {
    name: 'Mexico'
  },
  FM: {
    name: 'Micronesia, Federated States Of'
  },
  MD: {
    name: 'Moldova'
  },
  MC: {
    name: 'Monaco'
  },
  MN: {
    name: 'Mongolia'
  },
  ME: {
    name: 'Montenegro'
  },
  MS: {
    name: 'Montserrat'
  },
  MA: {
    name: 'Morocco'
  },
  MZ: {
    name: 'Mozambique'
  },
  MM: {
    name: 'Myanmar'
  },
  NA: {
    name: 'Namibia'
  },
  NR: {
    name: 'Nauru'
  },
  NP: {
    name: 'Nepal'
  },
  NL: {
    name: 'Netherlands'
  },
  AN: {
    name: 'Netherlands Antilles'
  },
  NC: {
    name: 'New Caledonia'
  },
  NZ: {
    name: 'New Zealand'
  },
  NI: {
    name: 'Nicaragua'
  },
  NE: {
    name: 'Niger'
  },
  NG: {
    name: 'Nigeria'
  },
  NU: {
    name: 'Niue'
  },
  NF: {
    name: 'Norfolk Island'
  },
  MP: {
    name: 'Northern Mariana Islands'
  },
  NO: {
    name: 'Norway'
  },
  OM: {
    name: 'Oman'
  },
  PK: {
    name: 'Pakistan'
  },
  PW: {
    name: 'Palau'
  },
  PS: {
    name: 'Palestinian Territory, Occupied'
  },
  PA: {
    name: 'Panama'
  },
  PG: {
    name: 'Papua New Guinea'
  },
  PY: {
    name: 'Paraguay'
  },
  PE: {
    name: 'Peru'
  },
  PH: {
    name: 'Philippines'
  },
  PN: {
    name: 'Pitcairn'
  },
  PL: {
    name: 'Poland'
  },
  PT: {
    name: 'Portugal'
  },
  PR: {
    name: 'Puerto Rico'
  },
  QA: {
    name: 'Qatar'
  },
  RE: {
    name: 'Reunion'
  },
  RO: {
    name: 'Romania'
  },
  RU: {
    name: 'Russian Federation'
  },
  RW: {
    name: 'Rwanda'
  },
  BL: {
    name: 'Saint Barthelemy'
  },
  SH: {
    name: 'Saint Helena'
  },
  KN: {
    name: 'Saint Kitts And Nevis'
  },
  LC: {
    name: 'Saint Lucia'
  },
  MF: {
    name: 'Saint Martin'
  },
  PM: {
    name: 'Saint Pierre And Miquelon'
  },
  VC: {
    name: 'Saint Vincent And Grenadines'
  },
  WS: {
    name: 'Samoa'
  },
  SM: {
    name: 'San Marino'
  },
  ST: {
    name: 'Sao Tome And Principe'
  },
  SA: {
    name: 'Saudi Arabia'
  },
  SN: {
    name: 'Senegal'
  },
  RS: {
    name: 'Serbia'
  },
  SC: {
    name: 'Seychelles'
  },
  SL: {
    name: 'Sierra Leone'
  },
  SG: {
    name: 'Singapore'
  },
  SK: {
    name: 'Slovakia'
  },
  SI: {
    name: 'Slovenia'
  },
  SB: {
    name: 'Solomon Islands'
  },
  SO: {
    name: 'Somalia'
  },
  ZA: {
    name: 'South Africa'
  },
  GS: {
    name: 'South Georgia And Sandwich Isl.'
  },
  ES: {
    name: 'Spain'
  },
  LK: {
    name: 'Sri Lanka'
  },
  SD: {
    name: 'Sudan'
  },
  SR: {
    name: 'Suriname'
  },
  SJ: {
    name: 'Svalbard And Jan Mayen'
  },
  SZ: {
    name: 'Swaziland'
  },
  SE: {
    name: 'Sweden'
  },
  CH: {
    name: 'Switzerland'
  },
  SY: {
    name: 'Syrian Arab Republic'
  },
  TW: {
    name: 'Taiwan'
  },
  TJ: {
    name: 'Tajikistan'
  },
  TZ: {
    name: 'Tanzania'
  },
  TH: {
    name: 'Thailand'
  },
  TL: {
    name: 'Timor-Leste'
  },
  TG: {
    name: 'Togo'
  },
  TK: {
    name: 'Tokelau'
  },
  TO: {
    name: 'Tonga'
  },
  TT: {
    name: 'Trinidad And Tobago'
  },
  TN: {
    name: 'Tunisia'
  },
  TR: {
    name: 'Turkey'
  },
  TM: {
    name: 'Turkmenistan'
  },
  TC: {
    name: 'Turks And Caicos Islands'
  },
  TV: {
    name: 'Tuvalu'
  },
  UG: {
    name: 'Uganda'
  },
  UA: {
    name: 'Ukraine'
  },
  AE: {
    name: 'United Arab Emirates'
  },
  GB: {
    name: 'United Kingdom'
  },
  US: {
    name: 'United States'
  },
  UM: {
    name: 'United States Outlying Islands'
  },
  UY: {
    name: 'Uruguay'
  },
  UZ: {
    name: 'Uzbekistan'
  },
  VU: {
    name: 'Vanuatu'
  },
  VE: {
    name: 'Venezuela'
  },
  VN: {
    name: 'Viet Nam'
  },
  VG: {
    name: 'Virgin Islands, British'
  },
  VI: {
    name: 'Virgin Islands, U.S.'
  },
  WF: {
    name: 'Wallis And Futuna'
  },
  EH: {
    name: 'Western Sahara'
  },
  YE: {
    name: 'Yemen'
  },
  ZM: {
    name: 'Zambia'
  },
  ZW: {
    name: 'Zimbabwe'
  }
};

function convertCountryCode(code) {
  return isoCountries[code].name;
}


// CONCATENATED MODULE: ./src/heat-index.js
// eslint-disable-next-line import/prefer-default-export
var HI = {
  // utility functions
  toFahrenheit: function toFahrenheit(celsius) {
    return 9 * celsius / 5 + 32;
  },
  toCelsius: function toCelsius(fehrenheit) {
    return 5 * (fehrenheit - 32) / 9;
  },
  getType: function getType(input) {
    return {}.toString.call(input).slice(8, -1);
  },
  // definition http://www.hpc.ncep.noaa.gov/html/heatindex_equation.shtml
  // input = {
  //     temperature: Number,  required
  //     humidity   : Number,  required
  //     fahrenheit : Boolean, optional
  // }
  heatIndex: function heatIndex(input) {
    if (arguments.length === 0) {
      throw new Error('Invalid Argument. Need at least one.');
    }

    if (HI.getType(input) !== 'Object') {
      throw new TypeError("Invalid Argument. Expecting 'Object'");
    }

    if (HI.getType(input.temperature) !== 'Number' || HI.getType(input.humidity) !== 'Number') {
      throw new TypeError("Invalid Argument. temperature and humidity must be 'Number'");
    }

    var t = HI.toFahrenheit(input.temperature) || 0;
    var h = input.humidity || 0;

    if (input.fahrenheit) {
      t = input.temperature;
    } // Steadman's result


    var heatIndex = 0.5 * (t + 61 + (t - 68) * 1.2 + h * 0.094); // regression equation of Rothfusz is appropriate

    if (t >= 80) {
      var heatIndexBase = -42.379 + 2.04901523 * t + 10.14333127 * h + -0.22475541 * t * h + -0.00683783 * t * t + -0.05481717 * h * h + 0.00122874 * t * t * h + 0.00085282 * t * h * h + -0.00000199 * t * t * h * h; // adjustment

      if (h < 13 && t <= 112) {
        heatIndex = heatIndexBase - (13 - h) / 4 * Math.sqrt((17 - Math.abs(t - 95)) / 17);
      } else if (h > 85 && t <= 87) {
        heatIndex = heatIndexBase + (h - 85) / 10 * ((87 - t) / 5);
      } else {
        heatIndex = heatIndexBase;
      }
    }

    return input.fahrenheit ? heatIndex : HI.toCelsius(heatIndex);
  }
};
// CONCATENATED MODULE: ./src/utils.js
function convertToFahrenheit(elem) {
  elem.textContent = Math.round(9 * parseInt(elem.textContent, 10) / 5 + 32);
}

function convertToCelsius(elem) {
  elem.textContent = Math.round(5 * (parseInt(elem.textContent, 10) - 32) / 9);
}

function getSeasonFromMonth(elem) {
  if (elem.month < 3 || elem.month === 12) {
    return 'winter';
  }

  if (elem.month < 6) {
    return 'spring';
  }

  if (elem.month < 9) {
    return 'summer';
  }

  return 'autumn';
}

function getDaytimeFromHour(elem) {
  if (elem.hour > 5 && elem.hour <= 12) {
    return 'morning';
  }

  if (elem.hour > 12 && elem.hour <= 17) {
    return 'midday';
  }

  if (elem.hour > 17 && elem.hour <= 21) {
    return 'evening';
  }

  return 'night';
}

function getBackgroundImage(elemBckg, dateElem, weatherEl) {
  var season = getSeasonFromMonth(dateElem);
  var daytime = getDaytimeFromHour(dateElem);
  var weather = weatherEl.weather;
  fetch("https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature,".concat(daytime, ",").concat(season, ",").concat(weather, "&client_id=26e0be6da3beaec44edf52aa1593502e2c7ab9d6ce71a1c59a9c9d9a4541324a")).then(function (res) {
    return res.json();
  }).then(function (data) {
    elemBckg.style.backgroundImage = "linear-gradient(120.96deg, rgba(0,0,0, 0.4) 0%, rgba(0,0,0, 0.6) 100%), url(".concat(data.urls.small, ")");
  })
  /* eslint-disable no-console */
  ["catch"](function (err) {
    return console.error(err);
  });
}

function translate(elem, fromTo) {
  fetch("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191126T161452Z.a093d3237ae2ed26.cd392f4f79f5171aa72682763686e667659604ab\n  &text=".concat(elem.text, "&lang=").concat(fromTo)).then(function (res) {
    return res.json();
  }).then(function (data) {
    elem.innerText = data.text;
  })["catch"](function (err) {
    return console.error(err);
  });
}

function getDate(timezone, elem, lang) {
  var date = new Date();
  elem.month = parseInt(date.toLocaleString('en-GB', {
    month: 'numeric',
    timeZone: timezone
  }), 10);
  elem.hour = parseInt(date.toLocaleString('en-GB', {
    hour: 'numeric',
    timeZone: timezone
  }), 10);
  var result = date.toLocaleString('en-GB', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: timezone
  }).replace(',', '').replace(',', '');
  elem.text = result;

  if (lang === 'rus') {
    translate(elem, 'en-ru');
  } else if (lang === 'bel') {
    translate(elem, 'en-be');
  } else {
    elem.innerText = elem.text;
  }
}

function getDateByCoords(lat, lng, elem, lang) {
  fetch("https://api.timezonedb.com/v2.1/get-time-zone?key=ST1WDEJRNQDM&format=json&by=position&lat=".concat(lat, "&lng=").concat(lng)).then(function (res) {
    return res.json();
  }).then(function (data) {
    var date = new Date(data.formatted);
    elem.text = date.toLocaleString('en-GB', {
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(',', '').replace(',', '');

    if (lang === 'rus') {
      translate(elem, 'en-ru');
    } else if (lang === 'bel') {
      translate(elem, 'en-be');
    } else {
      elem.innerText = elem.text;
    }
  })["catch"](function (err) {
    return console.error(err);
  });
}

function getAverageTemp(array, a, b) {
  var arr = array.slice(a, b).map(function (item) {
    return Math.round(+item.main.temp);
  });
  return Math.round(arr.reduce(function (i, j) {
    return i + j;
  }) / 8);
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getCityfromCoords(data) {
  var coordsStr = data.results[0].formatted.slice(0, data.results[0].formatted.indexOf(','));
  return coordsStr;
}


// CONCATENATED MODULE: ./src/index.js
// eslint-disable-next-line no-unused-vars




var currLang = 'eng';
var tempMode = 'celsius';
var searchMode = false;
var defaultDateInterval;
var currentDateInterval;
var bodyWrapper = document.createElement('div');
bodyWrapper.className = 'body-wrapper';
document.body.append(bodyWrapper);
var appWrapper = document.createElement('div');
appWrapper.className = 'app-wrapper';
bodyWrapper.append(appWrapper);
var navBar = document.createElement('nav');
navBar.className = 'navbar';
appWrapper.append(navBar);
var buttonContainer = document.createElement('div');
buttonContainer.className = 'navbar--item--container';
navBar.append(buttonContainer);
var reloadImageBtn = document.createElement('button');
reloadImageBtn.className = 'navbar--item reloadBtn';
reloadImageBtn.innerHTML = '<i class="fas fa-sync-alt"></i>';
buttonContainer.append(reloadImageBtn);
var langSelect = document.createElement('select');
langSelect.className = 'navbar--item';
langSelect.innerHTML = '<option value="eng">EN</option>' + '<option value="rus">RU</option>' + '<option value="bel">BY</option>';
langSelect.value = 'eng';
buttonContainer.append(langSelect);
var fahrenheitBtn = document.createElement('button');
fahrenheitBtn.className = 'navbar--item';
fahrenheitBtn.innerText = '°F';
buttonContainer.append(fahrenheitBtn);
var celsiusBtn = document.createElement('button');
celsiusBtn.className = 'navbar--item';
celsiusBtn.innerText = '°C';
buttonContainer.append(celsiusBtn);
var searchContainer = document.createElement('div');
searchContainer.className = 'navbar--item--container';
navBar.append(searchContainer);
var voiceBtn = document.createElement('button');
voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
voiceBtn.className = 'navbar--item voice_button';
searchContainer.appendChild(voiceBtn);
var pulsatingCircle = document.createElement('div');
pulsatingCircle.className = 'pulsating_circle';
searchContainer.appendChild(pulsatingCircle);
var searchInput = document.createElement('input');
searchInput.type = 'search';
searchInput.placeholder = 'Enter city name';
searchInput.className = 'search_input';
searchContainer.append(searchInput);
var searchBtn = document.createElement('button');
searchBtn.className = 'navbar--item search_button';
searchBtn.innerHTML = '<i class="fas fa-search"></i>';
searchContainer.append(searchBtn);
var weatherCont = document.createElement('div');
weatherCont.className = 'weather-container';
appWrapper.append(weatherCont);
var cityDateCont = document.createElement('div');
cityDateCont.className = 'city-date--container';
weatherCont.append(cityDateCont);
var currentCity = document.createElement('div');
currentCity.className = 'current-city';
cityDateCont.append(currentCity);
var currentDate = document.createElement('div');
currentDate.className = 'current-date';
cityDateCont.append(currentDate);
var currentWeather = document.createElement('div');
currentWeather.className = 'current_weather';
cityDateCont.append(currentWeather);
var currentTemp = document.createElement('div');
currentTemp.className = 'current_weather--temp';
currentWeather.append(currentTemp);
var currentWeatherProps = document.createElement('div');
currentWeatherProps.className = 'current_weather--props';
currentWeather.append(currentWeatherProps);
var currentWeatherIcon = document.createElement('img');
currentWeatherIcon.className = 'current_weather--icon';
currentWeatherProps.append(currentWeatherIcon);
var currentWeatherSummary = document.createElement('span');
currentWeatherSummary.className = 'current_weather--props--item';
currentWeatherProps.append(currentWeatherSummary);
var apparentTemp = document.createElement('span');
apparentTemp.className = 'current_weather--props--item apparent_temp';
currentWeatherProps.append(apparentTemp);
var apparentTempVal = document.createElement('span');
apparentTempVal.className = 'current_weather--props--item apparent_temp';
currentWeatherProps.append(apparentTempVal);
var currentWeatherWind = document.createElement('span');
currentWeatherWind.className = 'current_weather--props--item';
currentWeatherProps.append(currentWeatherWind);
var currentWeatherHumidity = document.createElement('span');
currentWeatherHumidity.className = 'current_weather--props--item';
currentWeatherProps.append(currentWeatherHumidity);
var threeDaysWeatherCont = document.createElement('div');
threeDaysWeatherCont.className = 'three_days_weather--cont';
weatherCont.append(threeDaysWeatherCont);
var dayFirstWeather = document.createElement('div');
dayFirstWeather.className = 'three_days_weather--item';
threeDaysWeatherCont.append(dayFirstWeather);
var firstWeekDay = document.createElement('span');
firstWeekDay.className = 'three_days_weather--item--weekday';
dayFirstWeather.append(firstWeekDay);
var dayFirstTemp = document.createElement('span');
dayFirstTemp.className = 'three_days_weather--item--temp';
dayFirstWeather.append(dayFirstTemp);
var dayFirstIcon = document.createElement('img');
dayFirstIcon.className = 'three_days_weather--item--icon';
dayFirstWeather.append(dayFirstIcon);
var daySecondWeather = document.createElement('div');
daySecondWeather.className = 'three_days_weather--item';
threeDaysWeatherCont.append(daySecondWeather);
var secondWeekDay = document.createElement('span');
secondWeekDay.className = 'three_days_weather--item--weekday';
daySecondWeather.append(secondWeekDay);
var daySecondTemp = document.createElement('span');
daySecondTemp.className = 'three_days_weather--item--temp';
daySecondWeather.append(daySecondTemp);
var daySecondIcon = document.createElement('img');
daySecondIcon.className = 'three_days_weather--item--icon';
daySecondWeather.append(daySecondIcon);
var dayThirdWeather = document.createElement('div');
dayThirdWeather.className = 'three_days_weather--item';
threeDaysWeatherCont.append(dayThirdWeather);
var thirdWeekDay = document.createElement('span');
thirdWeekDay.className = 'three_days_weather--item--weekday';
dayThirdWeather.append(thirdWeekDay);
var dayThirdTemp = document.createElement('span');
dayThirdTemp.className = 'three_days_weather--item--temp';
dayThirdWeather.append(dayThirdTemp);
var dayThirdIcon = document.createElement('img');
dayThirdIcon.className = 'three_days_weather--item--icon';
dayThirdWeather.append(dayThirdIcon);
var mapCont = document.createElement('div');
mapCont.className = 'map-container';
appWrapper.append(mapCont);
var mapEl = document.createElement('div');
mapEl.id = 'map';
mapCont.append(mapEl);
var mapText = document.createElement('div');
mapText.className = 'map--text';
mapCont.append(mapText);
var mapTextLat = document.createElement('span');
mapTextLat.className = 'map--text--item';
mapText.append(mapTextLat);
var mapTextLng = document.createElement('span');
mapTextLng.className = 'map--text--item';
mapText.append(mapTextLng);

function getCurrentWeather(data) {
  var temp = Math.round(data.list[0].main.temp);
  var humid = Math.round(data.list[0].main.humidity);
  currentTemp.innerText = temp;
  currentWeatherSummary.text = capitalize(data.list[0].weather[0].description);
  currentWeatherSummary.weather = data.list[0].weather[0].main;
  apparentTemp.text = 'Feels like: ';
  apparentTempVal.innerText = "".concat(Math.round(HI.heatIndex({
    temperature: +temp,
    humidity: +humid
  })), "\xB0");
  currentWeatherWind.text = "Wind: ".concat(Math.round(data.list[0].wind.speed), "  m/s");
  currentWeatherHumidity.text = "Humidity: ".concat(humid, "%");
  currentWeatherIcon.src = "http://openweathermap.org/img/wn/".concat(data.list[0].weather[0].icon, "@2x.png");

  if (currLang === 'rus') {
    translate(currentWeatherSummary, 'en-ru');
    translate(apparentTemp, 'en-ru');
    translate(currentWeatherWind, 'en-ru');
    translate(currentWeatherHumidity, 'en-ru');
  } else if (currLang === 'bel') {
    translate(currentWeatherSummary, 'en-be');
    translate(apparentTemp, 'en-be');
    translate(currentWeatherWind, 'en-be');
    translate(currentWeatherHumidity, 'en-be');
  } else {
    currentWeatherSummary.innerText = currentWeatherSummary.text;
    apparentTemp.innerText = apparentTemp.text;
    currentWeatherWind.innerText = currentWeatherWind.text;
    currentWeatherHumidity.innerText = currentWeatherHumidity.text;
  }

  if (tempMode === 'fahrenheit') {
    convertToFahrenheit(currentTemp);
    convertToFahrenheit(apparentTempVal);
  }
}

function getWeatherData(lat, lon) {
  fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(lat, "&lon=").concat(lon, "&units=metric&APPID=dc4077402bed4daffda4add7f0e83aef")).then(function (res) {
    return res.json();
  }).then(function (data) {
    getCurrentWeather(data);
    var threeDaysList = data.list.filter(function (item) {
      return item.dt_txt.slice(0, 10) !== data.list[0].dt_txt.slice(0, 10);
    }).slice(0, 24);
    firstWeekDay.text = new Date(threeDaysList[0].dt_txt).toLocaleString('en-GB', {
      weekday: 'long'
    });
    dayFirstTemp.innerText = getAverageTemp(threeDaysList, 0, 8);
    dayFirstIcon.src = "http://openweathermap.org/img/wn/".concat(threeDaysList[4].weather[0].icon, ".png");
    secondWeekDay.text = new Date(threeDaysList[8].dt_txt).toLocaleString('en-GB', {
      weekday: 'long'
    });
    daySecondTemp.innerText = getAverageTemp(threeDaysList, 8, 16);
    daySecondIcon.src = "http://openweathermap.org/img/wn/".concat(threeDaysList[12].weather[0].icon, ".png");
    thirdWeekDay.text = new Date(threeDaysList[16].dt_txt).toLocaleString('en-GB', {
      weekday: 'long'
    });
    dayThirdTemp.innerText = getAverageTemp(threeDaysList, 16, 24);
    dayThirdIcon.src = "http://openweathermap.org/img/wn/".concat(threeDaysList[20].weather[0].icon, ".png");

    if (currLang === 'rus') {
      translate(firstWeekDay, 'en-ru');
      translate(secondWeekDay, 'en-ru');
      translate(thirdWeekDay, 'en-ru');
    } else if (currLang === 'bel') {
      translate(firstWeekDay, 'en-be');
      translate(secondWeekDay, 'en-be');
      translate(thirdWeekDay, 'en-be');
    } else {
      firstWeekDay.innerText = firstWeekDay.text;
      secondWeekDay.innerText = secondWeekDay.text;
      thirdWeekDay.innerText = thirdWeekDay.text;
    }

    if (tempMode === 'fahrenheit') {
      convertToFahrenheit(dayFirstTemp);
      convertToFahrenheit(daySecondTemp);
      convertToFahrenheit(dayThirdTemp);
    }
  })
  /* eslint-disable no-console */
  ["catch"](function (err) {
    return console.error(err);
  });
}

function getIPAddress() {
  fetch('https://ipinfo.io/json?token=60e8ad51f55486').then(function (res) {
    return res.json();
  }).then(function (data) {
    getDate(data.timezone, currentDate, currLang);
    defaultDateInterval = setInterval(getDate, 15000, data.timezone, currentDate, currLang);
    currentCity.text = "".concat(data.city, ", ").concat(convertCountryCode(data.country));
    getBackgroundImage(bodyWrapper, currentDate, currentWeatherSummary);

    if (currLang === 'rus') {
      translate(currentCity, 'en-ru');
    } else if (currLang === 'bel') {
      translate(currentCity, 'en-be');
    } else {
      currentCity.innerText = currentCity.text;
    }
  })["catch"](function (err) {
    return console.error(err);
  });
}

function getMap(lng, lat) {
  /* eslint-disable no-undef */
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FnYXJpbjg4MDEyMCIsImEiOiJjazNicHc1NW4wOHFvM251aXg3YzlheDFmIn0.C2XPJXYAzS1e0OjVNFC-NQ'; // eslint-disable-next-line no-unused-vars

  var map = new mapboxgl.Map({
    container: 'map',
    // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    // stylesheet location
    center: [lng, lat],
    // starting position [lng, lat]
    zoom: 8 // starting zoom

  });
  var latStr = lat.toString();
  var lngStr = lng.toString();
  mapTextLat.text = "Latitude: ".concat(latStr.slice(0, latStr.indexOf('.')), "\xB0").concat(latStr.slice(latStr.indexOf('.') + 1, latStr.indexOf('.') + 3), "'");
  mapTextLng.text = "Longitude: ".concat(lngStr.slice(0, lngStr.indexOf('.')), "\xB0").concat(lngStr.slice(lngStr.indexOf('.') + 1, lngStr.indexOf('.') + 3), "'");

  if (currLang === 'rus') {
    translate(mapTextLat, 'en-ru');
    translate(mapTextLng, 'en-ru');
  } else if (currLang === 'bel') {
    translate(mapTextLat, 'en-be');
    translate(mapTextLng, 'en-be');
  } else {
    mapTextLat.innerText = mapTextLat.text;
    mapTextLng.innerText = mapTextLng.text;
  }
}

function getCoords() {
  if (searchInput.value && searchMode) {
    fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(searchInput.value, "&language=en&key=b6f94f0170be41b3b46f023bd725de3d&pretty=1&no_annotations=1")).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data.results[0] === undefined) {
        // eslint-disable-next-line no-alert
        alert('Your request is incorrect.\nCorrect request must include city (and country if it is necessary)');
        return;
      }

      clearInterval(defaultDateInterval);

      if (currentDateInterval) {
        clearInterval(currentDateInterval);
      }

      data.results // eslint-disable-next-line no-nested-ternary
      .sort(function (a, b) {
        return a.confidence > b.confidence ? 1 : b.confidence > a.confidence ? -1 : 0;
      });
      var lat = data.results[0].geometry.lat;
      var lng = data.results[0].geometry.lng;
      getWeatherData(lat, lng);
      getMap(lng, lat);
      getDateByCoords(lat, lng, currentDate, currLang);
      currentDateInterval = setInterval(getDateByCoords, 15000, lat, lng, currentDate, currLang);
      currentCity.text = "".concat(getCityfromCoords(data), ", ").concat(convertCountryCode(data.results[0].components['ISO_3166-1_alpha-2']));
      getBackgroundImage(bodyWrapper, currentDate, currentWeatherSummary);

      if (currLang === 'rus') {
        translate(currentCity, 'en-ru');
      } else if (currLang === 'bel') {
        translate(currentCity, 'en-be');
      } else {
        currentCity.innerText = currentCity.text;
      }
    })["catch"](function (err) {
      return console.error(err);
    });
  } else {
    // eslint-disable-next-line no-inner-declarations
    var success = function success(pos) {
      var crd = pos.coords;
      getMap(crd.longitude, crd.latitude);
      getWeatherData(crd.latitude, crd.longitude);
    }; // eslint-disable-next-line no-inner-declarations


    var error = function error(err) {
      console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
    };

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
}

function getVoice() {
  window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.addEventListener('result', function (e) {
    var transcript = Array.from(e.results).map(function (result) {
      return result[0];
    }).map(function (result) {
      return result.transcript;
    }).join('');
    searchMode = true;
    searchInput.value = transcript;
    getCoords();
  });
  voiceBtn.addEventListener('click', function () {
    recognition.start();
    pulsatingCircle.style.display = 'block';
  });
  recognition.addEventListener('end', function () {
    pulsatingCircle.style.display = 'none';
  });
}

reloadImageBtn.addEventListener('click', function () {
  getBackgroundImage(bodyWrapper, currentDate, currentWeatherSummary);
});
langSelect.addEventListener('change', function () {
  if (!searchMode) {
    if (langSelect.value === 'rus') {
      currLang = 'rus';
    }

    if (langSelect.value === 'bel') {
      currLang = 'bel';
    }

    if (langSelect.value === 'eng') {
      currLang = 'eng';
    }

    localStorage.setItem('currLang', currLang);
    clearInterval(defaultDateInterval);
    getIPAddress();
    getCoords();
  } else {
    if (langSelect.value === 'rus') {
      currLang = 'rus';
    }

    if (langSelect.value === 'bel') {
      currLang = 'bel';
    }

    if (langSelect.value === 'eng') {
      currLang = 'eng';
    }

    localStorage.setItem('currLang', currLang);
    clearInterval(currentDateInterval);
    getCoords();
  }
});
fahrenheitBtn.addEventListener('click', function () {
  if (tempMode === 'fahrenheit') {
    return;
  }

  tempMode = 'fahrenheit';
  localStorage.setItem('tempMode', tempMode);
  convertToFahrenheit(currentTemp);
  convertToFahrenheit(apparentTempVal);
  convertToFahrenheit(dayFirstTemp);
  convertToFahrenheit(daySecondTemp);
  convertToFahrenheit(dayThirdTemp);
});
celsiusBtn.addEventListener('click', function () {
  if (tempMode === 'celsius') {
    return;
  }

  tempMode = 'celsius';
  localStorage.setItem('tempMode', tempMode);
  convertToCelsius(currentTemp);
  convertToCelsius(apparentTempVal);
  convertToCelsius(dayFirstTemp);
  convertToCelsius(daySecondTemp);
  convertToCelsius(dayThirdTemp);
});
searchBtn.addEventListener('click', function () {
  if (searchInput.value) {
    searchMode = true;
    getCoords();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    if (searchInput.value) {
      searchMode = true;
      getCoords();
    }
  }
});
window.addEventListener('load', function () {
  var currentLang = localStorage.getItem('currLang');
  var temperature = localStorage.getItem('tempMode');

  if (!currentLang && !temperature) {
    localStorage.clear();
  }

  if (currentLang) {
    currLang = currentLang;
    langSelect.value = currLang;
  }

  if (temperature) {
    tempMode = temperature;
  }

  getCoords();
  getIPAddress();
  getVoice();
});

/***/ })
/******/ ]);