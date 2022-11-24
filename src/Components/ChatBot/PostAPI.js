export default function postAPI(
  inputText,
  updateChat,
  setInputText,
  setButton,
  updateButton,
  updateInputChat
) {
  setInputText([]);
  setButton([]);
  updateInputChat(inputText, "user");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    queryText: inputText,
    sessionId: "aaaaaaa",
    languageCode: "en",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:5000/dialogflow", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      //console.log(result.text);
      result = JSON.parse(result);
      console.log(result);

      if (result.button) {
        updateButton(result.button);
      }

      updateChat(result.text, "robot");
      //setChat([...chat, { message: result, type: "robot" }]);
    })
    .catch((error) => console.log("error", error));
}
