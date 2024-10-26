export const htmldata = `
    <div class= "h-3/4">
      <div>
        <div class="bg-white border-black border-t border-l">
          <div class="grid grid-cols-12 border-b border-black">
            <div class="col-span-3 border-r border-black p-2">
              <h1 class="font-bold text-lg">GSTIN:</h1>
              <p class="text-sm font-bold">33AQMPS2845P1Z3</p>
            </div>
            <div class="col-span-6 text-center">
              <h1 class="text-2xl font-bold mt-2">KARTHICK INDUSTRIES</h1>
              <p class="text-sm font-bold">
                #.8, BALAJI NAGAR, (Opp. Sted Ford Hospital), Ambattur, CHENNAI
                - 600053
              </p>
            </div>
            <div
              class="col-span-3 text-right border-l  border-black p-2 text-sm"
            >
              <h1 class="font-bold">Mobile:</h1>
              <p>9566109182</p>
              <p>9444879262</p>
              <p>9087039626</p>
            </div>
          </div>

          <div class="grid grid-cols-12 border-b border-black">
            <div class="col-span-9">
              <div>
                <div class="p-2 flex font-bold">
                  <div class="text-nowrap mr-2 text-xl">Tax Invoice #:</div>
                  <div class="text-xl">
                  invoice_no
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-3 border-l border-black ">
              <div>
                <div class="p-2 flex font-bold mt-1">
                  <div class="text-nowrap mr-2 ">Date:</div>
                  <div>
                  formattedDate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 border-b border-black">
            <div class="col-span-6 border-r border-black">
              <div class="p-2 flex text-lg font-semibold">
                <div class="text-nowrap mr-3">To:</div>
                <p class="text-sm mt-1">
                to
                </p>
              </div>
            </div>
            <div class="col-span-6">
              <div class="grid grid-cols-2">
                <div
                  class="p-2 grid grid-cols-3 col-span-1 border-b border-black font-bold gap-x-2"
                >
                  <div class="text-nowrap col-span-1">Eway # :</div>
                  <div class="col-span-2  break-words">
                  e_way_no 
                  </div>
                </div>
                <div
                  class="p-2 grid grid-cols-3 col-span-1 border-l  border-b border-black font-bold gap-x-10"
                >
                  <div class="text-nowrap col-span-1">Party DC #:</div>
                  <div class="col-span-2 break-words">
                  party_dc_no
                  </div>
                </div>
              </div>
              <div class="flex">
                <div
                  class="p-2 flex flex-2 gap-x-1 border-b  border-black font-bold"
                >
                  <div class="text-nowrap ">Party DC Date:</div>
                  <div class="text-nowrap">
                  formattedDcdate
                  </div>
                </div>
                <div class="p-2 flex-3 grid grid-cols-3  gap-x-2 border-l border-b border-black font-bold ">
                  <div class=" col-span-1 text-nowrap ">Party GSTIN:</div>
                  <div class=" col-span-2 pl-2">
                  party_gstin
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="p-2 border-black font-bold flex gap-x-3 col-span-1">
                  <div class="text-nowrap">Our DC #:</div>
                  <div>
                  dc_no
                  </div>
                </div>
                <div
                  class="p-2 grid grid-cols-3 border-l border-black font-bold gap-x-1 col-span-1 "
                >
                  <div class="text-nowrap col-span-1">HSN #:</div>
                  <div class="col-span-2 break-words">
                  hsn_code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="grid grid-cols-12 border-b border-black text-center ">
            <div class="col-span-1 p-2 font-bold">SL #</div>
            <div class="col-span-7 p-2 font-bold">PRODUCT DESCRIPTION</div>
            <div class="col-span-1 p-2 font-bold">QTY</div>
            <div class="col-span-1 p-2 font-bold">RATE</div>
            <div class="col-span-2 p-2 font-bold ">AMOUNT</div>
          </div>
          <div>
            <div class="grid grid-cols-12 text-center pt-3">
              <div class="col-span-1"></div>
              <div class=" col-span-7 text-left pl-5 text-wrap">
              product_description
              </div>
              <div class="col-span-1"></div>
              <div class="col-span-1"></div>
              <div class="col-span-2">
                rental_charges
              </div>
            </div>
            <div class="relative font-semibold left-20 p-1">
              rental_charges
            </div>
            
            <div class = "grid grid-cols-12 text-center">
               <div class="col-span-10 p-1 text-left ml-16 pl-5">
                 labour_charges
               </div>
               <div class="col-span-2 p-1">
                 labour_charges
               
              </div>
              </div>
               <div class = "grid grid-cols-12 text-center">
               <div class="col-span-10 p-1 text-left ml-16 pl-5">
                 handling_charges
               </div>
               <div class="col-span-2 p-1">
                 handling_charges
               </div>
              </div>
          </div>
          <div
            class="bg-white border border-r border-black absolute w-[100%] top-[900px] right-0 left-0"
          >
            <div class="grid grid-cols-12 border-b border-black">
              <div class="p-1 col-span-8 border-r border-black font-bold text-start">
                <p class="font-bold text-sm">BANK DETAILS:</p>
                <p class="text-sm">A/C #: 1452315146,</p>
                <p class="text-sm">BANK NAME: CENTRAL BANK OF INDIA</p>
                <p class="text-sm">BRANCH: NANDAMBAKKAM, CHENNAI - 600089</p>
                <p class="text-sm">IFSC CODE: CBIN0282740</p>
              </div>
              <div class="col-span-4">
                <div class="grid grid-cols-2">
                  <div class="p-2 border-r border-b border-black font-bold">
                    NET TOTAL
                  </div>
                  <div
                    class="p-2 border-b border-black text-center font-bold"
                  >
                   ₹ net_total
                    </div>
                </div>
                <div class="grid grid-cols-2">
                  <div
                    class="p-2 flex border-r border-b border-black font-bold"
                  >
                    <div class="text-nowrap mr-2">CGST :</div>
                    <div>
                    cgst %
                    </div>
                  </div>
                  <div
                    class="p-2 border-b border-black text-center font-bold"
                  >
                 ₹ calculatedCgst
                    </div>
                </div>
                <div class="grid grid-cols-2">
                  <div
                    class="p-2 flex border-r border-b border-black font-bold"
                  >
                    <div class="text-nowrap mr-2">SGST :</div>
                    <div>
                    sgst %
                    </div>
                  </div>
                  <div
                    class="p-2 border-b border-black text-center font-bold"
                  >
                  ₹ calculatedSgst
                    </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="p-2 border-r border-black font-bold">
                    GROSS TOTAL
                  </div>
                  <div class="p-2 text-center font-bold">
                 ₹ gross_total
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 text-sm">
              <div class="col-span-7 p-2 border-r border-black">
                <div class="font-bold">
                  <div>AMOUNT IN WORDS</div>
                  <div class="text-xl"> numberToWords(grossTotal) </div>
                </div>
              </div>
              <div class="col-span-5 p-2 text-center">
                <div class="text-center">
                  For
                  <span class="font-bold">KARTHICK INDUSTRIES</span>
                </div>
                <div class="mt-10 font-bold text-center">Proprietor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
