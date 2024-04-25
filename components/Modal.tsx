import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

interface Props {
  title?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  onSubmit?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
  sideBody?: React.ReactNode;
}

const Modal: React.FC<Props> = ({
  title,
  body,
  footer,
  onSubmit,
  onClose,
  isOpen = true,
  sideBody,
}) => {
  const modalVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-80"
          onClick={onSubmit}
        >
          <motion.div
            variants={modalVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
            className="relative w-full md:max-w-[80%] lg:max-w-[1450px] overflow-hidden mx-auto bg-white grid grid-cols-1 lg:grid-cols-2 rounded-lg shadow-lg my-auto "
          >
            <div className=" absolute top-4 w-full flex justify-between items-center ">
              <div className="absolute left-4 top-2">
                <Logo />
              </div>
              <button
                className="absolute right-4 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onClose}
              >
                <IoClose
                  size={30}
                  className={`text-[var(--main-color)] lg:text-white hover:scale-125 duration-300`}
                />
              </button>
            </div>
            <div className="mt-[120px] col-span-2 lg:col-span-1">
              <div className="mb-[90px]">
                <h1 className="text-[35px] md:text-[35px] mb-10 font-semibold text-center">
                  {title}
                </h1>
                <div className="mx-[20px] md:mx-[110px]">{body}</div>
              </div>
              <div className="mx-[20px] mb-[30px]">{footer}</div>
            </div>
            <div className="hidden lg:block lg:col-span-1  bg-[var(--main-color)]">
              {sideBody}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
