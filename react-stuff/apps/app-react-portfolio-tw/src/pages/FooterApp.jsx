import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <Footer style={{ backgroundColor: '#161A30', color: 'white' }}>
      <div className="w-full">
        <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
          <h2 className="mb-1 text-3xl font-semibold tracking-tight md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
            Klervi Choblet
          </h2>
          <p className="text-lg leading-relaxed md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed">
            Front-end designer and developer  
          </p>
        </section>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.LinkGroup className="flex justify-center  w-full">
              <Footer.Link href="#" className="mx-2">About</Footer.Link>
              <Footer.Link href="#" className="mx-2">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="mx-2">Licensing</Footer.Link>
              <Footer.Link href="#" className="mx-2">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterApp;
