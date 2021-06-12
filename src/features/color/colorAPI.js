import axios from "axios";

export function fetchColor(amount = 1) {
  return new Promise((resolve, reject) =>
    axios
      .get("http://www.thecolorapi.com/id?hex=0047AB")
      .then(function (response) {
        // handle success
        resolve(response.data.name.closest_named_hex);
      })
      .catch(function (error) {
        // handle error
        reject(error);
      })
  );
}
