export type CardLine = {
    cardName: string;
    amount: string;
}
export type Matchup = {
    deck: string;
    mainChanges: CardLine[];
    sideChanges: CardLine[];
}

export const getMatchups = (input: string): Matchup[] => {
    const matchupArray = input.split("---\n");
    const matchupCards = matchupArray.map((matchup) => {
        const matchupLines = getMatchup(matchup);
        return matchupLines;
    });
    return matchupCards
}

export const getMatchup = (matchup: string): Matchup => {
    const matchupLines = matchup.split("\n");
    const deck = matchupLines[0] ?? ""
    const matchupCards = matchupLines.splice(1).map((cardLine) => {
        const splittedLine = cardLine.split(": ");
        return ({
            cardName: splittedLine[0] ?? "",
            amount: splittedLine[1],
        })
    });
    const sideChanges = matchupCards.filter(card => Number(card.amount) > 0)
    const mainChanges = matchupCards.filter(card => Number(card.amount) < 0)
    return ({
        deck,
        sideChanges,
        mainChanges
    })
}
