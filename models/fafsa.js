// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//
// const fafsaSchema = new Schema({
//     "_id" : ObjectId("5a1f1c49098c92e5633b206e"),
//     "0" : {
//         "id_" : 1,
//         "State" : "Alabama",
//         "Dependent Students" : 85831,
//         "Independent Students" : 98665,
//         "Quarterly Total" : 64021,
//         "Award Year To Date Total" : 184496
//     },
//     "1" : {
//         "id_" : 2,
//         "State" : "Alaska",
//         "Dependent Students" : 11254,
//         "Independent Students" : 15417,
//         "Quarterly Total" : 7172,
//         "Award Year To Date Total" : 26671
//     },
//     "2" : {
//         "id_" : 3,
//         "State" : "Arizona",
//         "Dependent Students" : 112832,
//         "Independent Students" : 143753,
//         "Quarterly Total" : 74707,
//         "Award Year To Date Total" : 256585
//     },
//     "3" : {
//         "id_" : 4,
//         "State" : "Arkansas",
//         "Dependent Students" : 56733,
//         "Independent Students" : 65474,
//         "Quarterly Total" : 46235,
//         "Award Year To Date Total" : 122207
//     },
//     "4" : {
//         "id_" : 5,
//         "State" : "California",
//         "Dependent Students" : 972985,
//         "Independent Students" : 923385,
//         "Quarterly Total" : 341774,
//         "Award Year To Date Total" : 1896370
//     },
//     "5" : {
//         "id_" : 6,
//         "State" : "Colorado",
//         "Dependent Students" : 95574,
//         "Independent Students" : 110393,
//         "Quarterly Total" : 52016,
//         "Award Year To Date Total" : 205967
//     },
//     "6" : {
//         "id_" : 7,
//         "State" : "Connecticut",
//         "Dependent Students" : 95643,
//         "Independent Students" : 67496,
//         "Quarterly Total" : 36767,
//         "Award Year To Date Total" : 63139
//     },
//     "7" : {
//         "id_" : 8,
//         "State" : "Delaware",
//         "Dependent Students" : 19844,
//         "Independent Students" : 18171,
//         "Quarterly Total" : 12232,
//         "Award Year To Date Total" : 38015
//     },
//     "8" : {
//         "id_" : 9,
//         "State" : "District of Columbia",
//         "Dependent Students" : 9672,
//         "Independent Students" : 14366,
//         "Quarterly Total" : 6928,
//         "Award Year To Date Total" : 24038
//     },
//     "9" : {
//         "id_" : 10,
//         "State" : "Florida",
//         "Dependent Students" : 393216,
//         "Independent Students" : 488004,
//         "Quarterly Total" : 269343,
//         "Award Year To Date Total" : 881220
//     },
//     "10" : {
//         "id_" : 11,
//         "State" : "Georgia",
//         "Dependent Students" : 228383,
//         "Independent Students" : 270521,
//         "Quarterly Total" : 186471,
//         "Award Year To Date Total" : 498904
//     },
//     "11" : {
//         "id_" : 12,
//         "State" : "Hawaii",
//         "Dependent Students" : 25693,
//         "Independent Students" : 22203,
//         "Quarterly Total" : 9806,
//         "Award Year To Date Total" : 47896
//     },
//     "12" : {
//         "id_" : 13,
//         "State" : "Idaho",
//         "Dependent Students" : 31292,
//         "Independent Students" : 35741,
//         "Quarterly Total" : "16,154",
//         "Award Year To Date Total" : "67,033"
//     },
//     "13" : {
//         "id_" : 14,
//         "State" : "Illinois",
//         "Dependent Students" : 32760,
//         "Independent Students" : 247856,
//         "Quarterly Total" : 97721,
//         "Award Year To Date Total" : 574916
//     },
//     "14" : {
//         "id_" : 15,
//         "State" : "Indiana",
//         "Dependent Students" : 158249,
//         "Independent Students" : 143510,
//         "Quarterly Total" : 43175,
//         "Award Year To Date Total" : 301759
//     },
//     "15" : {
//         "id_" : 16,
//         "State" : "Iowa",
//         "Dependent Students" : 69627,
//         "Independent Students" : 48834,
//         "Quarterly Total" : 27882,
//         "Award Year To Date Total" : 118461
//     },
//     "16" : {
//         "id_" : 17,
//         "State" : "Kansas",
//         "Dependent Students" : 56546,
//         "Independent Students" : 52127,
//         "Quarterly Total" : 28411,
//         "Award Year To Date Total" : 108673
//     },
//     "17" : {
//         "id_" : 18,
//         "State" : "Kentucky",
//         "Dependent Students" : 89537,
//         "Independent Students" : 101935,
//         "Quarterly Total" : 36297,
//         "Award Year To Date Total" : 191472
//     },
//     "18" : {
//         "id_" : 19,
//         "State" : "Louisiana",
//         "Dependent Students" : 93031,
//         "Independent Students" : 103808,
//         "Quarterly Total" : 77360,
//         "Award Year To Date Total" : 196839
//     },
//     "19" : {
//         "id_" : 20,
//         "State" : "Maine",
//         "Dependent Students" : 29595,
//         "Independent Students" : 24025,
//         "Quarterly Total" : 11476,
//         "Award Year To Date Total" : 53620
//     },
//     "20" : {
//         "id_" : 21,
//         "State" : "Maryland",
//         "Dependent Students" : 33314,
//         "Independent Students" : 136602,
//         "Quarterly Total" : 54875,
//         "Award Year To Date Total" : 269916
//     },
//     "21" : {
//         "id_" : 22,
//         "State" : "Massachusetts",
//         "Dependent Students" : 171603,
//         "Independent Students" : 117051,
//         "Quarterly Total" : 70238,
//         "Award Year To Date Total" : 288654
//     },
//     "22" : {
//         "id_" : 23,
//         "State" : "Michigan",
//         "Dependent Students" : 228752,
//         "Independent Students" : 200823,
//         "Quarterly Total" : 96879,
//         "Award Year To Date Total" : 429575
//     },
//     "23" : {
//         "id_" : 24,
//         "State" : "Minnesota",
//         "Dependent Students" : 119041,
//         "Independent Students" : 90958,
//         "Quarterly Total" : 66663,
//         "Award Year To Date Total" : 209999
//     },
//     "24" : {
//         "id_" : 25,
//         "State" : "Mississippi",
//         "Dependent Students" : 61244,
//         "Independent Students" : 71063,
//         "Quarterly Total" : 49802,
//         "Award Year To Date Total" : 132307
//     },
//     "25" : {
//         "id_" : 26,
//         "State" : "Missouri",
//         "Dependent Students" : 126988,
//         "Independent Students" : 120406,
//         "Quarterly Total" : 57123,
//         "Award Year To Date Total" : 247394
//     },
//     "26" : {
//         "id_" : 27,
//         "State" : "Montana",
//         "Dependent Students" : 16278,
//         "Independent Students" : 18244,
//         "Quarterly Total" : 7176,
//         "Award Year To Date Total" : 34522
//     },
//     "27" : {
//         "id_" : 28,
//         "State" : "Nebraska",
//         "Dependent Students" : 41043,
//         "Independent Students" : 32587,
//         "Quarterly Total" : 19166,
//         "Award Year To Date Total" : 73630
//     },
//     "28" : {
//         "id_" : 29,
//         "State" : "Nevada",
//         "Dependent Students" : 45915,
//         "Independent Students" : 58024,
//         "Quarterly Total" : 26239,
//         "Award Year To Date Total" : 103939
//     },
//     "29" : {
//         "id_" : 30,
//         "State" : "New Hampshire",
//         "Dependent Students" : 30812,
//         "Independent Students" : 20523,
//         "Quarterly Total" : 12221,
//         "Award Year To Date Total" : 51335
//     },
//     "30" : {
//         "id_" : 31,
//         "State" : "New Jersey",
//         "Dependent Students" : 246299,
//         "Independent Students" : 152719,
//         "Quarterly Total" : 105432,
//         "Award Year To Date Total" : 399018
//     },
//     "31" : {
//         "id_" : 32,
//         "State" : "New Mexico",
//         "Dependent Students" : "33,971",
//         "Independent Students" : "44,058",
//         "Quarterly Total" : "22,434",
//         "Award Year To Date Total" : "78,029"
//     },
//     "32" : {
//         "id_" : 33,
//         "State" : "New York",
//         "Dependent Students" : 472820,
//         "Independent Students" : 338363,
//         "Quarterly Total" : 246455,
//         "Award Year To Date Total" : 811183
//     },
//     "33" : {
//         "id_" : 34,
//         "State" : "North Carolina",
//         "Dependent Students" : 201870,
//         "Independent Students" : 232871,
//         "Quarterly Total" : 126320,
//         "Award Year To Date Total" : 434741
//     },
//     "34" : {
//         "id_" : 35,
//         "State" : "North Dakota",
//         "Dependent Students" : 12268,
//         "Independent Students" : 11039,
//         "Quarterly Total" : 7455,
//         "Award Year To Date Total" : 23307
//     },
//     "35" : {
//         "id_" : 36,
//         "State" : "Ohio",
//         "Dependent Students" : 241754,
//         "Independent Students" : 227031,
//         "Quarterly Total" : 120772,
//         "Award Year To Date Total" : 468785
//     },
//     "36" : {
//         "id_" : 37,
//         "State" : "Oklahoma",
//         "Dependent Students" : 63441,
//         "Independent Students" : 78948,
//         "Quarterly Total" : 40557,
//         "Award Year To Date Total" : 142389
//     },
//     "37" : {
//         "id_" : 38,
//         "State" : "Oregon",
//         "Dependent Students" : 77386,
//         "Independent Students" : 91575,
//         "Quarterly Total" : 29351,
//         "Award Year To Date Total" : 168961
//     },
//     "38" : {
//         "id_" : 39,
//         "State" : "Pennsylvania",
//         "Dependent Students" : 293735,
//         "Independent Students" : 211911,
//         "Quarterly Total" : 148753,
//         "Award Year To Date Total" : 505646
//     },
//     "39" : {
//         "id_" : 40,
//         "State" : "Rhode Island",
//         "Dependent Students" : 24996,
//         "Independent Students" : 19714,
//         "Quarterly Total" : 9245,
//         "Award Year To Date Total" : 44710
//     },
//     "40" : {
//         "id_" : 41,
//         "State" : "South Carolina",
//         "Dependent Students" : 95132,
//         "Independent Students" : 107092,
//         "Quarterly Total" : 73212,
//         "Award Year To Date Total" : 202224
//     },
//     "41" : {
//         "id_" : 42,
//         "State" : "South Dakota",
//         "Dependent Students" : 15899,
//         "Independent Students" : 12534,
//         "Quarterly Total" : 8893,
//         "Award Year To Date Total" : 28433
//     },
//     "42" : {
//         "id_" : 43,
//         "State" : "Tennessee",
//         "Dependent Students" : 165769,
//         "Independent Students" : 151773,
//         "Quarterly Total" : 61131,
//         "Award Year To Date Total" : 317542
//     },
//     "43" : {
//         "id_" : 44,
//         "State" : "Texas",
//         "Dependent Students" : 561695,
//         "Independent Students" : 614084,
//         "Quarterly Total" : 338816,
//         "Award Year To Date Total" : 1175779
//     },
//     "44" : {
//         "id_" : 45,
//         "State" : "Utah",
//         "Dependent Students" : 43217,
//         "Independent Students" : 70583,
//         "Quarterly Total" : 35548,
//         "Award Year To Date Total" : 113800
//     },
//     "45" : {
//         "id_" : 46,
//         "State" : "Vermont",
//         "Dependent Students" : 13351,
//         "Independent Students" : 8631,
//         "Quarterly Total" : 4413,
//         "Award Year To Date Total" : 21982
//     },
//     "46" : {
//         "id_" : 47,
//         "State" : "Virginia",
//         "Dependent Students" : 169683,
//         "Independent Students" : 173637,
//         "Quarterly Total" : 92429,
//         "Award Year To Date Total" : 343320
//     },
//     "47" : {
//         "id_" : 48,
//         "State" : "Washington",
//         "Dependent Students" : 131883,
//         "Independent Students" : 163412,
//         "Quarterly Total" : 55053,
//         "Award Year To Date Total" : 295295
//     },
//     "48" : {
//         "id_" : 49,
//         "State" : "West Virginia",
//         "Dependent Students" : 35748,
//         "Independent Students" : 35522,
//         "Quarterly Total" : 16310,
//         "Award Year To Date Total" : 71270
//     },
//     "49" : {
//         "id_" : 50,
//         "State" : "Wisconsin",
//         "Dependent Students" : 118912,
//         "Independent Students" : 93081,
//         "Quarterly Total" : 52497,
//         "Award Year To Date Total" : 211993
//     },
//     "50" : {
//         "id_" : 51,
//         "State" : "Wyoming",
//         "Dependent Students" : 7905,
//         "Independent Students" : 10692,
//         "Quarterly Total" : 5501,
//         "Award Year To Date Total" : 18597
//     }
// });
//
// const Fafsa = mongoose.model("Fafsa", fafsaSchema);
//
// module.exports = Fafsa;
