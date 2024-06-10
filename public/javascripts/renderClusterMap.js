const cities = [
	{
	  city: "Delhi",
	  latitude: "28.6100",
	  longitude: "77.2300",
	  state: "Delhi"
	},
	{
	  city: "Mumbai",
	  latitude: "19.0761",
	  longitude: "72.8775",
	  state: "Maharashtra"
	},
	{
	  city: "Kolkata",
	  latitude: "22.5675",
	  longitude: "88.3700",
	  state: "West Bengal"
	},
	{
	  city: "Bangalore",
	  latitude: "12.9789",
	  longitude: "77.5917",
	  state: "Karnataka"
	},
	{
	  city: "Chennai",
	  latitude: "13.0825",
	  longitude: "80.2750",
	  state: "Tamil Nadu"
	},
	{
	  city: "Hyderabad",
	  latitude: "17.3617",
	  longitude: "78.4747",
	  state: "Telangana"
	},
	{
	  city: "Pune",
	  latitude: "18.5203",
	  longitude: "73.8567",
	  state: "Maharashtra"
	},
	{
	  city: "Ahmedabad",
	  latitude: "23.0225",
	  longitude: "72.5714",
	  state: "Gujarat"
	},
	{
	  city: "Sūrat",
	  latitude: "21.1702",
	  longitude: "72.8311",
	  state: "Gujarat"
	},
	{
	  city: "Lucknow",
	  latitude: "26.8500",
	  longitude: "80.9500",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Jaipur",
	  latitude: "26.9000",
	  longitude: "75.8000",
	  state: "Rajasthan"
	},
	{
	  city: "Kanpur",
	  latitude: "26.4499",
	  longitude: "80.3319",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Mirzapur",
	  latitude: "25.1460",
	  longitude: "82.5690",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Nagpur",
	  latitude: "21.1497",
	  longitude: "79.0806",
	  state: "Maharashtra"
	},
	{
	  city: "Ghaziabad",
	  latitude: "28.6700",
	  longitude: "77.4200",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Supaul",
	  latitude: "26.1260",
	  longitude: "86.6050",
	  state: "Bihar"
	},
	{
	  city: "Vadodara",
	  latitude: "22.3000",
	  longitude: "73.2000",
	  state: "Gujarat"
	},
	{
	  city: "Rajkot",
	  latitude: "22.3000",
	  longitude: "70.7833",
	  state: "Gujarat"
	},
	{
	  city: "Vishakhapatnam",
	  latitude: "17.7042",
	  longitude: "83.2978",
	  state: "Andhra Pradesh"
	},
	{
	  city: "Indore",
	  latitude: "22.7167",
	  longitude: "75.8472",
	  state: "Madhya Pradesh"
	},
	{
	  city: "Thane",
	  latitude: "19.1972",
	  longitude: "72.9722",
	  state: "Maharashtra"
	},
	{
	  city: "Bhopal",
	  latitude: "23.2599",
	  longitude: "77.4126",
	  state: "Madhya Pradesh"
	},
	{
	  city: "Pimpri-Chinchwad",
	  latitude: "18.6186",
	  longitude: "73.8037",
	  state: "Maharashtra"
	},
	{
	  city: "Patna",
	  latitude: "25.5940",
	  longitude: "85.1376",
	  state: "Bihar"
	},
	{
	  city: "Bilaspur",
	  latitude: "22.0900",
	  longitude: "82.1500",
	  state: "Chhattīsgarh"
	},
	{
	  city: "Ludhiana",
	  latitude: "30.9100",
	  longitude: "75.8500",
	  state: "Punjab"
	},
	{
	  city: "Āgra",
	  latitude: "27.1800",
	  longitude: "78.0200",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Madurai",
	  latitude: "9.9252",
	  longitude: "78.1198",
	  state: "Tamil Nadu"
	},
	{
	  city: "Jamshedpur",
	  latitude: "22.7925",
	  longitude: "86.1842",
	  state: "Jharkhand"
	},
	{
	  city: "Prayagraj",
	  latitude: "25.4358",
	  longitude: "81.8464",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Nasik",
	  latitude: "19.9975",
	  longitude: "73.7898",
	  state: "Maharashtra"
	},
	{
	  city: "Farīdabad",
	  latitude: "28.4211",
	  longitude: "77.3078",
	  state: "Haryana"
	},
	{
	  city: "Meerut",
	  latitude: "28.9800",
	  longitude: "77.7100",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Jabalpur",
	  latitude: "23.1667",
	  longitude: "79.9333",
	  state: "Madhya Pradesh"
	},
	{
	  city: "Kalyan",
	  latitude: "19.2502",
	  longitude: "73.1602",
	  state: "Maharashtra"
	},
	{
	  city: "Vasai-Virar",
	  latitude: "19.3607",
	  longitude: "72.7956",
	  state: "Maharashtra"
	},
	{
	  city: "Najafgarh",
	  latitude: "28.6092",
	  longitude: "76.9798",
	  state: "Delhi"
	},
	{
	  city: "Varanasi",
	  latitude: "25.3189",
	  longitude: "83.0128",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Srīnagar",
	  latitude: "34.0900",
	  longitude: "74.7900",
	  state: "Jammu and Kashmīr"
	},
	{
	  city: "Aurangabad",
	  latitude: "19.8800",
	  longitude: "75.3200",
	  state: "Maharashtra"
	},
	{
	  city: "Dhanbad",
	  latitude: "23.7998",
	  longitude: "86.4305",
	  state: "Jharkhand"
	},
	{
	  city: "Amritsar",
	  latitude: "31.6400",
	  longitude: "74.8600",
	  state: "Punjab"
	},
	{
	  city: "Alīgarh",
	  latitude: "27.8800",
	  longitude: "78.0800",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Guwahati",
	  latitude: "26.1722",
	  longitude: "91.7458",
	  state: "Assam"
	},
	{
	  city: "Haora",
	  latitude: "22.5800",
	  longitude: "88.3294",
	  state: "West Bengal"
	},
	{
	  city: "Ranchi",
	  latitude: "23.3600",
	  longitude: "85.3300",
	  state: "Jharkhand"
	},
	{
	  city: "Gwalior",
	  latitude: "26.2124",
	  longitude: "78.1772",
	  state: "Madhya Pradesh"
	},
	{
	  city: "Chandīgarh",
	  latitude: "30.7500",
	  longitude: "76.7800",
	  state: "Chandīgarh"
	},
	{
	  city: "Haldwani",
	  latitude: "29.2200",
	  longitude: "79.5200",
	  state: "Uttarakhand"
	},
	{
	  city: "Vijayavada",
	  latitude: "16.5193",
	  longitude: "80.6305",
	  state: "Andhra Pradesh"
	},
	{
	  city: "Jodhpur",
	  latitude: "26.2800",
	  longitude: "73.0200",
	  state: "Rajasthan"
	},
	{
	  city: "Raipur",
	  latitude: "21.2444",
	  longitude: "81.6306",
	  state: "Chhattīsgarh"
	},
	{
	  city: "Kota",
	  latitude: "25.1800",
	  longitude: "75.8300",
	  state: "Rajasthan"
	},
	{
	  city: "Bhayandar",
	  latitude: "19.2900",
	  longitude: "72.8500",
	  state: "Maharashtra"
	},
	{
	  city: "Loni",
	  latitude: "28.7500",
	  longitude: "77.2800",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Ambattūr",
	  latitude: "13.1143",
	  longitude: "80.1548",
	  state: "Tamil Nadu"
	},
	{
	  city: "Salt Lake City",
	  latitude: "22.6100",
	  longitude: "88.4000",
	  state: "West Bengal"
	},
	{
	  city: "Bhatpara",
	  latitude: "22.8700",
	  longitude: "88.4100",
	  state: "West Bengal"
	},
	{
	  city: "Kūkatpalli",
	  latitude: "17.4849",
	  longitude: "78.4138",
	  state: "Telangana"
	},
	{
	  city: "Dasarhalli",
	  latitude: "13.0465",
	  longitude: "77.5130",
	  state: "Karnataka"
	},
	{
	  city: "Muzaffarpur",
	  latitude: "26.1225",
	  longitude: "85.3906",
	  state: "Bihar"
	},
	{
	  city: "Oulgaret",
	  latitude: "11.9570",
	  longitude: "79.7737",
	  state: "Tamil Nadu"
	},
	{
	  city: "New Delhi",
	  latitude: "28.6139",
	  longitude: "77.2089",
	  state: "Delhi"
	},
	{
	  city: "Tiruvottiyūr",
	  latitude: "13.1600",
	  longitude: "80.3000",
	  state: "Tamil Nadu"
	},
	{
	  city: "Puducherry",
	  latitude: "11.9167",
	  longitude: "79.8167",
	  state: "Puducherry"
	},
	{
	  city: "Byatarayanpur",
	  latitude: "13.0659",
	  longitude: "77.5922",
	  state: "Karnataka"
	},
	{
	  city: "Pallavaram",
	  latitude: "12.9675",
	  longitude: "80.1491",
	  state: "Tamil Nadu"
	},
	{
	  city: "Secunderabad",
	  latitude: "17.4399",
	  longitude: "78.4983",
	  state: "Telangana"
	},
	{
	  city: "Shimla",
	  latitude: "31.1033",
	  longitude: "77.1722",
	  state: "Himachal Pradesh"
	},
	{
	  city: "Puri",
	  latitude: "19.8000",
	  longitude: "85.8167",
	  state: "Odisha"
	},
	{
	  city: "Murtazabad",
	  latitude: "28.7111",
	  longitude: "77.2688",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Shrīrampur",
	  latitude: "22.7500",
	  longitude: "88.3400",
	  state: "West Bengal"
	},
	{
	  city: "Chandannagar",
	  latitude: "22.8700",
	  longitude: "88.3800",
	  state: "West Bengal"
	},
	{
	  city: "Sultanpur Mazra",
	  latitude: "28.6981",
	  longitude: "77.0689",
	  state: "Delhi"
	},
	{
	  city: "Krishnanagar",
	  latitude: "23.4000",
	  longitude: "88.5000",
	  state: "West Bengal"
	},
	{
	  city: "Barakpur",
	  latitude: "22.7600",
	  longitude: "88.3700",
	  state: "West Bengal"
	},
	{
	  city: "Bhalswa Jahangirpur",
	  latitude: "28.7354",
	  longitude: "77.1638",
	  state: "Delhi"
	},
	{
	  city: "Nangloi Jat",
	  latitude: "28.6833",
	  longitude: "77.0667",
	  state: "Delhi"
	},
	{
	  city: "Balasore",
	  latitude: "21.5033",
	  longitude: "86.9250",
	  state: "Odisha"
	},
	{
	  city: "Dalūpura",
	  latitude: "28.6004",
	  longitude: "77.3194",
	  state: "Delhi"
	},
	{
	  city: "Yelahanka",
	  latitude: "13.1007",
	  longitude: "77.5963",
	  state: "Karnataka"
	},
	{
	  city: "Titagarh",
	  latitude: "22.7400",
	  longitude: "88.3700",
	  state: "West Bengal"
	},
	{
	  city: "Dam Dam",
	  latitude: "22.6200",
	  longitude: "88.4200",
	  state: "West Bengal"
	},
	{
	  city: "Bansbaria",
	  latitude: "22.9700",
	  longitude: "88.4000",
	  state: "West Bengal"
	},
	{
	  city: "Madhavaram",
	  latitude: "13.1482",
	  longitude: "80.2314",
	  state: "Tamil Nadu"
	},
	{
	  city: "Abbigeri",
	  latitude: "13.0767",
	  longitude: "77.5250",
	  state: "Karnataka"
	},
	{
	  city: "Baj Baj",
	  latitude: "22.4828",
	  longitude: "88.1818",
	  state: "West Bengal"
	},
	{
	  city: "Garhi",
	  latitude: "28.6317",
	  longitude: "77.3186",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Mīrpeta",
	  latitude: "17.3200",
	  longitude: "78.5200",
	  state: "Telangana"
	},
	{
	  city: "Nerkunram",
	  latitude: "13.0619",
	  longitude: "80.2094",
	  state: "Tamil Nadu"
	},
	{
	  city: "Kendraparha",
	  latitude: "20.5000",
	  longitude: "86.4200",
	  state: "Odisha"
	},
	{
	  city: "Sijua",
	  latitude: "23.7762",
	  longitude: "86.3303",
	  state: "Jharkhand"
	},
	{
	  city: "Manali",
	  latitude: "13.1667",
	  longitude: "80.2667",
	  state: "Tamil Nadu"
	},
	{
	  city: "Kankuria",
	  latitude: "24.6523",
	  longitude: "87.9604",
	  state: "West Bengal"
	},
	{
	  city: "Chakapara",
	  latitude: "22.6300",
	  longitude: "88.3500",
	  state: "West Bengal"
	},
	{
	  city: "Pappakurichchi",
	  latitude: "10.8137",
	  longitude: "78.7481",
	  state: "Tamil Nadu"
	},
	{
	  city: "Herohalli",
	  latitude: "12.9911",
	  longitude: "77.4873",
	  state: "Karnataka"
	},
	{
	  city: "Madipakkam",
	  latitude: "12.9623",
	  longitude: "80.1986",
	  state: "Tamil Nadu"
	},
	{
	  city: "Sabalpur",
	  latitude: "25.6053",
	  longitude: "85.1835",
	  state: "Bihar"
	},
	{
	  city: "Bauria",
	  latitude: "22.4521",
	  longitude: "88.1853",
	  state: "West Bengal"
	},
	{
	  city: "Salua",
	  latitude: "22.6100",
	  longitude: "88.2700",
	  state: "West Bengal"
	},
	{
	  city: "Chik Banavar",
	  latitude: "13.0846",
	  longitude: "77.5014",
	  state: "Karnataka"
	},
	{
	  city: "Jalhalli",
	  latitude: "13.0333",
	  longitude: "77.5500",
	  state: "Karnataka"
	},
	{
	  city: "Chinnasekkadu",
	  latitude: "13.1609",
	  longitude: "80.2573",
	  state: "Tamil Nadu"
	},
	{
	  city: "Jethuli",
	  latitude: "25.5378",
	  longitude: "85.2841",
	  state: "Bihar"
	},
	{
	  city: "Nagtala",
	  latitude: "22.4667",
	  longitude: "88.3833",
	  state: "West Bengal"
	},
	{
	  city: "Pakri",
	  latitude: "25.5876",
	  longitude: "85.1580",
	  state: "Bihar"
	},
	{
	  city: "Hunasamaranhalli",
	  latitude: "13.1435",
	  longitude: "77.6200",
	  state: "Karnataka"
	},
	{
	  city: "Hesarghatta",
	  latitude: "13.1391",
	  longitude: "77.4783",
	  state: "Karnataka"
	},
	{
	  city: "Bommayapalaiyam",
	  latitude: "11.9922",
	  longitude: "79.8499",
	  state: "Tamil Nadu"
	},
	{
	  city: "Gundūr",
	  latitude: "10.7339",
	  longitude: "78.7184",
	  state: "Tamil Nadu"
	},
	{
	  city: "Punadih",
	  latitude: "25.5484",
	  longitude: "85.2649",
	  state: "Bihar"
	},
	{
	  city: "Hariladih",
	  latitude: "23.7333",
	  longitude: "86.4000",
	  state: "Jharkhand"
	},
	{
	  city: "Alawalpur",
	  latitude: "25.4958",
	  longitude: "85.2021",
	  state: "Bihar"
	},
	{
	  city: "Madnaikanhalli",
	  latitude: "13.0626",
	  longitude: "77.4642",
	  state: "Karnataka"
	},
	{
	  city: "Bagalūr",
	  latitude: "13.1330",
	  longitude: "77.6660",
	  state: "Karnataka"
	},
	{
	  city: "Kadiganahalli",
	  latitude: "13.1687",
	  longitude: "77.6283",
	  state: "Karnataka"
	},
	{
	  city: "Khanpur Zabti",
	  latitude: "28.7103",
	  longitude: "77.2781",
	  state: "Uttar Pradesh"
	},
	{
	  city: "Mahuli",
	  latitude: "25.5430",
	  longitude: "85.2268",
	  state: "Bihar"
	},
	{
	  city: "Zeyadah Kot",
	  latitude: "22.4445",
	  longitude: "88.3345",
	  state: "West Bengal"
	},
	{
	  city: "Arshakunti",
	  latitude: "13.0785",
	  longitude: "77.4225",
	  state: "Karnataka"
	},
	{
	  city: "Mirchi",
	  latitude: "25.5554",
	  longitude: "85.2139",
	  state: "Bihar"
	},
	{
	  city: "Sonudih",
	  latitude: "25.1155",
	  longitude: "87.0214",
	  state: "Bihar"
	},
	{
	  city: "Bayandhalli",
	  latitude: "12.9779",
	  longitude: "77.5688",
	  state: "Karnataka"
	},
	{
	  city: "Sondekoppa",
	  latitude: "13.0000",
	  longitude: "77.3667",
	  state: "Karnataka"
	},
	{
	  city: "Babura",
	  latitude: "25.0851",
	  longitude: "87.1092",
	  state: "Bihar"
	},
	{
	  city: "Madavar",
	  latitude: "13.0525",
	  longitude: "77.4732",
	  state: "Karnataka"
	},
	{
	  city: "Kadabgeri",
	  latitude: "12.9965",
	  longitude: "77.4331",
	  state: "Karnataka"
	},
	{
	  city: "Nanmangalam",
	  latitude: "12.9381",
	  longitude: "80.1753",
	  state: "Tamil Nadu"
	},
	{
	  city: "Taliganja",
	  latitude: "22.5041",
	  longitude: "88.3598",
	  state: "West Bengal"
	},
	{
	  city: "Tarchha",
	  latitude: "25.1116",
	  longitude: "87.0964",
	  state: "Bihar"
	},
	{
	  city: "Belgharia",
	  latitude: "22.6581",
	  longitude: "88.3852",
	  state: "West Bengal"
	},
	{
	  city: "Kammanhalli",
	  latitude: "13.0155",
	  longitude: "77.6381",
	  state: "Karnataka"
	},
	{
	  city: "Ambapuram",
	  latitude: "16.5990",
	  longitude: "80.8938",
	  state: "Andhra Pradesh"
	},
	{
	  city: "Sonnappanhalli",
	  latitude: "13.1557",
	  longitude: "77.6179",
	  state: "Karnataka"
	},
	{
	  city: "Kedihati",
	  latitude: "22.6508",
	  longitude: "88.4608",
	  state: "West Bengal"
	},
	{
	  city: "Doddajīvanhalli",
	  latitude: "13.0086",
	  longitude: "77.6143",
	  state: "Karnataka"
	},
	{
	  city: "Simli Murarpur",
	  latitude: "25.5792",
	  longitude: "85.2401",
	  state: "Bihar"
	},
	{
	  city: "Sonawan",
	  latitude: "25.5445",
	  longitude: "85.2387",
	  state: "Bihar"
	},
	{
	  city: "Devanandapur",
	  latitude: "22.9326",
	  longitude: "88.3729",
	  state: "West Bengal"
	},
	{
	  city: "Tribeni",
	  latitude: "22.9867",
	  longitude: "88.3987",
	  state: "West Bengal"
	},
	{
	  city: "Huttanhalli",
	  latitude: "13.1651",
	  longitude: "77.6512",
	  state: "Karnataka"
	},
	{
	  city: "Nathupur",
	  latitude: "25.5163",
	  longitude: "85.2544",
	  state: "Bihar"
	},
	{
	  city: "Bali",
	  latitude: "25.4810",
	  longitude: "85.2227",
	  state: "Bihar"
	},
	{
	  city: "Vajarhalli",
	  latitude: "13.1022",
	  longitude: "77.4111",
	  state: "Karnataka"
	},
	{
	  city: "Alija Kotla",
	  latitude: "17.2333",
	  longitude: "78.5500",
	  state: "Telangana"
	},
	{
	  city: "Saino",
	  latitude: "25.1134",
	  longitude: "87.0108",
	  state: "Bihar"
	},
	{
	  city: "Shekhpura",
	  latitude: "25.5725",
	  longitude: "85.1428",
	  state: "Bihar"
	},
	{
	  city: "Cachohalli",
	  latitude: "13.0010",
	  longitude: "77.4717",
	  state: "Karnataka"
	},
	{
	  city: "Andheri",
	  latitude: "19.2104",
	  longitude: "73.0464",
	  state: "Maharashtra"
	},
	{
	  city: "Narayanpur Kola",
	  latitude: "25.1293",
	  longitude: "87.0076",
	  state: "Bihar"
	},
	{
	  city: "Gyan Chak",
	  latitude: "25.5496",
	  longitude: "85.2423",
	  state: "Bihar"
	},
	{
	  city: "Kasgatpur",
	  latitude: "13.1101",
	  longitude: "77.5045",
	  state: "Karnataka"
	},
	{
	  city: "Kitanelli",
	  latitude: "13.0095",
	  longitude: "77.4191",
	  state: "Karnataka"
	},
	{
	  city: "Harchandi",
	  latitude: "25.1000",
	  longitude: "87.0442",
	  state: "Bihar"
	},
	{
	  city: "Santoshpur",
	  latitude: "22.4650",
	  longitude: "88.2193",
	  state: "West Bengal"
	},
	{
	  city: "Bendravadi",
	  latitude: "12.3636",
	  longitude: "76.9137",
	  state: "Karnataka"
	},
	{
	  city: "Kodagihalli",
	  latitude: "12.9771",
	  longitude: "77.4651",
	  state: "Karnataka"
	},
	{
	  city: "Harna Buzurg",
	  latitude: "25.0981",
	  longitude: "87.0148",
	  state: "Bihar"
	},
	{
	  city: "Mailanhalli",
	  latitude: "13.1863",
	  longitude: "77.6963",
	  state: "Karnataka"
	},
	{
	  city: "Sultanpur",
	  latitude: "25.5248",
	  longitude: "85.2507",
	  state: "Bihar"
	},
	{
	  city: "Adakimaranhalli",
	  latitude: "13.0633",
	  longitude: "77.4417",
	  state: "Karnataka"
	}
  ]

