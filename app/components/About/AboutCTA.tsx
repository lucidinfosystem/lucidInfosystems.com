import Link from "next/link";
const AboutCTA = () => {
  return (
    <section className="px-5 sm:px-20 my-12 sm:my-20">
      <div className="relative max-w-6xl overflow-hidden mx-auto z-10 text-center py-16 md:py-24 rounded-xl bg-linear-to-br from-blue-400 via-blue-500 to-blue-300">
        <div className="absolute inset-0 opacity-5 -z-2">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Enterprise?
        </h2>
        <p className=" text-sm sm:text-lg mb-8 text-blue-100 font-medium text-balance">
          {`Let's discuss how Lucid can help you achieve your cloud
       transformation goals.`}
        </p>
        <Link
          href="/contact"
          className="bg-transparent border  text-white border-white hover:bg-white hover:text-blue-600 cursor-pointer px-8 py-3 text-lg font-bold"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;
