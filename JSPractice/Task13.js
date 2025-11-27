function downloadFile(speed) {
  return new Promise((resolve, reject) => {
    if (speed > 50) {
      resolve("Download complete!");
    } else {
      reject("Slow internet!");
    }
  });
}

downloadFile(93)
  .then((res) => {
    console.log(res);
    return "Processing file...";
  })
  .then((res) => {
    console.log(res);
    return "Processing file... DONE!";
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
