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
        if (['-', '+'].includes(cardLine[0]) && !isNaN(Number(cardLine[1]))) {
            return ({
                cardName: cardLine.substring(3),
                amount: cardLine.substring(0, 3),
            })
        }
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


export const hasCardName = (changes: CardLine[], cardName: string) => changes.some(change => change.cardName === cardName);
export const getSideChange = (matchups: Matchup[], cardName: string, deck: string) => {
    const sideChanges = matchups.find(
        matchup => matchup.deck === deck && hasCardName(matchup.sideChanges, cardName)
    );
    return (sideChanges && sideChanges.sideChanges.find(change => change.cardName === cardName)?.amount) ?? ""
}
export const getMainChange = (matchups: Matchup[], cardName: string, deck: string) => {
    const mainChanges = matchups.find(
        matchup => matchup.deck === deck && hasCardName(matchup.mainChanges, cardName)
    );
    return (mainChanges && mainChanges.mainChanges.find(change => change.cardName === cardName)?.amount) ?? ""
}