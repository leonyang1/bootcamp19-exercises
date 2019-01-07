// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (let key in obj) {
    if (typeof el == 'object') {
      return hasFalsyValue(el);
    }
    else {
      if (!obj[key])
      {
        return true;
      }
    }
  }
  return false;
};
