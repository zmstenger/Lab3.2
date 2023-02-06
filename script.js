const inventory = []

const height = 72
const weight = 180
const heightCm = inchToCm(height)
const weightKilo = lbsToKilo(weight)
const bmi = getBMI(heightCm, weightKilo)
