function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false; // If the lengths are different, they can't be isomorphic
  }

  const mapS = {}; // Map to store character mappings from s to t
  const mapT = {}; // Map to store character mappings from t to s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapS[charS]) {
      if (mapS[charS] !== charT) {
        return false; // charS already mapped to a different charT
      }
    } else {
      mapS[charS] = charT;
    }

    if (mapT[charT]) {
      if (mapT[charT] !== charS) {
        return false; // charT already mapped to a different charS
      }
    } else {
      mapT[charT] = charS;
    }
  }

  return true; // All characters are successfully mapped
}