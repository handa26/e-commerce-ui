import { z } from "zod";

export type ProductType = {
	id: number | string;
	name: string;
	shortDescription: string;
	description: string;
	price: number;
	sizes: string[];
	colors: string[];
	images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
	quantity: number;
	selectedSize: string;
	selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
	name: z.string().min(3, "Name is required!"),
	email: z.email().min(3, "Email is required!"),
	phone: z
		.string()
		.min(7, "Phone number must be between 7 and 10 digits!")
		.max(10, "Phone number must be between 7 and 10 digits!")
		.regex(/^\d+$/, "Phone number must be digits only!"),
	address: z.string().min(1, "Address is required!"),
	city: z.string().min(1, "City is required!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
