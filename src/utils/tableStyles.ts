import classNames from "classnames";

export const defaultCellStyle = "border border-slate-500"
export const valuesCellStyle = classNames(defaultCellStyle, "text-center")
export const cardNamesCellStyle = classNames(valuesCellStyle, "text-right px-2")
export const getHeaderNameVariant = (rowIdx: number) => classNames(cardNamesCellStyle, {
    "bg-gray-100": rowIdx % 2 === 0,
    "bg-gray-300": rowIdx % 2 !== 0,
    "px-2 py-1": true
});
export const getSideCellVariant = (colIdx: number) => (classNames(valuesCellStyle, {
    "bg-green-300": colIdx % 2 !== 0,
    "bg-green-200": colIdx % 2 === 0,
}))

export const getMainCellVariant = (colIdx: number) => (classNames(valuesCellStyle, {
    "bg-red-300": colIdx % 2 !== 0,
    "bg-red-200": colIdx % 2 === 0,
}))


export const getSideCellVariantGray = (colIdx: number) => (classNames(valuesCellStyle, {
    "bg-gray-300": colIdx % 2 !== 0,
    "bg-gray-200": colIdx % 2 === 0,
}))

export const getMainCellVariantGray = (colIdx: number) => (classNames(valuesCellStyle, {
    "bg-gray-300": colIdx % 2 !== 0,
    "bg-gray-200": colIdx % 2 === 0,
}))

export const useTableVariants = (variant: string) => {

    if (variant === "grays") {
        return {
            getHeaderNameVariant,
            getSideCellVariant: getSideCellVariantGray,
            getMainCellVariant: getMainCellVariantGray,
        }
    }

    return ({
        getHeaderNameVariant,
        getSideCellVariant,
        getMainCellVariant,
    })
}