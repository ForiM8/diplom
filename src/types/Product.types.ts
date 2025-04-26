export type ProductImage = {
	id: number
	path: string
}

export type ProductInBasket = {
	id: number
	slug: string
	name: string
	price: number
	description: string
	count: number
	images: ProductImage[]
	createAt: string
	amount: number
}

export type ProductInResult = {
	count: number
	item: ProductInBasket
}

export type ProductInBasketResponse = {
	result: ProductInResult[]
	isArray: boolean
}

export type ProductEdit = {
	count: number
	item_id: number
}

export type ProductFullData = {
	count: number
	items: Product[]
}

export type ProductsResponse = {
	isArray: boolean
	result: ProductFullData
}

export type ProductResponse = {
	isArray: boolean
	result: Product
}

export type ProductsByCategoryQuery = {
	slug: string
	page: number
}

export type ProductMakeOrder = {
	slug: string
	name: string
	price: number
	description: string
	count: number
	images: ProductImage[]
}

export type ProductSettings = {
	show_if_no_count: boolean
}

export type Product = {
	amount: number
	attribute_group_id: number
	attributes: ItemAttributesType[]
	brand_id: number
	category: CategoryType
	category_id: number
	createdAt: string
	deliveryMethods: string[]
	deliveredTo: string
	updatedAt: string
	specifications: [string, string][]
	discountPrice: number
	discountPercent: number
	description: string
	id: number
	images: ItemImages[]
	meta_description: string
	meta_keywords: string
	title: string
	name: string
	settings: ProductSettings
	slug: string
	old_id: number
	price: number
	short_description: string
	status: string
	user_id: number
	vendor_code: string
	video: string[]
	warehouses: ItemWarehouses[]
	creditPrice: number
	colorsAvailable: string[]
	statistic: {
		score: number
		salesCount: number
	}
}

export type ItemAttributesType = {
	createdAt: string
	updatedAt: string
	id: number
	name: string
	slug: string
	old_id: number
	status: string
	type: number
	user_id: number

	ItemAttributesEntity: {
		attribute_id: number
		createdAt: string
		item_id: number
		updatedAt: string
		values: {
			meaning_id: number | { label: string; value: number }
			value: string | number
		}[]
	}
	meanings: {
		MeaningsAttributeEntity: {
			attribute_id: number
			createdAt: string
			updatedAt: string
			meaning_id: number
		}
		createdAt: string
		updatedAt: string
		id: number
		name: string
		user_id: number
	}[]
}

export type ItemImagesEntity = {
	ordinal_number: number
}

export type ItemImages = {
	id: number
	path: string
	ItemImagesEntity: ItemImagesEntity
}

export type ItemWarehouses = {
	id: number
	name: string
}


export type CategoryType = {
	createdAt: string
	updatedAt: string
	depth: number
	description: string
	id: number
	image_id: number
	lft: number
	rht: number
	meta_description: string
	meta_keywords: string
	title: string
	name: string
	slug: string
	status: number
	old_id: number
	user_id: number
	ordinal_number: number
	parent_id: number
}




export type Category = {
	id: number;
	name: string;
	slug: string;
	lft: number;
	rht: number;
	parent_id: number;
	ordinal_number: number;
}

export type ProductInFavorite = {
	id: number;
	slug: string;
	name: string;
	price: number;
	amount: number;
	settings: {
		show_if_no_count: boolean;
	};
	category: Category;
	warehouses: any[]; // Замените `any` на конкретный тип, если структура известна
	images: ProductImage[];
}
