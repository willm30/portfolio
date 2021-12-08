export function isVideoThumbnail(image: any) {
  return image.fixed.originalName.includes("VideoThumbnail");
}

export function getCaption(image) {
  const originalTitle = image.fixed.originalName;
  const imageTitle = originalTitle.match(/[a-zA-Z]+/)[0];
  const spacedTitle = imageTitle.replace(/([A-Z])/g, " $1");
  return spacedTitle;
}

export function getOrder(image) {
  console.log(image, "image");
  const originalTitle = image.fixed.originalName;
  return Number(originalTitle.match(/[0-9]/)[0]);
}
