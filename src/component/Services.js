import React from "react";

const Services = () => {
  return (
    <div id="services">
      <section class="py-10">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <h1 class="text-2xl font-bold text-gray-800 mb-8 text-left">
            Our Products
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={require("../res/wheat-flour.png")}
                alt="wheat flour grinding"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Wheat Flour
                </h3>
                <p class="text-gray-700 text-base">
                  We provide fresh, high-quality wheat flour to businesses and
                  individuals in the area. We use state-of-the-art equipment to
                  grind wheat into flour, and we offer a variety of flours to
                  meet the needs of our customers.
                </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={require("../res/gram-flour.png")}
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Gram Flour (Besan)
                </h3>
                <p class="text-gray-700 text-base">
                  Our gram flour is perfect for a variety of uses, including
                  baking, cooking, and making snacks. It is also a good source
                  of protein and fiber.
                </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={require("../res/jowar-flour.png")}
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Jowar Flour (Sorghum)
                </h3>
                <p class="text-gray-700 text-base">
                  We provides high-quality jowar flour. We use state-of-the-art
                  equipment to grind jowar into a fine powder, which is perfect
                  for making roti, bread, and other dishes. Our jowar flour is
                  also a good source of protein and fiber, making it a healthy
                  choice for your family.
                </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={require("../res/corn-flour.png")}
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Corn Flour(Makka Atta)
                </h3>
                <p class="text-gray-700 text-base">
                  We specializes in the production of high-quality corn flour.
                  We offer a variety of corn flour, including white corn flour
                  and yellow corn flour. Our corn flour is perfect for making a
                  variety of dishes, including bread, muffins, and pancakes.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
              <div class="text-center text-white font-medium">Dalia</div>
              <img
                src={require("../res/bajra-flour.png")}
                alt="Coffee"
                class="w-full h-64 object-cover rounded-t-lg"
              />
              <div class="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Bajra (Pearl millet)
                </h3>
                <p class="text-gray-700 text-base">
                  Bajra flour is made from small round grains of black millet,
                  also called bajra. The flour is greyish in colour and has a
                  slightly nutty flavour. Since it is a heat-producing
                  ingredient, it is commonly used in winters.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={require("../res/rice-flour.png")}
                alt="rice"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Rice Flour
                </h3>
                <p class="text-gray-700 text-base">
                  Our company produces high-quality rice flour that is made with
                  the finest quality of rice.
                </p>
              </div>
            </div>
          </div>
          <h1 class="text-2xl font-bold text-gray-800 mb-8 mt-20 text-left">
            Grinding Services
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={require("../res/wheat.png")}
                alt="wheat flour grinding"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Wheat Flour Grinding
                </h3>
                <p class="text-gray-700 text-base">
                  Our wheat flour grinding service provides fresh, high-quality
                  flour to businesses and individuals in the area. We use
                  state-of-the-art equipment to grind wheat into flour, and we
                  offer a variety of flours to meet the needs of our customers.
                </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={require("../res/gram.png")}
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Gram Flour Grinding
                </h3>
                <p class="text-gray-700 text-base">
                  Our gram flour is perfect for a variety of uses, including
                  baking, cooking, and making snacks. It is also a good source
                  of protein and fiber.Our gram flour grinding service is a
                  convenient and affordable way to get the freshest gram flour
                  possible.
                </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={require("../res/jowar.png")}
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6 text-center">
                <h3 class="text-xl font-medium text-gray-800 mb-2">
                  Jowar Flour Grinding
                </h3>
                <p class="text-gray-700 text-base">
                  Our jowar grinding service is a convenient and affordable way
                  to get fresh, high-quality jowar flour. We use
                  state-of-the-art equipment to grind jowar into a fine powder,
                  which is perfect for making roti, bread, and other dishes.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      Our jowar flour is also a good source of protein and
                      fiber, making it a healthy choice for your family.
                    </p>
                  </details>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
