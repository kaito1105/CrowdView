function calculateRadius(center, edge) {
  const x_center = Math.abs(center.longitude);
  const y_center = Math.abs(center.latitude);
  const x = Math.abs(edge.longitude);
  const y = Math.abs(edge.latitude);
  const r = Math.sqrt((x_center - x)**2 + (y_center - y)**2);

  return r;
}

export default function checkLocation(center, edge, current) {
  const r = calculateRadius(center, edge);
  const x = current.longitude;
  const y = current.latitude;

  return (x**2 + y**2) < r**2;
}
