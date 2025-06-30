const detectText = async (uri) => {
  console.log("uri:", uri);
  // const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });

  // const response = await fetch(
  //   `https://vision.googleapis.com/v1/images:annotate?key=${process.env.VISION_API_KEY}`,
  //   {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       requests: [
  //         {
  //           image: { content: base64 },
  //           features: [{ type: "TEXT_DETECTION" }],
  //         },
  //       ],
  //     }),
  //   }
  // );
  // const result = await response.json();
  // console.log(result);
};

module.exports = { detectText };