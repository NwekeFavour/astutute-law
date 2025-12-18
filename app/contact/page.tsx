import ContactSection from "@/components/contact";
import Footer from "@/components/footer";

export default function ContactPage() {
    return(
        <div>
            <div className="bg-[#EDF7FF] text-center lg:pb-20 md:pb-18  md:pb-16 pb-14">
                <div>
                    <p className="m-0 pro1 lg:text-[60px] md:text-[55px] sm:text-[50px] text-[45px]  text-center">Contact<br/> Us</p>
                </div>
                <div>
                    <p className="m-0">Home {">"} Contact Us</p>
                </div>
            </div>
            <div className="lg:p-30 md:p-28  sm:p-24 p-10">
                <ContactSection/>
            </div>
            <div className="bg-[#027b7a] py-10">
                <div className="w-[40%] mx-auto">
                    <p className="m-0 lg:text-[40px] md:text-[38px] sm:text-[28px] text-[27px] text-white text-center pro1">Ready to Fight for Your Rights?</p>
                </div>
                <div className="w-[40%] mt-4 mx-auto">
                    <p className="m-0 text-white text-center">With years of experience, we've successfully defended countless clients, To be securing their rights and helping them navigate the legal system.</p>
                </div>
                 <a
                href="#"
                className="flex justify-center w-fit mx-auto mt-4 items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-teal-100 hover:gap-3"
              >
                Contact Us
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
            <Footer/>
        </div>
    )
}