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

export const age = (planet, seconds) => {
  const oneEarthYear = seconds / 31557600
  const planetaryEarthYearConversion = {
    mercury: 0.2408467,
    earth: 1,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  }

  return Number(
    (oneEarthYear / planetaryEarthYearConversion[planet]).toFixed(2)
  )
}

// const seconds = process.argv[3]
// const planets = process.argv[2]
// age(planets, seconds)
