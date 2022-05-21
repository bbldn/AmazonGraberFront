interface Product {
    asin: string;
    url: string;
    name?: string;
    price?: string;
    brand?: string;
    image?: string;
    rating?: string;
    image_list?: string;
    description?: string;
    search_query?: string;
}

enum ProductFields {
    asin = 'asin',
    url = 'url',
    name = 'name',
    price = 'price',
    brand = 'brand',
    image = 'image',
    rating = 'rating',
    image_list = 'image_list',
    description = 'description',
    search_query = 'search_query',
}

export {ProductFields};
export type {Product};