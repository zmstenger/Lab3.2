const inchToCm = inches => {
  const cm = inches * 2.54
  console.log(
    `${inches.toFixed(2) + (inches <= 1 ? ' inch' : ' inches')} is equal to ${cm.toFixed(2)} cm.`
  )
  return cm
}
const lbsToKilo = lbs => {
  const kilos = lbs / 2.2046
  console.log(
    `${lbs.toFixed(2) + (lbs <= 1 ? ' pound' : ' pounds')} is equal to ${
      kilos.toFixed(2) + (kilos <= 1 ? ' kilo' : ' kilos')
    }.`
  )
  return kilos
}
const getBMI = (height, weight) => {
  const heightInMeters = height / 100
  const bmi = weight / (heightInMeters ^ 2)
  console.log(
    `With a height of ${height.toFixed(2)} cm and a weight of ${
      weight.toFixed(2) + (weight <= 1 ? ' kilo' : ' kilos')
    }, your BMI comes to ${bmi.toFixed(2)}.`
  )
  return bmi
}

const height = 69
const weight = 146
const heightCm = inchToCm(height)
const weightKilo = lbsToKilo(weight)
const bmi = getBMI(heightCm, weightKilo)
