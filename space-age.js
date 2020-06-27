// Problem: Given an age in seconds, calculate how old someone would be on a planet
// Example :
//    - Mercury: orbital period 0.2408467 Earth years
//    - Venus: orbital period 0.61519726 Earth years
//    - Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
//    - Mars: orbital period 1.8808158 Earth years
//    - Jupiter: orbital period 11.862615 Earth years
//    - Saturn: orbital period 29.447498 Earth years
//    - Uranus: orbital period 84.016846 Earth years
//    - Neptune: orbital period 164.79132 Earth years

// So if you were told someone were 1,000,000,000 seconds old, you should
// be able to say that they're 31.69 Earth-years old.

// Data: input will be string and int output will be a string
// Alogrithm: create a function that translates the seconds to earth years
// Then checks to see what the planet is and matches to a specific equation
// This equation takes the earth years times it to the number to translate the age
// Return the age

export const age = (planets, seconds) => {
  const oneEarthYear = seconds / 31557600
  let planetAge = 0
  switch (planets) {
    case "earth":
      planetAge = oneEarthYear
      break
    case "mercury":
      planetAge = oneEarthYear / 0.2408467
      break
    case "venus":
      planetAge = oneEarthYear / 0.61519726
      break
    case "mars":
      planetAge = oneEarthYear / 1.8808158
      break
    case "jupiter":
      planetAge = oneEarthYear / 11.862615
      break
    case "saturn":
      planetAge = oneEarthYear / 29.447498
      break
    case "uranus":
      planetAge = oneEarthYear / 84.016846
      break
    case "neptune":
      planetAge = oneEarthYear / 164.79132
      break
  }
  return parseFloat(planetAge.toFixed(2))
}

// const seconds = process.argv[3]
// const planets = process.argv[2]
// age(planets, seconds)
