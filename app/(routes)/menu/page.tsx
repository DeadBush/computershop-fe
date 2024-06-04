import getCategories from "@/actions/get-categories";
import Box from "@/components/ui/box";
import Container from "@/components/ui/container";
import FilterContainer from "@/components/ui/filter-container";
import CategoryFilters from "@/app/(routes)/menu/components/category-filter";
import getSizes from "@/actions/get-size";
import SizesFilters from "./components/size-filter";
import BrandsFilters from "./components/brand-filter";
import getBrands from "@/actions/get-brand";
import getManufacturers from "@/actions/get-manufacturers";
import ManufacturersFilters from "./components/manufacturer-filter";
import getProducts from "@/actions/get-products";
import PageContent from "./components/page-content";

export const revalidate = 0;

interface MenuProps {
    searchParams: {
        size?: string;
        isFeatured?: boolean;
        brand?:string;
        manufacturer?:string;
        category?:string;
    };
}

const MenuPage = async ({searchParams} : MenuProps) => {
    const categories = await getCategories();
    const sizes = await getSizes();
    const brands = await getBrands();
    const manufacturers = await getManufacturers();
    const products = await getProducts({
        size : searchParams?.size,
        isFeatured:searchParams?.isFeatured,
        brand:searchParams?.brand,
        manufacturer:searchParams?.manufacturer,
        category:searchParams?.category
    });
    return (
        <Container className="px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
                <div className="hidden md:block col-span-2 border-r border-gray-100 top-24">
                    <FilterContainer>
                        <CategoryFilters categories = {categories}/>
                        <SizesFilters sizes={sizes}/>
                        <BrandsFilters brands={brands}/>
                        <ManufacturersFilters manufacturers={manufacturers}/>
                    </FilterContainer>
                </div>
                <Box className="col-span-12 md:col-span-10 flex-col items-start justify-start w-full">
                    <PageContent products={products}/>
                </Box>
            </div>
        </Container>
    );

}

export default MenuPage;