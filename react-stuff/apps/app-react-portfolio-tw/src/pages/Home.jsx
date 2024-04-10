import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <>
      <section className="custom-background lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72" style={{ backgroundColor: '#161A30' }}>
        <div className="badge" style={{ color: '#000', backgroundColor: '#fff',  }}>WELCOME</div>
        <div className="flex flex-wrap-reverse lg:flex-wrap items-center justify-center lg:justify-between">
          {/* Contenu principal */}
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="mb-1 text-3xl font-semibold tracking-tight text-white md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
              Klervi Choblet
            </h1>
            <p className="text-lg leading-relaxed text-white md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed">
              I am an innovative front-end developer who loves to build human-friendly interfaces.
            </p>
          </div>
          {/* Image à droite */}
          <div className="lg:w-1/2 lg:pl-8">
            <img src="..\public\images\klervi-removebg-preview.png" alt="Klervi" className="mx-auto lg:ml-auto lg:mr-0" />
          </div>
        </div>
      </section>

      <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
        Recent projects
        </h2>
        <p
          className="text-lg leading-relaxed text-black md:text-2xl md:leading-relaxed
        lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed"
        >
          Below you can see some examples of my recent work. Check out my complete portfolio of {" "}
          <a
            href="#"
            class="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            web design
          </a>{" "}
          projects. Have a project you would like to discuss? {" "}
          <a
            href="#"
            class="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            Let's make something great together!
          </a>{" "}
        </p>
      </section>

      <section
        class="p lg-gap-12 mx-auto ml-0 mr-0 grid grid-cols-1
      gap-12
      px-12 
      pt-2 
      md:grid-cols-3 
      md:gap-6 md:px-14 

      lg:px-24 
      xl:px-32 
      "
      >
        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button>View project</Button>
        </Card>
        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button>View project</Button>
        </Card>
        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button>View project</Button>
        </Card>
      </section>
    </>
  );
};

export default Home;
