const locationsCollection = [
    { 
      location: "The Beach"
    },
    {
      location: "The Deep Sea"

    },
    {
        location: "Small Pond"
    }
    
];


export const useLocation = () => {
    return locationsCollection.slice()
}