import { useMatchupTable } from './hooks/useMatchupTable';
import { cardNamesCellStyle, useTableVariants } from './utils/tableStyles';
import { Matchup, getMainChange, getSideChange } from './utils/tablegenerator';
import classNames from 'classnames';


export function MatchupTable({ matchups, colorSchema }: { matchups: Matchup[], colorSchema: string }) {
    const {
        mainColumns,
        sideColumns,
        headers
    } = useMatchupTable(matchups)
    const { getHeaderNameVariant, getMainCellVariant, getSideCellVariant } = useTableVariants(colorSchema);

    return (
        <table>
            <thead>
                <tr>
                    <th ></th>
                    {headers.map((deck, rowIdx) => (
                        <th className={getHeaderNameVariant(rowIdx)} key={deck}><span className="[writing-mode:vertical-lr]">{deck}</span></th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {mainColumns.map((cardName) => (
                    <tr key={cardName}>
                        <td className={classNames(cardNamesCellStyle, colorSchema === "default" ? "bg-red-300" : "bg-gray-300")}>{cardName}</td>
                        {
                            headers.map((deck, colIdx) => {
                                return (
                                    <td className={getMainCellVariant(colIdx)} key={deck}>
                                        {getMainChange(matchups, cardName, deck)}
                                    </td>
                                );
                            })
                        }
                    </tr>
                ))}
                {sideColumns.map((cardName) => (
                    <tr key={cardName}>
                        <td className={classNames(cardNamesCellStyle, colorSchema === "default" ? "bg-green-300" : "bg-gray-300")} >{cardName}</td>
                        {
                            headers.map((deck, colIdx) => {
                                return (
                                    <td className={getSideCellVariant(colIdx)} key={deck}>
                                        {getSideChange(matchups, cardName, deck)}
                                    </td>
                                );
                            })
                        }
                    </tr>
                ))}
            </tbody>
        </table >
    );
};

