import * as Icon from 'react-icons/fa';

function Top3() {
  return (
    <section className="flex flex-row">
      <div className="mx-auto flex  max-w-screen-sm items-center justify-center  ">
        <div className="  bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-t-lg m-3 shadow-lg">
          <div className="flex items-center justify-center bg-gray-800 back flex-col p-10">
            <h3 className="text-4xl p-3">Bitcoin</h3>
            <Icon.FaBitcoin className=" text-9xl p-3" />
            <p className="p-3">Price: 50,000$</p>
            <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className=" rounded-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0">
                Buy now!
              </span>
            </button>{' '}
          </div>
        </div>
      </div>
      <div className="mx-auto flex  max-w-screen-sm items-center justify-center  ">
        <div className="  bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-t-lg m-3 shadow-lg">
          <div className="flex items-center justify-center bg-gray-800 back flex-col p-10">
            <h3 className="text-4xl p-3">Bitcoin</h3>
            <Icon.FaBitcoin className=" text-9xl p-3" />
            <p className="p-3">Price: 50,000$</p>
            <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className=" rounded-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0">
                Buy now!
              </span>
            </button>{' '}
          </div>
        </div>
      </div>
      <div className="mx-auto flex  max-w-screen-sm items-center justify-center  ">
        <div className="  bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-t-lg m-3 shadow-lg">
          <div className="flex items-center justify-center bg-gray-800 back flex-col p-10">
            <h3 className="text-4xl p-3">Bitcoin</h3>
            <Icon.FaBitcoin className=" text-9xl p-3" />
            <p className="p-3">Price: 50,000$</p>
            <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className=" rounded-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0">
                Buy now!
              </span>
            </button>{' '}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Top3;