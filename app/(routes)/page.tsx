import  Container  from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () =>{
    return (
        <>
        <Container className="px-4 md:px-12">
            <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
                <div className="flex flex-col items-start justify-start gap-4">
                    <p className="px-6 py-1 rounded-full text-neutral-500 border boder-gray-300">Cần mua xe ngay?</p>
                
                    <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
                        Hãy ghé qua <span className="block py-4">Online Car Shop ngay bây giờ!</span>
                        </h2>
                        <p className="text-base text-center md:text-left text-neutral-500 my-4">
                        Chào mừng bạn đến với Online Car Shop, nơi mang đến cho bạn trải nghiệm mua sắm xe ô tô tuyệt vời nhất.  Chúng tôi tự hào là đại lý uy tín, cung cấp đa dạng các dòng xe từ những thương hiệu hàng đầu thế giới. Với đội ngũ nhân viên chuyên nghiệp và giàu kinh nghiệm, chúng tôi cam kết mang đến cho khách hàng những tư vấn tận tình và dịch vụ hậu mãi xuất sắc. Dù bạn đang tìm kiếm một chiếc xe gia đình tiện nghi, một chiếc SUV mạnh mẽ hay một chiếc xe sang trọng đẳng cấp, chúng tôi đều có thể đáp ứng mọi nhu cầu của bạn. Hãy đến với Online Car Shop để trải nghiệm và lựa chọn chiếc xe mơ ước của bạn ngay hôm nay!
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
                            src="/img/car1.png"
                            alt="graphic"
                            className="object-contain w-full h-full absolute"
                            fill
                        />
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-20 md:gap-12 my-4 py-12">
            </section>
        </Container>
        </>
    )
}

export default HomePage;