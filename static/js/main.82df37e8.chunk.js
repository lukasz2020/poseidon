(this.webpackJsonpposeidon=this.webpackJsonpposeidon||[]).push([[0],{20:function(e,a,n){e.exports=n(34)},30:function(e,a,n){},31:function(e,a,n){},32:function(e,a,n){},33:function(e,a,n){},34:function(e,a,n){"use strict";n.r(a);var r=n(0),o=n.n(r),t=n(5),d=n.n(t),c=n(6),m=n(14),l=n(19),i=n(18),s=n(1),u=function(e){Object(l.a)(n,e);var a=Object(i.a)(n);function n(){return Object(m.a)(this,n),a.apply(this,arguments)}return n}(Object(s.c)({id:null,createdAt:null,country:null,firstName:null,lastName:null,units:0,isPremium:!1})),f=n(4),p=n.n(f);var E=function(e){return e.sort((function(e,a){var n=new Date(e.get("createdAt")).getTime(),r=new Date(a.get("createdAt")).getTime();return r<n?-1:r>n?1:n===r?0:void 0}))};var N=n(7),g=[{name:"Afghanistan",code:"AF"},{name:"\xc5land Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],A=n(15),h=function(e){var a=new s.b;return e.forEach((function(e,n){"isPremium"!==n&&""===e&&(a=a.set(n,"Field is required"))})),a};n(30);var b=n(2),v=n.n(b);var S=new s.b({firstName:"",lastName:"",email:"",phone:"",streetName:"",city:"",country:"",units:"",isPremium:!1});var y=function(e){var a=e.onGeolocationInitialize,n=e.country;Object(r.useEffect)((function(){a()}),[]);var t=function(e,a){var n=new s.b({values:e,errors:new s.b}),o=Object(r.useState)(n),t=Object(N.a)(o,2),d=t[0],c=t[1],m=e.get("country");return Object(r.useEffect)((function(){m&&c(n)}),[m]),{values:d.get("values"),errors:d.get("errors"),setFormErrors:function(e){c(d.set("errors",e))},reset:function(){return c(n)},onChange:function(e){var n=e.target,r=d.get("values"),o=d.get("errors");r=r.set(n.name,"checkbox"===n.type?!("true"===n.value):n.value),12===Number(r.get("units"))&&(r=r.set("isPremium",!0)),o=o.remove(n.name),c(d.set("values",r).set("errors",o.merge(a(new s.b(Object(A.a)({},n.name,n.value))))))}}}(S.set("country",n),h),d=t.values,c=t.errors,m=t.onChange,l=t.setFormErrors,i=Object(r.useState)(new s.b({total:0,discount:0})),u=Object(N.a)(i,2),f=u[0],p=u[1];return console.log(d),o.a.createElement("div",{className:"Add-order-form"},o.a.createElement("div",{className:"Add-order-form-product-info"},o.a.createElement("div",{className:"Add-order-form-product-image-container"},o.a.createElement("img",{className:"Add-order-form-product-image",src:"https://d3hlrrbqydii6y.cloudfront.net/img/114b3c76b08fd8053ac7d74ea4d15c40.png"})),o.a.createElement("div",{className:"Add-order-form-product-price-container"},o.a.createElement("p",{className:"Add-order-form-product-price-info"},"Select number of units to see your price and discount"),o.a.createElement("div",{className:"Add-order-form-total-units"},o.a.createElement("label",{className:"Add-order-form-label",htmlFor:"units"},o.a.createElement("span",null,"Total units")),o.a.createElement("span",{className:"Add-order-form-product-form-field"},c.get("units")&&o.a.createElement("span",{className:v()("Add-order-form-product-form-field-error",{"Add-order-form-product-form-field-error-visible":c.get("units")})},c.get("units")),o.a.createElement("select",{id:"units",name:"units",value:d.get("units"),onChange:function(e){m(e);var a=parseInt(e.target.value),n=5/100*(a-1);console.log(100*n);var r=function(e,a){var n=(e=e.toString()).split(".");return console.log(n[0]+"."+a),parseFloat(n[0]+"."+a)}(function(e,a,n){return e*a*(1-n)}(27.49,a,n),99);p(new s.b({total:r,discount:(100*n).toFixed(0)}))}},function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,a=[o.a.createElement("option",{key:"total-units-empty",value:""},"Select total units")],n=1;n<=e;n++)a.push(o.a.createElement("option",{key:"total-units".concat(n),value:n},n));return a}()))),o.a.createElement("div",{className:"Add-order-form-product-total-price"},f.get("discount")>0&&o.a.createElement("p",{className:"Add-order-form-product-discount"},"Your discount: ",o.a.createElement("span",{className:"Add-order-form-product-percent"},"".concat(f.get("discount"),"%!"))),f.get("total")>0&&o.a.createElement("p",{className:"Add-order-form-product-price"},"Your price: ",o.a.createElement("span",{className:"Add-order-form-product-total"},f.get("total")),"\xa0USD"),d.get("units")>0&&o.a.createElement("p",{className:"Add-order-form-product-shipping"},"Shipping cost: ",12===Number(d.get("units"))?o.a.createElement("span",{className:"Add-order-form-product-free-shipping"},"Free!"):"".concat(15," USD"))))),o.a.createElement("form",{className:"Add-order-form-product-form",onSubmit:function(a){a.preventDefault();var n=e.onCheckout,r=h(d);r.count()?l(r):n(d)}},o.a.createElement("div",{className:"Add-order-form-product-row"},o.a.createElement("label",{className:"Add-order-form-label",htmlFor:"firstName"},o.a.createElement("span",null,"First Name")),o.a.createElement("span",{className:"Add-order-form-product-form-field"},c.get("firstName")&&o.a.createElement("span",{className:v()("Add-order-form-product-form-field-error",{"Add-order-form-product-form-field-error-visible":c.get("firstName")})},c.get("firstName")),o.a.createElement("input",{id:"firstName",className:"Add-order-form-input",type:"text",placeholder:"First Name",name:"firstName",value:d.get("firstName"),onChange:m}))),o.a.createElement("div",{className:"Add-order-form-product-row"},o.a.createElement("label",{className:"Add-order-form-label",htmlFor:"lastName"},o.a.createElement("span",null,"Last Name")),o.a.createElement("span",{className:"Add-order-form-product-form-field"},c.get("lastName")&&o.a.createElement("span",{className:v()("Add-order-form-product-form-field-error",{"Add-order-form-product-form-field-error-visible":c.get("lastName")})},c.get("lastName")),o.a.createElement("input",{id:"lastName",className:"Add-order-form-input",type:"text",placeholder:"Last Name",name:"lastName",value:d.get("lastName"),onChange:m}))),o.a.createElement("div",{className:"Add-order-form-product-row"},o.a.createElement("label",{className:"Add-order-form-label",htmlFor:"email"},o.a.createElement("span",null,"Email")),o.a.createElement("span",{className:"Add-order-form-product-form-field"},c.get("email")&&o.a.createElement("span",{className:v()("Add-order-form-product-form-field-error",{"Add-order-form-product-form-field-error-visible":c.get("email")})},c.get("email")),o.a.createElement("input",{id:"email",className:"Add-order-form-input",type:"text",placeholder:"Email",name:"email",value:d.get("email"),onChange:m}))),o.a.createElement("div",{className:"Add-order-form-product-row"},o.a.createElement("label",{className:"Add-order-form-label",htmlFor:"phone"},o.a.createElement("span",null,"Phone")),o.a.createElement("span",{className:"Add-order-form-product-form-field"},c.get("phone")&&o.a.createElement("span",{className:v()("Add-order-form-product-form-field-error",{"Add-order-form-product-form-field-error-visible":c.get("phone")})},c.get("phone")),o.a.createElement("input",{id:"phone",className:"Add-order-form-input",type:"text",placeholder:"Phone",name:"phone",value:d.get("phone"),onChange:m}))),o.a.createElement("div",{className:"Add-order-form-product-row"},o.a.createElement("label",{className:"Add-order-form-label",htmlFor:"city"},o.a.createElement("span",null,"City")),o.a.createElement("span",{className:"Add-order-form-product-form-field"},c.get("city")&&o.a.createElement("span",{className:v()("Add-order-form-product-form-field-error",{"Add-order-form-product-form-field-error-visible":c.get("city")})},c.get("city")),o.a.createElement("input",{id:"city",className:"Add-order-form-input",type:"text",placeholder:"City",name:"city",value:d.get("city"),onChange:m}))),o.a.createElement("div",{className:"Add-order-form-product-row"},o.a.createElement("label",{className:"Add-order-form-label",htmlFor:"streetName"},o.a.createElement("span",null,"Street")),o.a.createElement("span",{className:"Add-order-form-product-form-field"},c.get("streetName")&&o.a.createElement("span",{className:v()("Add-order-form-product-form-field-error",{"Add-order-form-product-form-field-error-visible":c.get("streetName")})},c.get("streetName")),o.a.createElement("input",{id:"streetName",className:"Add-order-form-input",type:"text",placeholder:"Street",name:"streetName",value:d.get("streetName"),onChange:m}))),o.a.createElement("div",{className:"Add-order-form-product-row"},o.a.createElement("label",{className:"Add-order-form-label",htmlFor:"country"},o.a.createElement("span",null,"Country")),o.a.createElement("span",{className:"Add-order-form-product-form-field"},c.get("country")&&o.a.createElement("span",{className:v()("Add-order-form-product-form-field-error",{"Add-order-form-product-form-field-error-visible":c.get("country")})},c.get("country")),o.a.createElement("select",{id:"country",name:"country",value:d.get("country"),onChange:m},function(){var e=g.map((function(e){return o.a.createElement("option",{key:"country".concat(e.code),value:e.code},e.name)}));return e.unshift(o.a.createElement("option",{key:"country-empty",value:""},"Select country")),e}(d.get("country"))))),o.a.createElement("div",{className:"Add-order-form-product-row Add-order-form-product-row-premium-shipping"},o.a.createElement("label",{className:"Add-order-form-label",htmlFor:"isPremium"},o.a.createElement("span",null,"Premium shipping and support")),o.a.createElement("span",{className:"Add-order-form-product-form-field Add-order-form-product-form-checkbox"},c.get("isPremium")&&o.a.createElement("span",{className:v()("Add-order-form-product-form-field-error",{"Add-order-form-product-form-field-error-visible":c.get("isPremium")})},c.get("isPremium")),o.a.createElement("input",{id:"isPremium",type:"checkbox",name:"isPremium",value:d.get("isPremium"),checked:d.get("isPremium"),onChange:m}))),o.a.createElement("div",{className:"Add-order-form-product-row"},o.a.createElement("input",{className:"Add-order-form-submit",type:"submit",value:"Checkout"}))))};n(31);var C=function(e){var a=e.order,n=new Date(a.get("createdAt"));return o.a.createElement("tr",{className:"Orders-row"},o.a.createElement("td",null,o.a.createElement("span",{className:"Order-data Order-id"},a.get("id"))),o.a.createElement("td",null,o.a.createElement("span",{className:"Order-data Order-date"},n.toLocaleDateString()," ",n.toLocaleTimeString())),o.a.createElement("td",null,o.a.createElement("span",{className:"Order-data Order-first-name"},a.get("firstName"))),o.a.createElement("td",null,o.a.createElement("span",{className:"Order-data Order-last-name"},a.get("lastName"))),o.a.createElement("td",null,o.a.createElement("span",{className:"Order-data Order-country-code"},a.get("country"))),o.a.createElement("td",null,o.a.createElement("span",{className:"Order-data Order-units"},a.get("units"))),o.a.createElement("td",null,o.a.createElement("span",{className:"Order-data"},a.get("isPremium")?"Yes":"No")))};n(32);var O=function(e){var a=e.onInitialize,n=e.orders;return Object(r.useEffect)((function(){a()}),[]),o.a.createElement("table",{className:"Orders"},o.a.createElement("thead",{className:"Orders-header"},o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"Date"),o.a.createElement("th",null,"First Name"),o.a.createElement("th",null,"Last Name"),o.a.createElement("th",null,"Country"),o.a.createElement("th",null,"Units"),o.a.createElement("th",null,"Premium shipping"))),o.a.createElement("tbody",null,n.map((function(e){return o.a.createElement(C,{key:e.get("id"),order:e})}))))};n(33);var M=function(e){var a=e.onInitialize,n=e.orders,r=e.onCheckout,t=e.country,d=e.onGeolocationInitialize;return o.a.createElement("div",{className:"Product-container"},o.a.createElement("section",{className:"Product"},o.a.createElement("header",null,o.a.createElement("h1",{className:"Product-section-title"},"Product")),o.a.createElement(y,{onCheckout:r,country:t,onGeolocationInitialize:d})),o.a.createElement("section",{className:"Product-orders"},o.a.createElement("header",null,o.a.createElement("h1",{className:"Product-section-title"},"Orders")),o.a.createElement(O,{onInitialize:a,orders:n})))},I=Object(c.b)((function(e){var a=e.geolocationReducer;return{orders:e.ordersReducer.get("orders"),country:a.get("country")}}),(function(e){return{onInitialize:function(){e((function(e,a){a().ordersReducer.get("orders").count()||(e({type:"LOAD_ORDERS_REQUEST"}),p()("https://api.jsonbin.io/b/5ecd438ca2a6e10f7bc644c3").then((function(e){return e.json()})).then((function(a){var n=new s.a(a.map((function(e){return new u(e)})));e({type:"LOAD_ORDERS_SUCCESS",orders:E(n)})})))}))},onCheckout:function(a){e(function(e){return function(a){a({type:"ADD_NEW_ORDER",order:e})}}(a))},onGeolocationInitialize:function(){e((function(e){e({type:"LOAD_GEOLOCATION_DATA_REQUEST"}),p()("https://freegeoip.app/json/").then((function(e){return e.json()})).then((function(a){e({type:"LOAD_GEOLOCATION_DATA_SUCCESS",data:a})}))}))}}}))(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(3),G=n(16),R=n(17),P=n.n(R),D=new s.b({orders:new s.a});var L=new s.b({country:""});var w=Object(T.c)({ordersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_ORDERS_REQUEST":return e;case"LOAD_ORDERS_SUCCESS":return e.set("orders",a.orders);case"LOAD_ORDERS_FAILURE":return e;case"ADD_NEW_ORDER":var n=new u(a.order);return n=(n=n.set("id",Math.random().toString(36))).set("createdAt",(new Date).toISOString()),e.updateIn(["orders"],(function(e){return e.unshift(n)}));default:return e}},geolocationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_GEOLOCATION_DATA_REQUEST":return e;case"LOAD_GEOLOCATION_DATA_SUCCESS":return e.set("country",a.data.country_code);default:return e}}});var B=function(e){var a=[G.a,P.a],n=T.a.apply(void 0,a);return Object(T.d)(w,e,n)}();d.a.render(o.a.createElement(c.a,{store:B},o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.82df37e8.chunk.js.map