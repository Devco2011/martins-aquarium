import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

    const contentElement = document.querySelector(".harvestingLocations")
    const locations = useLocation()

    // Generate all of the HTML for all of the tips
    let locationHTMLRepresentations = ""
    for (const location of locations) {
        locationHTMLRepresentations += Location(location)

        /*
            Invoke the Tip component function
            and pass the current tip object as an argument.
            Each time, add the return value to the
            tipHTMLRepresentations variable with `+=`
        */
    }

        // Add a section, and all of the tip to the DOM
        contentElement.innerHTML += `
        
            ${locationHTMLRepresentations}
       
    `
}