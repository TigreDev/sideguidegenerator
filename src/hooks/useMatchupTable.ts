import { Matchup } from '../utils/tablegenerator';


const getMainColumns = (matchup: Matchup[]) => {
    const cardNames = matchup.reduce<string[]>((allCards, currentValue) => {
        const currentMatchupNames = currentValue.mainChanges.map(cardLine => cardLine.cardName);
        return [...allCards, ...currentMatchupNames]
    }, [])

    const columns = new Set<string>();

    cardNames.map(cardName => {
        return columns.add(cardName);
    })

    return Array.from(columns)
}
const getSideColumns = (matchup: Matchup[]) => {
    const cardNames = matchup.reduce<string[]>((allCards, currentValue) => {
        const currentMatchupNames = currentValue.sideChanges.map(cardLine => cardLine.cardName);
        return [...allCards, ...currentMatchupNames]
    }, [])

    const columns = new Set<string>();

    cardNames.map(cardName => {
        return columns.add(cardName);
    })

    return Array.from(columns)
}

export function useMatchupTable(sideInput: Matchup[]) {
    const headers = sideInput.map(matchup => matchup.deck);
    const mainColumns = getMainColumns(sideInput);
    const sideColumns = getSideColumns(sideInput);
    return {
        mainColumns,
        sideColumns,
        headers,
    }
}