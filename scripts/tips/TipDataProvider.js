const tipsCollection = [
    { 
      tip: "You must feed your fish daily."
    },
    {
      tip: "Have daily talks with your fish about vacation."

    },
    {
        tip: "Sing Jazz standards to your fish in the morning"
    }
    
];


export const useTip = () => {
    return tipsCollection.slice()
}