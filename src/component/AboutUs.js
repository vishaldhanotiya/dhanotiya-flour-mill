import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section class="bg-gray-100" id="aboutus">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
                About Us
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                Dhanotiya Flour Mill is dedicated to delivering the highest
                quality products and services to our customers. We offer a
                diverse selection of flours and spices to suit a variety of
                needs and preferences. Our team is always ready to assist you in
                finding the perfect products for your requirements.
                <br></br>
                <br></br>
                We are committed to providing an exceptional customer
                experience, with competitive prices, fast shipping, and
                outstanding customer service. Whether you have questions about
                our products or need assistance with your order, we are here to
                help. If you are looking for a flour and spices service business
                that prioritizes quality and customer satisfaction, Dhanotiya
                Flour Mill is the right choice for you. We look forward to
                serving you!
              </p>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src={require("../res/shop.png")}
                alt="About Us"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
