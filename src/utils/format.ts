export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 100000) + '万'
  } else {
    return count
  }
}

export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}${height}`
}
