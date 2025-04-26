export const formatCurrencyRub = (price: number) => {
	return new Intl.NumberFormat("ru-RU", {
		currency: "RUB",
		maximumFractionDigits: 0,
		style: "currency",
	}).format(price);
};
