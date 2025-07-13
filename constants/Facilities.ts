export type Facility = {
  id: string;
  name: string;
  description: "low" | "mid" | "high";
  color: string;
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
    name: "LFC Cafeteria",
    description: "mid",
    color: "orange",
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
    name: "LFC Library",
    description: "low",
    color: "green",
    center: {
      latitude: 42.24953384054592,
      longitude: -87.82755760166695,
    },
    edge: {
      latitude: 42.24947963314398, 
      longitude: -87.82723557607686,
    },
  }, {
    id: "SRC",
    name: "LFC SRC",
    description: "high",
    color: "tomato",
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
    name: "LFC Boomers",
    description: "low",
    color: "green",
    center: {
      latitude: 42.24875432809444,
      longitude: -87.82767711519685,
    },
    edge: {
      latitude: 42.24863894383993, 
      longitude: -87.827704850064,
    },
  }];
