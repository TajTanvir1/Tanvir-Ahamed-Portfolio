import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="items-end align-bottom">
      <footer className="px-4 divide-y dark:bg-sky-50 dark:text-green-950">
        <div className="container flex flex-col justify-between py-6 mx-auto space-y-4 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <span className="self-center  font-kanit text-xl font-bold dark-color underline">
                <img
                  src="https://i.ibb.co/tbbkjfp/Tanvir-Passport-Pic-C.jpg"
                  alt=""
                  className="w-12 mx-auto rounded-lg"
                />
                Tanvir Ahamed Portfolio
              </span>
            </a>
          </div>
          <div className="flex flex-row justify-around text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900 font-bold">
                Contact Info
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    +880 1408 778787
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    tanvirah1223@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-900 font-bold">
                Social media
              </div>
              <div className="flex justify-start space-x-3 text-xl">
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tanvirahamedjubayer/"
                  title="Linkedin"
                  className="flex items-center p-1"
                >
                  <FaLinkedin />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/TajTanvir1"
                  title="Github"
                  className="flex items-center p-1"
                >
                  <FaGithub />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/taj.tanvir11"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
