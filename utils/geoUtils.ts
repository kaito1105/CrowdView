export type Coordinates = {
  latitude: number;
  longitude: number;
};

function getDistanceFromLatLonInMeters(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  const R = 6371000; // Radius of Earth in meters
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + 
            Math.cos(deg2rad(lat1)) * 
            Math.cos(deg2rad(lat2)) * 
            Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

export default function checkLocation(
  centerCoords: Coordinates, 
  edgeCoords: Coordinates, 
  currentCoords: Coordinates | null
): boolean {
  if (!currentCoords) return false;
  
  // Use center and edge to define radius
  const radius = getDistanceFromLatLonInMeters(
    centerCoords.latitude,
    centerCoords.longitude,
    edgeCoords.latitude,
    edgeCoords.longitude
  );

  // Get distance from center to current user location
  const distanceToUser = getDistanceFromLatLonInMeters(
    centerCoords.latitude,
    centerCoords.longitude,
    currentCoords.latitude,
    currentCoords.longitude
  );

  return distanceToUser <= radius;
}