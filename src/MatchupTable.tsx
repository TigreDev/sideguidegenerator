import { useMatchupTable } from './hooks/useMatchupTable';
import { CardLine, Matchup } from './utils/tablegenerator';
export function MatchupTable({ matchups }: { matchups: Matchup[] }) {
    const {
        mainColumns,
        sideColumns,
        headers
    } = useMatchupTable(matchups)

    return (
        <table>
            <thead>
                <tr>
                    <th>GuideList</th>
                    {headers.map(deck => (
                        <th key={deck}>{deck}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {mainColumns.map(cardName => (
                    <tr key={cardName}>
                        <td>{cardName}</td>
                        {headers.map(deck => {
                            const matchingMainChange = matchups.find(
                                matchup => matchup.deck === deck && hasCardName(matchup.mainChanges, cardName)
                            );
                            return (
                                <td key={deck}>
                                    {matchingMainChange && matchingMainChange.mainChanges.find(change => change.cardName === cardName)?.amount}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                {sideColumns.map(cardName => (
                    <tr key={cardName}>
                        <td>{cardName}</td>
                        {headers.map(deck => {
                            const matchingSideChange = matchups.find(
                                matchup => matchup.deck === deck && hasCardName(matchup.sideChanges, cardName)
                            );
                            return (
                                <td key={deck}>
                                    {matchingSideChange && matchingSideChange.sideChanges.find(change => change.cardName === cardName)?.amount}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const hasCardName = (changes: CardLine[], cardName: string) => changes.some(change => change.cardName === cardName);
