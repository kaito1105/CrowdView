export const getColorByCrowdLevel = (level: string): string => {
  switch (level) {
    case "high":
      return "#ed3030";
    case "medium":
      return "#ff6d4d";
    case "low":
      return "#07adcd";
    default:
      return "#292929";
  }
};

export const getBackgroundColorByCrowdLevel = (level: string): string => {
  switch (level) {
    case "high":
      return "#ffebeb";
    case "medium":
      return "#fff4ca";
    case "low":
      return "#e5fcff";
    default:
      return "#707070";
  }
};