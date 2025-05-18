export type User = {
	name: string;
	email: string;
	sub: string;
	id: string;
	phone: string;
	rating: number,
	city: string;
	password: string;
	accessToken: string;
	accessTokenExpires: number;
	refreshToken: string;
	status: number;
	iat: number;
	exp: number;
	jti: string;
	error: string;
	reviews: number;
	data: string;
}
export type Image = {
	image: string;
}
export type Product = {
	_id: string;
	title: string;
	description: string;
	price: string;
	images: Image[];
	categorySlug: string;
	user: User;

}