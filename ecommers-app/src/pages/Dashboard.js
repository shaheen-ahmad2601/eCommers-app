import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

<motion.div
  whileHover={{ scale: 1.05 }}
  className="bg-white p-4 shadow rounded-lg"
>
  Div 1
</motion.div>;

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <span className="relative left-[460px] top-24 text-[14px] font-bold text-gray-700">
        Projections vs Actuals
      </span>
      <span className="relative right-[120px] top-[30px] text-[14px] font-bold text-gray-700">
        eCommers
      </span>
     <div className="w-full h-[970px]">
     <div className="flex border-[1px]  mt-8">
        <div className="grid w-[432px] h-[252px] grid-cols-2 gap-6 p-4 ">
          <div className=" w-[202px] h-[112px] shadow rounded-lg bg-custom-light-blue">
            <div className="w-[156px] h-[20px] relative top-4 left-4 bottom-4 text-[14px]">
              Customers
            </div>
            <div className="w-[156px] h-[36px] relative top-6 left-4 bottom-4 text-[24px]  font-bold">
              3,781 <span className="font-thin ml-10 text-[12px]">+11.01%</span>
            </div>
          </div>

          <div className="w-[202px] h-[112px] shadow rounded-lg bg-custom-light-grey">
            <div className="w-[156px] h-[20px] relative top-4 left-4 bottom-4 text-[14px]">
              Orders
            </div>
            <div className="w-[156px] h-[36px] relative top-6 left-4 bottom-4  text-[24px]  font-bold">
              1,219 <span className="font-thin ml-10 text-[12px]">-0.03%</span>
            </div>
          </div>
          <div className=" w-[202px] h-[112px] shadow rounded-lg bg-custom-extra-light-grey">
            <div className="w-[156px] h-[20px] relative top-4 left-4 bottom-4 text-[14px]">
              Revenu
            </div>
            <div className="w-[156px] h-[36px] relative top-6 left-4 bottom-4  text-[24px]  font-bold">
              $695 <span className="font-thin ml-10 text-[12px]">+15.03%</span>
            </div>
          </div>
          <div className=" w-[202px] h-[112px] shadow rounded-lg bg-custom-extra-light-blue">
            <div className="w-[156px] h-[20px] relative top-4 left-4 bottom-4 text-[14px]">
              Growth
            </div>
            <div className="w-[156px] h-[36px] relative top-6 left-4 bottom-4  text-[24px]  font-bold">
              31.1% <span className="font-thin ml-10 text-[12px]">+6.08%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center  w-[432px] h-[252px] m-4 bg-custom-light-grey shadow rounded-lg">
          <div className="flex flex-col justify-between h-[140px] relative left-4 top-4 text-[12px] text-gray-500">
            <span>30m</span>
            <span>20m</span>
            <span>10m</span>
            <span>0</span>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-10 relative left-12 right-6 top-12 w-[340px] border-b-2 border-b-grey-200 rounded-lg ">
              <div className="flex flex-col-reverse items-center">
                <div className="w-[20px] h-[72px] bg-custom-light-blue z-[1]"></div>
                <div className="w-[20px] h-[90px] bg-custom-extra-light-blue absolute rounded-lg"></div>
              </div>

              <div className="flex flex-col-reverse items-center">
                <div className="w-[20px] h-[88px] bg-custom-light-blue z-[1]"></div>
                <div className="w-[20px] h-[110px] bg-custom-extra-light-blue absolute rounded-lg"></div>
              </div>

              <div className="flex flex-col-reverse items-center">
                <div className="w-[20px] h-[76px] bg-custom-light-blue z-[1]"></div>
                <div className="w-[20px] h-[95px] bg-custom-extra-light-blue absolute rounded-lg"></div>
              </div>

              <div className="flex flex-col-reverse items-center">
                <div className="w-[20px] h-[96px] bg-custom-light-blue z-[1]"></div>
                <div className="w-[20px] h-[120px] bg-custom-extra-light-blue absolute rounded-lg"></div>
              </div>

              <div className="flex flex-col-reverse items-center">
                <div className="w-[20px] h-[64px] bg-custom-light-blue z-[1]"></div>
                <div className="w-[20px] h-[80px] bg-custom-extra-light-blue absolute rounded-lg"></div>
              </div>

              <div className="flex flex-col-reverse items-center">
                <div className="w-[20px] h-[88px] bg-custom-light-blue z-[1]"></div>
                <div className="w-[20px] h-[110px] bg-custom-extra-light-blue absolute rounded-lg"></div>
              </div>
            </div>

            <div className="flex justify-between gap-11 text-gray-500 text-[12px] w-64 relative left-12 top-16">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>Jun</span>
              <span>July</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative left-8 top-14 gap-4">
  <span className="font-bold">Revenue</span>
  
  <span className="flex items-center">
    <span className="mr-3 text-lg">•</span> 
    <span className="mr-2">Current Week</span> 
    <span className="font-bold">$58,211</span>
  </span>
  
  <span className="flex items-center">
    <span className="mr-3 text-lg">•</span> 
    <span className="mr-2">Previous Week</span> 
    <span className="font-bold">$68,768</span>
  </span>
