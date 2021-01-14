//CURRENT GOAL: GET THIS SHIT WORKING IN VITE

interface Roll {
    id: number, // an ID unique to each roll
    title: string, // the name that the user chooses for the roll
    values: {
      quan: number, // how many dice are rolled
      size: number, // the number of faces for each die
      mod: number, // the modifier for the roll
    }
}

interface Result {
        title: string,
        list: number[],
        total: number,
        text: string,
        quan: number,
        size: number,
        adder: number,
}