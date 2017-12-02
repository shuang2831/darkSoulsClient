import ApiUtils from "./apiUtils";

export function getMarkCards(locationData) {
  return fetch(
    `http:///192.168.0.8:8080/api/message?latitude=${locationData.latitude}&longitude=${locationData.longitude}`,
    { method: "GET" }
  )
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
    .catch(e => {
      console.log(e);
      throw new Error(e.message);
    });
}

export function postMarkCard(message) {
  var request = new Request("`http://192.168.0.8:8080/api/message", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "text/plain"
    }),
    body: JSON.stringify(message)
  });

  fetch(request).then(response => response.json());
}
