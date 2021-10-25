const moneyFormat = (money) => {
    return money.toLocaleString()
}
export { moneyFormat }

function numFormatter(money) {
    if (money > 999 && money < 1000000) {
        return (money / 1000) + 'K';
    } else if (money > 1000000 && money < 1000000000) {
        return (money / 1000000) + 'M';
    } else if (money > 1000000000) {
        return (money / 1000000000) + 'b';
    } else if (money < 900) {
        return money;
    }
}
export { numFormatter }

