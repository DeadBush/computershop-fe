import getProducts from "@/actions/get-products";
import  Container  from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PopularContent } from "@/components/ui/popular-content";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Car, Shield, Truck, Computer } from "lucide-react";

export const revalidate = 0;

const HomePage = async() =>{
    const products = await getProducts({isFeatured: true});
    return (
        <>
        <Container className="px-4 md:px-12">
            <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
                <div className="flex flex-col items-start justify-start gap-4">
                    <p className="px-6 py-1 rounded-full text-neutral-500 border boder-gray-300">Cần mua máy tính ngay?</p>
                
                    <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
                        Hãy ghé qua <span className="block py-4">Bích Huyền's Computer Shop ngay bây giờ!</span>
                        </h2>
                        <p className="text-base text-center md:text-left text-neutral-500 my-4">
                        Chào mừng đến với Bích Huyền's Computer Shop, điểm đến lý tưởng cho tất cả những ai đam mê công nghệ! Dù bạn là một game thủ cuồng nhiệt, một kỹ sư phần mềm, hay chỉ đơn giản là người yêu thích các thiết bị công nghệ mới nhất, chúng tôi đều có thể đáp ứng nhu cầu của bạn. Cửa hàng của chúng tôi cung cấp một loạt các sản phẩm từ các bộ máy chơi game tối tân và máy tính tùy chỉnh cho đến laptop, linh kiện và phụ kiện.
                    </p>

                    <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
                        <Link href={"/menu"}>
                            <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero">Đặt hàng ngay</Button>
                        </Link>
                        <Link href={"/"}>
                            <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full"variant="outline">Khám phá thêm</Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="w-full relative h-[560px] flex items-center justify-center">
                        <Image
                            src="/img/computer1.png"
                            alt="graphic"
                            className="object-contain w-full h-full absolute"
                            fill
                        />
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12">
                {
                    products?.slice(0,4).map(item =>(
                        <PopularContent key={item.id} data={item}/>
                    ))
                }
            </section>

            <section className="my-4 py-12 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-4xl font-bold tracking-wider uppercase text-neutral-700 my-4">Tại sao nên mua máy tính của chúng tôi ?</h2>
                <p>
                Bích Huyền's Computer Shop không chỉ là nơi mua sắm, mà còn là nơi bạn có thể tìm thấy sự hỗ trợ và tư vấn tốt nhất để đáp ứng mọi nhu cầu về công nghệ của mình. Hãy đến với chúng tôi để trải nghiệm dịch vụ hoàn hảo và những sản phẩm chất lượng cao nhất! 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
                    <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
                        <Computer className="w-8 h-8 text-hero"/>
                        <CardTitle className="text-neutral-600">
                            Máy tính chính hãng
                        </CardTitle>
                        <CardDescription className="text-center">
                            Cửa hàng chúng tôi cung cấp các dòng máy tính chính hãng từ khắp thế giới
                        </CardDescription>
                    </Card>

                    <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
                        <Shield className="w-8 h-8 text-hero"/>
                        <CardTitle className="text-neutral-600">
                            Bảo hành trọn đời
                        </CardTitle>
                        <CardDescription className="text-center">
                            Hỗ trợ bảo hành trọn đời cho mỗi lần thanh toán
                        </CardDescription>
                    </Card>

                    <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
                        <Truck className="w-8 h-8 text-hero"/>
                        <CardTitle className="text-neutral-600">
                            Giao hàng nhanh
                        </CardTitle>
                        <CardDescription className="text-center">
                            Hỗ trợ giao hàng cho thanh toán online
                        </CardDescription>
                    </Card>
                </div>
            </section>

            <section className="my-4 py-12 flex flex-col items-center justify-center">
            <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">Các thương hiệu nổi bật</h2>
                <p>
                Một số thương hiệu nổi bật của cửa hàng {""}  
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
                    <Card className="shadow-lg relative  rounded-md border-none flex flex-col items-center justify-end h-96 md:h[520px] bg-hero/30">
                        <Image  src={"/img/hp.png"} alt="Car One" className="w-full h-full object-contain" fill/>
                    </Card>

                    <Card className="shadow-lg relative  rounded-md border-none flex flex-col items-center justify-end h-96 md:h[520px] bg-hero/30">
                        <Image  src={"/img/msi.png"} alt="Car Two" className="w-full h-full object-contain" fill/>
                    </Card>

                    <Card className="shadow-lg relative  rounded-md border-none flex flex-col items-center justify-end h-96 md:h[520px] bg-hero/30">
                        <Image  src={"/img/asus.png"} alt="Car Three" className="w-full h-full object-contain" fill/>
                    </Card>
                </div>
            </section>
        </Container>
        </>
    )
}

export default HomePage;