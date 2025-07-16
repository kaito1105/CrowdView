import { ImageSourcePropType } from 'react-native';

export type Facility = {
  id: string;
  description: "low" | "medium" | "high";
  imagePath: ImageSourcePropType | undefined;
  hours: string[][]; // 0-6, Sunday through Saturday
  center: {
    latitude: number;
    longitude: number;
  };
  edge: {
    latitude: number;
    longitude: number;
  };
};

export const FACILITIES: Facility[] = [{
  id: "Cafeteria",
  description: "medium",
  imagePath: require("@/assets/images/cafe.jpg"),
  hours: [
    ["9:00am - 2:00pm", "4:30 - 8:00pm"],
    ["7:30am - 9:30am", "10:45am - 2:00pm", "4:30 - 8:00pm"],
    ["7:30am - 9:30am", "10:45am - 2:00pm", "4:30 - 8:00pm"],
    ["7:30am - 9:30am", "10:45am - 2:00pm", "4:30 - 8:00pm"],
    ["7:30am - 9:30am", "10:45am - 2:00pm", "4:30 - 8:00pm"],
    ["7:30am - 9:30am", "10:45am - 2:00pm", "4:30 - 7:30pm"],
    ["9:00am - 2:00pm", "4:30 - 7:30pm"],
  ],
  center: {
    latitude: 42.2489473333388,
    longitude: -87.82813970120232
  },
  edge: {
    latitude: 42.24900114126084,
    longitude: -87.82841890578662
  },
}, {
  id: "Library",
  description: "low",
  imagePath: require("@/assets/images/library.jpg"),
  hours: [
    ["8:00am - 11:00pm"],
    ["8:00am - 11:00pm"],
    ["8:00am - 11:00pm"],
    ["8:00am - 11:00pm"],
    ["8:00am - 11:00pm"],
    ["8:00am - 11:00pm"],
    ["8:00am - 11:00pm"],
  ],
  center: {
    latitude: 42.24953384054592,
    longitude: -87.82755760166695,
  },
  edge: {
    latitude: 42.24947963314398,
    longitude: -87.82723557607686,
  },
}, {
  id: "Sports & Recreation Center",
  description: "high",
  imagePath: require("@/assets/images/src.jpg"),
  hours: [
    ["8:00am - 11:00pm"],
    ["6:00am - 11:00pm"],
    ["6:00am - 11:00pm"],
    ["6:00am - 11:00pm"],
    ["6:00am - 11:00pm"],
    ["6:00am - 10:00pm"],
    ["8:00am - 10:00pm"],
  ],
  center: {
    latitude: 42.2442420304945,
    longitude: -87.82799785248999,
  },
  edge: {
    latitude: 42.24474680996077,
    longitude: -87.82836481020739
  },
}, {
  id: "Boomers",
  description: "low",
  imagePath: require("@/assets/images/boomers.jpg"),
  hours: [
    ["10:00am - 11:59pm"],
    ["8:00am - 11:59pm"],
    ["8:00am - 11:59pm"],
    ["8:00am - 11:59pm"],
    ["8:00am - 11:59pm"],
    ["8:00am - 11:59pm"],
    ["10:00am - 11:59pm"],
  ],
  center: {
    latitude: 42.24875432809444,
    longitude: -87.82767711519685,
  },
  edge: {
    latitude: 42.24863894383993,
    longitude: -87.827704850064,
  },
}];
