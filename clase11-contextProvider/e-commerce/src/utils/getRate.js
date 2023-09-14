export const getRate = (number) => {
  const total = 5
  const floorNumber = Math.floor(number)

  const stars = '★'.repeat(floorNumber)
  const end = '☆'.repeat(total - floorNumber)
  return `${stars}${end}`
}
