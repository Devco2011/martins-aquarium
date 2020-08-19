const fishCollection = [
    { 
      givenName: "Big Blue",
      species: "Bet",
      length: "2 inches",
      diet: "Flies",
      harvestLocation: "Beaches of Walmart",
      image: "./../images/blueFish.jpeg"

    },
    {
      givenName: "Oran",
      species: "Goldfish",
      length: "2 inches",
      diet: "Flies",
      harvestLocation: "Pond",
      image: "./../images/orangeFish.jpeg"

    },
    {
      givenName: "Purp",
      species: "Unknown",
      length: "3 inches",
      diet: "Fish food",
      harvestLocation: "Reef",
      image: "./../images/purpleFish.jpeg"


    },
    {
      givenName: "Mr. Red",
      species: "Unknown",
      length: "2 inches",
      diet: "Flies",
      harvestLocation: "Beaches of Walmart",
      image: "./../images/redFish.jpeg"


    },
    {
        givenName: "Dory",
        species: "Royal Blue Tang",
        length: "18 cm",
        diet: "crustaceans",
        harvestLocation: "Reef",
        image: "./../images/blueFish.jpeg"
    },
    {
        givenName: "Archy",
        species: "Arc-Eye Hawkfish",
        length: "20 cm",
        diet: "shrimp and other small fishes",
        harvestLocation: "Seaward reefs in the pacific ocean",
        image: "./../images/blueFish.jpeg"
    },
    {
        givenName: "Pear",
        species: "Bartletts' Anthias",
        length: "9 cm",
        diet: "zooplankton",
        harvestLocation: "Coral reef in the western Pacific ocean",
        image: "./../images/blueFish.jpeg"
    },
    {
        givenName: "Axel Rose",
        species: "Axilspot Wrasse",
        length: "20 cm",
        diet: "mollusks",
        harvestLocation: "A clear lagoon",
        image: "./../images/blueFish.jpeg"
    },
    {
        givenName: "Angle",
        species: "Bicolor Angelfish",
        length: "15 cm",
        diet: "coral polyps",
        harvestLocation: "Coral and rubble areas",
        image: "./../images/blueFish.jpeg"
    },
    {
        givenName: "Patricia",
        species: "Bignose Unicornfish",
        length: "55 cm",
        diet: "zooplankton",
        harvestLocation: "Deep lagoon",
        image: "./../images/blueFish.jpeg"
    },
    
];


export const useFish = () => {
    return fishCollection.slice()
}