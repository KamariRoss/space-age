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

export const age = (seconds, planets) => {
  const oneEarthYear = seconds / 31557600
  switch (planets) {
    case "Earth":
      return oneEarthYear
    case "Mercury":
      return (oneEarthYear / 0.2408467).toFixed(2)

    case "Venus":
      return (oneEarthYear / 0.61519726).toFixed(2)
    case "Mars":
      return (oneEarthYear / 1.8808158).toFixed(2)

    case "Jupiter":
      return (oneEarthYear / 11.862615).toFixed(2)

    case "Saturn":
      return (oneEarthYear / 29.447498).toFixed(2)

    case "Uranus":
      return (oneEarthYear / 84.016846).toFixed(2)

    case "Neptune":
      return (oneEarthYear / 164.79132).toFixed(2)
  }
}

// const seconds = process.argv[2]
// const planets = process.argv[3]
// age(seconds, planets)
