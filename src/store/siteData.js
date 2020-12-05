const navigationData = [
  {
    isNavigationmenu: true,
    manuname: "Home",
    menuicon: "UpdateIcon",
    menulink: "/home",
  },
  {
    isNavigationmenu: true,
    manuname: "Service",
    menuicon: "UpdateIcon",
    menulink: "/service",
  },
  {
    isNavigationmenu: true,
    manuname: "Appointment",
    menuicon: "UpdateIcon",
    menulink: "/appointment",
  },
  {
    isNavigationmenu: true,
    manuname: "Triage",
    menuicon: "UpdateIcon",
    menulink: "/triage",
  },
  {
    isNavigationmenu: true,
    manuname: "Contact",
    menuicon: "UpdateIcon",
    menulink: "/contact",
  },
  {
    isNavigationmenu: false,
    manuname: "Profile",
    menuicon: "AccountCircle",
    menulink: "#",
  },
];

const userData = {
  name: "David Reynold",
  phoneno: "+91 98410 98410",
  profilepic:
    "https://cdn1.iconfinder.com/data/icons/flat-character-color-1/60/flat-design-character_2-512.png",
};

const doctorData = [
  {
    name: "David Reynold",
    specilist: "Heart Specilist",
    profilepic:
      "https://cdn1.iconfinder.com/data/icons/flat-character-color-1/60/flat-design-character_2-512.png",
    avalability: {
      day: ["Mon", " Wed", " & Fri"],
      time: ["10:00 AM", " & 03:00 PM"],
    },
  },
];

const appointmentBookedList = {
  "09-12-2020": [
    {
      time: "10:00 AM",
    },
    {
      time: "11:00 AM",
    },
    {
      time: "12:00 PM",
    },
  ],
  "20-12-2020": [
    {
      time: "11:00 AM",
    },
  ],
  "23-12-2020": [
    {
      time: "12:00 AM",
    },
  ],
  "28-12-2020": [
    {
      time: "12:00 AM",
    },
  ],
};

export { navigationData, userData, appointmentBookedList, doctorData };
