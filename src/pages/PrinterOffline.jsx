import React from 'react';
import { Link } from 'react-router-dom';

const PrinterOffline = () => {
  return (
    <main className=" min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <section className="p-2 rounded-lg  mb-10 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4 text-black ">
            Printer Offline
          </h2>
          <div className="text-gray-700 w-[80%] ">
            <p className="mb-4">
              You may see a “printer offline” error if your device can’t
              communicate with your printer. This can happen for a few different
              reasons but follow these simple steps and you should be back up
              and running.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Turn off your printer and disconnect it from the power supply.
              </li>
              <li>
                Restart the device you want to print from and your internet
                router.
              </li>
              <li>Turn the printer back on and try to print again.</li>
            </ul>

            <p>
              Check that the printer and the device you want to print from are
              on the same network. If you need it, you can  <br/>
              <span className="text-[#0278AB] ">
                 find help with Wifi connections here
              </span>
            </p>
          </div>
        </section>

        <section className="bg-white  flex p-6 rounded-lg shadow-md">
          <div className="mb-6 p-10">
            <h3 className="text-2xl font-bold mb-4 text-black">HP Smart</h3>
            <p className="text-gray-700 mb-4">
              If your printer is still offline, the Diagnose & Fix tool in the
              HP Smart desktop app can solve issues and automatically maintain
              your printer’s health. To use Diagnose & Fix:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Open or download the application on Windows or Mac</li>
              <li>
                For Windows, select the wrench icon in the bottom left corner
              </li>
              <li>On Mac, tap the printer dropdown in the top menu bar</li>
              <li>Follow the onscreen instructions</li>
            </ul>
            <Link
              to="/downloadDrivers"
              className="bg-[#0278AB] text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Get HP Smart
            </Link>
          </div>

          <div>
            <img
              src="https://h30434.www3.hp.com/t5/image/serverpage/image-id/364552i552343BAB90E76E7/image-dimensions/1700?v=v2&px=-1"
              alt="HP Smart"
              className="w-full rounded"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrinterOffline;
