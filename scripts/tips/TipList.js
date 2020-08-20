/**
 *  TipList which renders individual tip objects as HTML
 */
import { useTip } from "./TipDataProvider.js"
import { Tip } from "./tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tiplist")
    const tips = useTip()

    // Generate all of the HTML for all of the tips
    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)

        /*
            Invoke the Tip component function
            and pass the current tip object as an argument.
            Each time, add the return value to the
            tipHTMLRepresentations variable with `+=`
        */
    }

        // Add a section, and all of the tip to the DOM
        contentElement.innerHTML += `
        
            ${tipHTMLRepresentations}
       
    `
}