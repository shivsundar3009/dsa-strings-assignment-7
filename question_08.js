function checkStraightLine(coordinates) {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const initialSlope = (y2 - y1) / (x2 - x1);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      const slope = (y - y1) / (x - x1);
      if (slope !== initialSlope) {
        return false;
      }
    }
  
    return true;
  }