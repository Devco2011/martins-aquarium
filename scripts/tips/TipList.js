/**
 *   FishList which renders individual fish objects as HTML
 */
import { useTip } from "./TipDataProvider.js"
import { Tip } from "./tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tiplist")
    const tips = useTip()

    // Generate all of the HTML for all of the fish
    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)

        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
    }

        // Add a section, and all of the fish to the DOM
        contentElement.innerHTML += `
        
            ${tipHTMLRepresentations}
       
    `
}