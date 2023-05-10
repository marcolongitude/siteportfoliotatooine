type dateProps = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

export const FormatDateISO = (data: string): string => {
    const options: dateProps = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateParse = new Date(data)

    return dateParse.toLocaleString('pt-BR', options)
}