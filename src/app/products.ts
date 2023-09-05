export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S23 Ultra',
    description:
      "The Samsung Galaxy S Series has a legacy of pushing the boundaries of what a smartphone can do, and with Galaxy S23 Ultra, they're raising that bar again. Galaxy S23 Ultra features the highest camera resolution on a phone, and with stunning Night Mode powered by Nightography, you can take your best shots no matter the lighting. Plus, with the fastest Snapdragon processor yet, you can juggle high-intensity games and toggle between multiple apps or video calls with ease. Working on the go? Write, sketch, edit, create and share from anywhere with a built-in S Pen. Do all this and more on an incredibly large display built for gaming, streaming, creating and doing and now you can pair it with Verizon's ultra-fast 5G Ultra Wideband network. Do more of what you love with S23 Ultra and the network America relies on.",
  },
  {
    id: 2,
    name: 'Apple iPhone 14 Pro',
    price: 699,
    description:
      'iPhone 14 Pro. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features. Pair iPhone 14 Pro with Verizon, the network America relies on. 5G Ultra Wideband is now in more and more places, so more and more people can do amazing things with Verizon and iPhone 14 Pro.',
  },
  {
    id: 3,
    name: 'Google Pixel 7 Pro',
    price: 299,
    description:
      "Meet Pixel 7 Pro, the all-pro Google phone. Powered by Google Tensor G2, it's super fast and secure, with an immersive display, amazing battery life, and the best Pixel camera yet. And, experience ultra-fast connectivity when you pair it with Verizon's 5G Ultra Wideband1 network. Bring together your Pixel phone, Pixel Buds Pro, and the Google Pixel Watch for personalized help throughout your day. Pair Google Pixel 7 Pro with Verizon, the network America relies on. 5G Ultra Wideband is now in more and more places, so more and more people can do amazing things with Verizon and Google Pixel 7 Pro.",
  },
];
