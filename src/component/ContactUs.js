import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section class="bg-gray-100">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-gray-900" id="contactUs">
              Visit Our Location
            </h2>
            <p class="mt-3 text-lg text-gray-500">Let us serve you the best</p>
          </div>
          <div class="mt-8 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div class="border-t border-gray-200"></div>
                  <div class="px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p class="mt-1 text-gray-600">
                      300, Sai Baba Nagar, Prajapat Nagar, Indore, Madhya
                      Pradesh 452009
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                    <p class="mt-1 text-gray-600">
                      Tuesday - Sunday : 9pm - 8pm
                      <br></br>
                      <br></br>
                      Monday Close
                    </p>
                  </div>
                </div>
              </div>
              <div class="rounded-lg overflow-hidden order-none sm:order-first">
                <iframe
                  title="Dhanotiya Flour Mill"
                  src="https://maps.google.com/maps?q=dhanotiya+flour+mill&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  class="w-full"
                  width="600"
                  height="450"
                  //style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <footer class="bg-gray-200 text-white py-4 px-3">
          <div class="container mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full md:w-1/2 md:text-center md:mb-4 mb-8">
              <p class="text-xs text-gray-400 md:text-sm">
                Copyright 2024 &copy; All Rights Reserved
              </p>
            </div>
            <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
              <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                <li>
                  <a href="#contactUs" class="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li class="mx-4">
                  <a href="/privacy" class="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default ContactUs;
