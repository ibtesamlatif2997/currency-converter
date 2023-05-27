export type ConvertParams = {
    from: string,
    to: string,
    amount: number
};

export type HistoricParams = {
    start_date: string,
    end_date: string
}

export type PopularCurrencies = {
    currency: string,
    value: number
}

export type Currency = {
    name: string,
    value: string
}

export type convertEvent = {
    from: string,
    to: string,
    amount: number
}