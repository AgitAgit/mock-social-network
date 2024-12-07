const copyToClipboard = async (currentUrl) => {
  try {
    await navigator.clipboard.writeText(currentUrl);
    alert("URL Copied to Clipboard!");
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    alert("Failed to Copy URL!");
  }
};

export default copyToClipboard;
