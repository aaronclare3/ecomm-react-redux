const products = [
    {
      title: "PlayStation 5",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/80d14094b7dc44d18392aafd010bcea8_9366/ultraboost-20-shoes.jpg",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      price: 499,
      countInStock: 15,
    },
    {
      title: "Iphone 12",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/e4ba998571504d768388abb100e49f6a_9366/stan-smith-vegan-shoes.jpg",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 1099,
      countInStock: 10,
    },
    {
      title: "Cannon EOS-1D",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0795968f9003493b8be6ac4d01394019_9366/nmd_r1-spectoo-shoes.jpg",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      price: 1300,
      countInStock: 5,
    },
    {
      title: "Amazon Alexa",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/f5f0be53351d487b8922abac010e750d_9366/lite-racer-adapt-3.0-shoes.jpg",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      price: 50,
      countInStock: 25,
    },
    {
      title: "Audio Technica Headphones",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0cb803a6461f44f7aed8ab96008250cf_9366/coreracer-shoes.jpg",
      description:
        "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
      price: 233,
      countInStock: 4,
    },
    {
      title: "JBL FLIP 4",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/5b6295b1b9754b20981fabb200402e03_9366/nmd_r1-shoes.jpg",
      description:
        "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
      price: 140,
      countInStock: 10,
    },
    {
      title: "Nike air flex",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/e4ba998571504d768388abb100e49f6a_9366/stan-smith-vegan-shoes.jpg",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      price: 499,
      countInStock: 15,
    },
    {
      title: "Adidas air fly knit",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/80d14094b7dc44d18392aafd010bcea8_9366/ultraboost-20-shoes.jpg",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 1099,
      countInStock: 10,
    },
    {
      title: "Air Force One",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/80d14094b7dc44d18392aafd010bcea8_9366/ultraboost-20-shoes.jpg",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      price: 1300,
      countInStock: 5,
    },
    {
      title: "Adidas Cloud Foam",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/80d14094b7dc44d18392aafd010bcea8_9366/ultraboost-20-shoes.jpg",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      price: 50,
      countInStock: 25,
    },
    {
      title: "Comfy Nike Air II",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/80d14094b7dc44d18392aafd010bcea8_9366/ultraboost-20-shoes.jpg",
      description:
        "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
      price: 233,
      countInStock: 4,
    },
    {
      title: "Rebok air 7s",
      image:
        "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/80d14094b7dc44d18392aafd010bcea8_9366/ultraboost-20-shoes.jpg",
      description:
        "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
      price: 140,
      countInStock: 10,
    },
  ];
  
  module.exports = products;