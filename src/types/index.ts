type CurrencyInfo = {
	id: string;
	name: string;
	symbol: string;
	code?: string;
};

type Metadata = {
  data: CurrencyInfo[];
};

type ICurrencyListContextProps = {
  parentNavigation?: any;
  metadata: Metadata;
};

export {
  ICurrencyListContextProps,
};
