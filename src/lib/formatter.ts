const date = (input: Date | string): string => {
    const parsedDate: Date = typeof input === "string" ? new Date(input) : input;

    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(parsedDate);
};

const number = (input: number): string => {
    return new Intl.NumberFormat("en", {
        style: "decimal"
    }).format(input);
};

const time = (input: Date | string, unit?: Intl.RelativeTimeFormatUnit): string => {
    const date = typeof input === "string" ? new Date(input) : input;
    if (unit) {
        return new Intl.RelativeTimeFormat("en", {
            numeric: "auto"
        }).format(date.getTime() - Date.now(), unit);
    }
    return new Intl.DateTimeFormat("en", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }).format(date);
};

export const formatter = {
    date,
    number,
    time
};