</div>


      <div className="space-y-8">
        <div className="flex gap-4">
          <div className="flex items-center w-[662px] h-[318px] m-4 bg-custom-light-grey shadow rounded-lg">
            <div className="flex flex-col justify-between h-[200px] relative left-4 top-4 text-gray-500 text-[12px]">
              <span>30m</span>
              <span>20m</span>
              <span>10m</span>
              <span>0</span>
            </div>

            <div className="flex flex-col">
              <div className="relative left-12 right-6 top-12 w-[340px]">
                <svg
                  width="150%"
                  height="100%"
                  viewBox="0 10 340 120"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 100 C 40 60, 80 120, 120 70 C 160 20, 200 50, 240 30 C 280 10, 320 80, 340 100"
                    stroke="#4F9D8E"
                    strokeWidth="2"
                    fill="transparent"
                  />
                  <path
                    d="M0 90 C 40 80, 80 60, 120 40 C 160 30, 200 50, 240 40 C 280 30, 320 60, 340 40"
                    stroke="#75C6E0" 
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray="5" 
                  />
                </svg>
              </div>

              <div className="flex justify-between gap-24 text-gray-500 text-[12px] relative left-10 top-12">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>Jun</span>
                <span>July</span>
              </div>
            </div>
          </div>

          <div className="w-[202px] h-[318px] relative top-4 bg-custom-extra-light-grey p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Revenue by Location</h2>

            <div className="w-full h-[120px] bg-gray-200 mb-4">
              <img
                src="https://preview.redd.it/literal-world-map-of-continents-and-water-areas-v0-b9gjbvnaq4dc1.png?width=1080&crop=smart&auto=webp&s=07a5225b6a0b282a88699330f52104b1114677fe"
                alt="Map showing locations"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span className="text-sm">New York</span>
                <span className="text-sm font-normal">72K</span>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span className="text-sm">San Fransisco</span>
                <span className="text-sm font-normal">64K</span>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span className="text-sm">Sydney</span>
                <span className="text-sm font-normal">89K</span>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <span className="text-sm">Singapore</span>
                <span className="text-sm font-normal">55K</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-[662px] h-[318px] m-4 bg-custom-light-grey shadow rounded-lg">
            <h2 className="text-lg font-semibold relative left-3 top-2">
              Top Selling Products
            </h2>
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2 font-normal text-custom-light-black text-[12px]">
                    Name
                  </th>
                  <th className="text-left px-4 py-2 font-normal text-custom-light-black text-[12px]">
                    Price
                  </th>
                  <th className="text-left px-4 py-2 font-normal text-custom-light-black text-[12px]">
                    Quantity
                  </th>
                  <th className="text-left px-4 py-2 font-normal text-custom-light-black text-[12px]">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                <tr className="border-t">
                  <td className="px-4 py-2">ASOS Ridley High Waist</td>
                  <td className="px-4 py-2">$79.49</td>
                  <td className="px-4 py-2">82</td>
                  <td className="px-4 py-2">$6518.18</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Macro Lightweight Shirt</td>
                  <td className="px-4 py-2">$128.50</td>
                  <td className="px-4 py-2">37</td>
                  <td className="px-4 py-2">$4754.78</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">half Sleev Shirt</td>
                  <td className="px-4 py-2">$39.99</td>
                  <td className="px-4 py-2">64</td>
                  <td className="px-4 py-2">$2559.56</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Lightweight Jacket</td>
                  <td className="px-4 py-2">$20.00</td>
                  <td className="px-4 py-2">184</td>
                  <td className="px-4 py-2">$3680.00</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Macro Shoes</td>
                  <td className="px-4 py-2">$79.49</td>
                  <td className="px-4 py-2">64</td>
                  <td className="px-4 py-2">$1965.81</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-[202px] h-[318px] relative top-4 bg-custom-extra-light-grey p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Total Sales</h2>

            <div className="w-full h-[120px] bg-gray-200 mb-4">
              <img
                src="https://canvasjs.com/wp-content/uploads/2024/02/doughnut-chart-with-title-in-the-center-1200x900.jpeg"
                alt="Map showing locations"
                className="w-full h-full object-cover rounded-lg relative bottom-2"
              />
            </div>

            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  <span className="text-sm">Direct</span>
                </div>
                <span className="text-sm font-normal">$300.56</span>
              </div>

              <div className="flex items-center justify-between border-b pb-2 mb-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span className="text-sm">Affiliate</span>
                </div>
                <span className="text-sm font-normal">$135.18</span>
              </div>

              <div className="flex items-center justify-between border-b pb-2 mb-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span className="text-sm">Sponsored</span>
                </div>
                <span className="text-sm font-normal">$154.02</span>
              </div>

              <div className="flex items-center justify-between border-b pb-2 mb-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="text-sm">E-mail</span>
                </div>
                <span className="text-sm font-normal">$145.65</span>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Dashboard;