// const map = L.map('map').setView([23, 78.9629], 5);
// L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}', {
// 	minZoom: 0,
// 	maxZoom: 20,
// 	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	ext: 'png'
// }).addTo(map);

// const markers = L.markerClusterGroup();
// for(let campground of campgrounds){
//     markers.addLayer(L.marker([campground.geometry.coordinates[0], campground.geometry.coordinates[1]])
//                         .bindPopup(`<h6><b><a href="/campgrounds/${campground._id}">${campground.title}</a></b></h6>${campground.location}`).openPopup());
// }
// map.addLayer(markers);

// const markers = L.markerClusterGroup();
// for(let i=0; i<200; i++){
// 	const random162 = Math.floor(Math.random()*162);
//     markers.addLayer(L.marker([cities[random162].latitude,cities[random162].longitude]));
// }
// map.addLayer(markers);

mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [78.9629,23],
        zoom: 4
    });

    map.on('load', () => {
        // Add a new source from our GeoJSON data and
        // set the 'cluster' option to true. GL-JS will
        // add the point_count property to your source data.
        map.addSource('campgrounds', {
            type: 'geojson',
            // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
            // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
            data: campgrounds,
            cluster: true,
            clusterMaxZoom: 14, // Max zoom to cluster points on
            clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
        });

        map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'campgrounds',
            filter: ['has', 'point_count'],
            paint: {
                // Use step expressions (https://docs.mapbox.com/style-spec/reference/expressions/#step)
                // with three steps to implement three types of circles:
                //   * Blue, 20px circles when point count is less than 100
                //   * Yellow, 30px circles when point count is between 100 and 750
                //   * Pink, 40px circles when point count is greater than or equal to 750
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    '#00bbf9',
                    20, //100
                    '#4361ee',  
                    50, //750
                    '#f94144'
                ],
                'circle-radius': [
                    'step',
                    ['get', 'point_count'],
                    20,
                    20,
                    25,
                    50,
                    30
                ]
            }
        });

        map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'campgrounds',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': ['get', 'point_count_abbreviated'],
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 12
            }
        });

        map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'campgrounds',
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': '#11b4da',
                'circle-radius': 8,
                'circle-stroke-width': 3,
                'circle-stroke-color': '#fff'
            }
        });

        // inspect a cluster on click
        map.on('click', 'clusters', (e) => {
            const features = map.queryRenderedFeatures(e.point, {
                layers: ['clusters']
            });
            const clusterId = features[0].properties.cluster_id;
            map.getSource('campgrounds').getClusterExpansionZoom(
                clusterId,
                (err, zoom) => {
                    if (err) return;

                    map.easeTo({
                        center: features[0].geometry.coordinates,
                        zoom: zoom
                    });
                }
            );
        });

        // When a click event occurs on a feature in
        // the unclustered-point layer, open a popup at
        // the location of the feature, with
        // description HTML from its properties.
        map.on('click', 'unclustered-point', (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();

            // Ensure that if the map is zoomed out such that
            // multiple copies of the feature are visible, the
            // popup appears over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(e.features[0].properties.popUpMarkup)
                .addTo(map);
        });

        map.on('mouseenter', 'clusters', () => {
            map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'clusters', () => {
            map.getCanvas().style.cursor = '';
        });
    });


