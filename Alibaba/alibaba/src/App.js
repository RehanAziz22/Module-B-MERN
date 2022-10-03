import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Grid, Chip, Tooltip, Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TradeCards, Navbar } from "./components/tradeServices";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material";
import { Quotations, DisplayCards } from "./components/quotation";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import image from "./logo.png";

function App() {
  const [listData, setListData] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      productCategory: "",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      productCategory: "",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      productCategory: "",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      productCategory: "",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      productCategory: "",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      productCategory: "",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      productCategory: "",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      productCategory: "",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      productCategory: "",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      productCategory: "",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      productCategory: "",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      productCategory: "",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      productCategory: "",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      productCategory: "",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      productCategory: "",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
      productCategory: "",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      productCategory: "",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      productCategory: "",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      productCategory: "",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      productCategory: "",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 21,
      title:
        "Ziitop Hot Sale Anime Shoes One Piece High-top Walking Style Shoes Graffiti Trend Men's Casual Shoe",
      price: "PKR 2,851.25",
      description:
        "model 2829 Material PU feature fashiontrend hard-wearing lining material mesh size  37-44 color        Black ;Blue Midsole material        Rubber        characteristic Hard-wearing",
      category: "men's clothing",
      productCategory: "New Arrivals",
      image:
        "https://s.alicdn.com/@sc04/kf/He47bb9a81e5e49ee99e8cdefecd08a72y.jpg_250x250xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 22,
      title:
        "Best Price QIN F21 Pro mini students Smart Bar Phone 4G VOLTE Feature 21 keys cell 2.8 inch touch Screen Android cellphone",
      price: "Rs 16,651.30 - Rs 30,565.40",
      description: "",
      category: "Mobile phones",
      productCategory: "New Arrivals",
      image:
        "https://s.alicdn.com/@sc04/kf/He6c89bc774d84bebb839df7145c3030aE.jpg_250x250xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 23,
      title:
        "Hot sale products Russia men care massage Cream Wholesale Titan Gel Gold  Products For Men",
      price: "Rs 171.08 - Rs 225.82",
      description: "",
      category: "women's clothing",
      productCategory: "New Arrivals",
      image:
        "https://s.alicdn.com/@sc04/kf/H2d12e07110774ba7b1df11be331ac664P.jpg_250x250xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 24,
      title: "26 Inch 48v e bike mountain Fat Tire fast electric bicycle",
      price: "Rs 155,108.00 ",
      description: "",
      category: "bike",
      productCategory: "Top ranking",
      image:
        "https://s.alicdn.com/@sc04/kf/H4bfe1b6cef4545c7ab6864a59c58196bh.jpg_250x250xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 25,
      title:
        "Heart Rate Fit Bit 115plus Smartwatch Smart Band 115 Plus TFT Color Screen Watch Smart Bracelet 115 Plus",
      price: "Rs 296.53",
      description: "",
      category: "Accessories",
      productCategory: "Top ranking",
      image:
        "https://s.alicdn.com/@sc04/kf/Hc06660b509694b6b8083af329b08f7c4R.png_250x250xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 26,
      title:
        "Amazon Brand new Promotional Cellphone Best selling  i 14 Pro Max 16+1TB large memory 6.7inch excellent quality mobile phone",
      price: "Rs 9,755.84 - Rs 14,317.84",
      description: "",
      category: "women's clothing",
      productCategory: "Top ranking",
      image:
        "https://s.alicdn.com/@sc04/kf/Hf61e6fbdd08f43e3a97cfe656f1ec2d4y.jpg_250x250xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 27,
      title: "",
      price: "PKR 2,395.05",
      description:
        "Portable Nebulizer Ultrasonic Mesh Atomizer Machine For Home Use",
      category: "health",
      productCategory: "Personal Protective Equipment",
      image:
        "https://s.alicdn.com/@sc04/kf/H9815e32377ae46cf86f27f0f7836efccr.jpg_960x960.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 28,
      title:
        "Anti Cut Resistance Nitrile Gloves for Electrical Anti-cutting Thin Work Gloves",
      price: "PKR 22.81 - PKR 1,140.50",
      description: "",
      category: "health",
      productCategory: "Personal Protective Equipment",
      image:
        "https://s.alicdn.com/@sc04/kf/Hc6cc6401f35c49009ee4f11a1ff94acan.jpg_960x960.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 29,
      title:
        "Baby LCD LED Display Optional Body Measure Monitor Non-Contact Contact Medical Fever Infrared Thermometer For Ear And Forehead",
      price: "PKR 1,984.47",
      description: "",
      category: "health",
      productCategory: "Personal Protective Equipment",
      image:
        "https://s.alicdn.com/@sc04/kf/H4f2f4a20fdb44ccba0ce15374f991ca6b.jpg_250x250.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 30,
      title:
        "2022 new summer ape head bape T-shirt men's t-shirts bape drop shoulder loose tshirt top bape tee shirts t-shirt streetwear",
      price: "Rs 2,030.09",
      description: "",
      category: "women's clothing",
      productCategory: "Dropshipping",
      image:
        "https://s.alicdn.com/@sc04/kf/H99c53b9bc2184f7f9440d8c9449d222cR.jpg_220x220xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 31,
      title:
        "Cheap Malaysian Raw Hair Lace Closure Wig With Baby Hair 13X6 Unprocessed Virgin Hair Kinky Curly Human Lace Wig For Black Women",
      price: "Rs 19,616.60",
      description: "",
      category: "women's clothing",
      productCategory: "Dropshipping",
      image:
        "https://s.alicdn.com/@sc04/kf/Hc37cd8c5fbbb4d359db8c1776574898ea.jpg_220x220xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 32,
      title:
        "Valdus 2022 Cheap Online Wearable Devices D20 Relogio Reloj Inteligente Sports Waterproof Smartwatch D20 Y68 Smart Watch",
      price: "Rs 570.25",
      description: "",
      category: "Accessories",
      productCategory: "Dropshipping",
      image:
        "https://s.alicdn.com/@sc04/kf/Hb8841de9644047b2ba4c0016d0adf467k.jpg_220x220xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 33,
      title:
        "2021 New Arrival HOTWAV CYBER 8 Rugged Phone 64GB 8280mAh Battery 6.3 inch Android 11 Cellphone",
      price: "Rs 20,300.90 - Rs 26,459.60",
      description: "",
      category: "Mobile phones",
      productCategory: "Regional specialties",
      image:
        "https://s.alicdn.com/@sc04/kf/Hdd289b8a0cfe45ad9dc9e6b8d22c1083p.jpg_250x250xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 34,
      title:
        "Carbon Fiber Front Lip For Chevrolet Corvette C7 front splitter Perfect fitment",
      price: "Rs 109,488.00 - Rs 114,050.00",
      description: "",
      category: "car",
      productCategory: "Regional specialties",
      image:
        "https://s.alicdn.com/@sc04/kf/He101f1440c7e481c993db74e85860b3eV.jpg_250x250xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 35,
      title:
        "IP68 Waterproof UMIDIGI BISON Pro 6.3 inch Rugged Phone 48MP Camera 4GB+128GB Android 11",
      price: "Rs 22,787.19 - Rs 34,557.15",
      description: "",
      category: "Mobile phones",
      productCategory: "Regional specialties",
      image:
        "https://s.alicdn.com/@sc04/kf/Hed2de0f63ade4e52a857030cd251fab8b.jpg_250x250xz.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 36,
      title:
        "Now we will take a look at the top trending Electric bike products from Alibaba.com",
      price: "PKR 134,350.90 ",
      description: "",
      category: "bike",
      productCategory: "True View",
      image:
        "https://s.alicdn.com/@sc04/kf/H326a0fa160344f6188f182bded4fc8da0.jpg_96x96xzq80.jpg    ",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 37,
      title:
        "various of Gear Shift Lever Knob for land cruiser 200.weicome to consult .",
      price: "PKR 185,901.50 ",
      description: "",
      category: "Accessories",
      productCategory: "True View",
      image:
        "https://s.alicdn.com/@sc04/kf/H82afed55b95a491c934918280da5e4efu/201217623/H82afed55b95a491c934918280da5e4efu.jpg_480x480q80.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 38,
      title:
        "2022 Amazon Trend Golden Black Silver Steel Rubber Choose Waterproof Sport Smart Watch DT56",
      price: "PKR 3,603.98 ",
      description: "",
      category: "Accessories",
      productCategory: "True View",
      image:
        "https://s.alicdn.com/@sc04/kf/H71849f52294b4fdf808e82823f3557e0y.jpg_480x480q80.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ]);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [result, setResult] = useState([]);
  // const[selectedProduct, setSelectedProduct]= useState("")

  // let searchItem = (val)=>{
  //   setSelectedProduct(val)
  //   let searchedData = listData.filter((x)=> x.description.includes(val));
  //   setSearchedData(...searchedData)
  //   console.log(searchItem)
  // }

  let getAllCategories = () => {
    let li = listData.map((x) => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
    // console.log(allCategories);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  // render item by dropdown
  let searchCategoryItem = (val) => {
    setSelectedCategory(val);
    let filterList = listData.filter((x) => x.category == val);
    setFilterList([...filterList]);
  };

  let filterResult = (value) => {
    if (result == "") {
      const result = listData.filter((n) => n.category == value);
      setResult([...result]);
    } else {
      setResult([]);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            fontSize: "20px",
            color: "#222222",
            backgroundColor: "#ffffff",
            justifyContent: "center",
            height: "50px",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              margin: "0px 25px 5px",
            }}
          >
            Products
          </span>
          <span>Manufacturer</span>
        </Container>

        {/* -------------------------------------------------------------------------------> NAVBAR */}
    <Container maxWidth="xl" sx={{ height: "60px", display:"flex",alignItems:"center", backgroundColor:"#ffffff", position:"sticky",top:"0px", zIndex:"111" }}>
    <img width={200} src={image} style={{width:"20%", height:"40px", marginRight:"10px"}} />
      <input  style={{minWidth:"50%",maxWidth:"60%",height:"30px", border:"2px solid #FF6A00" , borderRadius:"20px 0px 0px 20px", paddingLeft:"10px"}} placeholder="What are you looking for...."/>
      <button style={{height:"36px", width:60, border:"none", backgroundColor:"#FF6A00",color:"#FFFFFF" , borderRadius:"0px 20px 20px 0px"}}>Search</button>
        <Navbar />
    </Container>
        
        {/* -------------------------------------------------------------------------------> INPUFIELD & BUTTONS*/}
        <Container
          maxWidth="xl"
          sx={{
            height: "auto",
            padding: "10px",
            backgroundColor: "white",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          <Grid
            Container
            spacing={1}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            {/* -------------------------------------------------------------------------------> INPUT FIELD */}
            <Grid item md={3} xs={12} sm={3}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ width: "150px" }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ top: "-6px" }}
                  >
                    Categories
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    onChange={(e) => searchCategoryItem(e.target.value)}
                    // value={selectedCategory}
                    label="Categories"
                    // onChange={handleChange}
                    sx={{ height: "40px" }}
                  >
                    {allCategories.map((e, i) => (
                      <MenuItem key={i} value={e}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            {/* -------------------------------------------------------------------------------> BUTTONS*/}
            <Grid item md={9} xs={12} sm={9} sx={{overflow:"hidden"}}>
              <Box className="navButtons"
                sx={{
                  minWidth: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  
                }}
              >
                {allCategories.map((e, i) => (
                  <button
                    style={{ height: "40px", width: "80px", margin: "0px 5px" }}
                    key={i}
                    onClick={() => filterResult(e)}
                    value={e}
                  >
                    {e}
                  </button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* -------------------------------------------------------------------------------> filter proucts */}
        <Grid container maxWidth="lg" spacing={1} sx={{  }}>
          {filterList.map((e, i) => (
            <Grid item md={2} xs={6} sm={3} key={i}>
              <Card sx={{ padding: "5px", maxWidth: 345, height: "335px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={e.image}
                  alt="green iguana"
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {e.title.slice(0, 20) + (e.title.length > 20 ? "..." : "")}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{ fontSize: 16, fontWeight: "bold" }}
                    variant="h6"
                    component="div"
                  >
                    {e.price + "$"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.description.slice(0, 20) +
                      (e.description.length > 20 ? "..." : "")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* -------------------------------------------------------------------------------> filter proucts */}
        <Grid container maxWidth="lg" spacing={1} sx={{ margin: "20px 0px" }}>
          {result.map((e, i) => (
            <Grid item md={2} xs={6} sm={3} key={i}>
              <Card sx={{ padding: "5px", maxWidth: 345, height: "335px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={e.image}
                  alt="green iguana"
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {e.title.slice(0, 20) + (e.title.length > 20 ? "..." : "")}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{ fontSize: 16, fontWeight: "bold" }}
                    variant="h6"
                    component="div"
                  >
                    {e.price + "$"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.description.slice(0, 20) +
                      (e.description.length > 20 ? "..." : "")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* -------------------------------------------------------------------------------> TOP CONTAINERS */}
        <Grid container spacing={1} maxWidth="lg">
          <Grid item md={4} sm={6} xs={12}>
            <Container maxWidth="lg">
              <Card sx={{ padding: "5px", maxWidth: "100%", height: "auto" }}>
                <CardContent sx={{ textAlign: "left" }}>
                  <DisplayCards
                    link={
                      "https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png"
                    }
                    title={`New Arrival`}
                  />
                  <Grid
                    Container
                    spacing={1}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {listData
                      .map((x, i) => (
                        <Grid item md={3.5} xs={3.5} sm={3.5} key={i}>
                          <Card sx={{ boxShadow: "none" }}>
                            <CardMedia
                              component="img"
                              height="100"
                              width="100%"
                              image={x.image}
                              alt="green iguana"
                              sx={{ minHeight: "100px" }}
                            />
                            <Typography
                              sx={{
                                padding: "4px",
                                color: "#3a3a3a",
                                textAlign: "center",
                              }}
                              gutterBottom
                              component="div"
                            >
                              <h3
                                style={{
                                  fontSize: "12px",
                                  margin: "1px",
                                  fontWeight: "bold",
                                }}
                              >
                                {x.price}
                              </h3>
                              <p style={{ fontSize: "12px", margin: "1px" }}>
                                {x.title.slice(0, 20) +
                                  (x.title.length > 20 ? "..." : "")}
                              </p>
                            </Typography>
                          </Card>
                        </Grid>
                      ))
                      .slice(20, 23)}

                    {/*  */}
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Container maxWidth="lg">
              <Card sx={{ padding: "5px", maxWidth: "100%", height: "auto" }}>
                <CardContent sx={{ textAlign: "left" }}>
                  <DisplayCards
                    link={
                      "https://img.alicdn.com/tfs/TB1VsukzuH2gK0jSZJnXXaT1FXa-38-34.png"
                    }
                    title="Top-ranking"
                  />
                  <Grid
                    Container
                    spacing={1}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {listData
                      .map((x, i) => (
                        <Grid item md={3.5} xs={3.5} sm={3.5} key={i}>
                          <Card sx={{ boxShadow: "none" }}>
                            <CardMedia
                              component="img"
                              height="100"
                              width="100%"
                              image={x.image}
                              alt="green iguana"
                              sx={{ minHeight: "100px" }}
                            />
                            <Typography
                              sx={{
                                padding: "4px",
                                color: "#3a3a3a",
                                textAlign: "center",
                              }}
                              gutterBottom
                              component="div"
                            >
                              <h3
                                style={{
                                  fontSize: "12px",
                                  margin: "1px",
                                  fontWeight: "bold",
                                }}
                              >
                                {x.price}
                              </h3>
                              <p style={{ fontSize: "12px", margin: "1px" }}>
                                {x.title.slice(0, 20) +
                                  (x.title.length > 20 ? "..." : "")}
                              </p>
                            </Typography>
                          </Card>
                        </Grid>
                      ))
                      .slice(23, 26)}

                    {/*  */}
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Container maxWidth="lg">
              <Card sx={{ padding: "5px", maxWidth: "100%", height: "auto" }}>
                <CardContent sx={{ textAlign: "left" }}>
                  <DisplayCards
                    link={
                      "https://img.alicdn.com/imgextra/i2/O1CN01m3E6Kp1nx2NbudQJI_!!6000000005155-2-tps-60-60.png"
                    }
                    title="Personal Protective Equipment"
                  />
                  <Grid
                    Container
                    spacing={1}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {listData
                      .map((x, i) => (
                        <Grid item md={3.5} xs={3.5} sm={3.5} key={i}>
                          <Card sx={{ boxShadow: "none" }}>
                            <CardMedia
                              component="img"
                              height="100"
                              width="100%"
                              image={x.image}
                              alt="green iguana"
                              sx={{ minHeight: "100px" }}
                            />
                            <Typography
                              sx={{
                                padding: "4px",
                                color: "#3a3a3a",
                                textAlign: "center",
                              }}
                              gutterBottom
                              component="div"
                            >
                              <h3
                                style={{
                                  fontSize: "12px",
                                  margin: "1px",
                                  fontWeight: "bold",
                                }}
                              >
                                {x.price}
                              </h3>
                              <p style={{ fontSize: "12px", margin: "1px" }}>
                                {x.title.slice(0, 20) +
                                  (x.title.length > 20 ? "..." : "")}
                              </p>
                            </Typography>
                          </Card>
                        </Grid>
                      ))
                      .slice(26, 29)}

                    {/*  */}
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Container maxWidth="lg">
              <Card sx={{ padding: "5px", maxWidth: "100%", height: "auto" }}>
                <CardContent sx={{ textAlign: "left" }}>
                  <DisplayCards
                    link={
                      "https://img.alicdn.com/imgextra/i3/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg"
                    }
                    title=" Dropshipping"
                  />
                  <Grid
                    Container
                    spacing={1}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {listData
                      .map((x, i) => (
                        <Grid item md={3.5} xs={3.5} sm={3.5} key={i}>
                          <Card sx={{ boxShadow: "none" }}>
                            <CardMedia
                              component="img"
                              height="100"
                              width="100%"
                              image={x.image}
                              alt="green iguana"
                              sx={{ minHeight: "100px" }}
                            />
                            <Typography
                              sx={{
                                padding: "4px",
                                color: "#3a3a3a",
                                textAlign: "center",
                              }}
                              gutterBottom
                              component="div"
                            >
                              <h3
                                style={{
                                  fontSize: "12px",
                                  margin: "1px",
                                  fontWeight: "bold",
                                }}
                              >
                                {x.price}
                              </h3>
                              <p style={{ fontSize: "12px", margin: "1px" }}>
                                {x.title.slice(0, 20) +
                                  (x.title.length > 20 ? "..." : "")}
                              </p>
                            </Typography>
                          </Card>
                        </Grid>
                      ))
                      .slice(29, 32)}

                    {/*  */}
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Container maxWidth="lg">
              <Card sx={{ padding: "5px", maxWidth: "100%", height: "auto" }}>
                <CardContent sx={{ textAlign: "left" }}>
                  <DisplayCards
                    link={
                      "https://img.alicdn.com/tfs/TB1XEafzAL0gK0jSZFAXXcA9pXa-40-40.png"
                    }
                    title=" Regional specialties"
                  />
                  <Grid
                    Container
                    spacing={1}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {listData
                      .map((x, i) => (
                        <Grid item md={3.5} xs={3.5} sm={3.5} key={i}>
                          <Card sx={{ boxShadow: "none" }}>
                            <CardMedia
                              component="img"
                              height="100"
                              width="100%"
                              image={x.image}
                              alt="green iguana"
                              sx={{ minHeight: "100px" }}
                            />
                            <Typography
                              sx={{
                                padding: "4px",
                                color: "#3a3a3a",
                                textAlign: "center",
                              }}
                              gutterBottom
                              component="div"
                            >
                              <h3
                                style={{
                                  fontSize: "12px",
                                  margin: "1px",
                                  fontWeight: "bold",
                                }}
                              >
                                {x.price}
                              </h3>
                              <p style={{ fontSize: "12px", margin: "1px" }}>
                                {x.title.slice(0, 20) +
                                  (x.title.length > 20 ? "..." : "")}
                              </p>
                            </Typography>
                          </Card>
                        </Grid>
                      ))
                      .slice(32, 35)}

                    {/*  */}
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Container maxWidth="lg">
              <Card sx={{ padding: "5px", maxWidth: "100%", height: "auto" }}>
                <CardContent sx={{ textAlign: "left" }}>
                  <DisplayCards
                    link={
                      "https://img.alicdn.com/imgextra/i4/O1CN01caWYqW1cVasvCBKJ2_!!6000000003606-0-tps-46-32.jpg"
                    }
                    title="True View"
                  />
                  <Grid
                    Container
                    spacing={1}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {listData
                      .map((x, i) => (
                        <Grid item md={3.5} xs={3.5} sm={3.5} key={i}>
                          <Card sx={{ boxShadow: "none" }}>
                            <CardMedia
                              component="img"
                              height="100"
                              width="100%"
                              image={x.image}
                              alt="green iguana"
                              sx={{ minHeight: "100px" }}
                            />
                            <Typography
                              sx={{
                                padding: "4px",
                                color: "#3a3a3a",
                                textAlign: "center",
                              }}
                              gutterBottom
                              component="div"
                            >
                              <h3
                                style={{
                                  fontSize: "12px",
                                  margin: "1px",
                                  fontWeight: "bold",
                                }}
                              >
                                {x.price}
                              </h3>
                              <p style={{ fontSize: "12px", margin: "1px" }}>
                                {x.title.slice(0, 20) +
                                  (x.title.length > 20 ? "..." : "")}
                              </p>
                            </Typography>
                          </Card>
                        </Grid>
                      ))
                      .slice(35, 38)}

                    {/*  */}
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Grid>
        </Grid>
        {/* -------------------------------------------------------------------------------> IMPORT COMPONENT QUOTATION */}

        <Container maxWidth="lg">
        <Quotations />
        </Container>
        {/* -------------------------------------------------------------------------------> BOTTOM CONTAINERS */}

        <Container maxWidth="lg">
          <Typography
            sx={{ fontSize: "24px", color: "#333333", textAlign: "left" }}
          >
            Just for your
          </Typography>
          <Grid container spacing={1}>
            {listData
              .map((e, i) => (
                <Grid item md={2} xs={6} sm={3} key={i}>
                  <Card sx={{ padding: "5px", maxWidth: 345, height: "365px" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={e.image}
                      alt="green iguana"
                    />
                    <CardContent sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {e.title.slice(0, 20) +
                          (e.title.length > 20 ? "..." : "")}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: 16, fontWeight: "bold" }}
                        variant="h6"
                        component="div"
                      >
                        {e.price + "$"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {e.description.slice(0, 20) +
                          (e.description.length > 20 ? "..." : "")}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
              .slice(0, 12)}
          </Grid>
        </Container>
        {/* -------------------------------------------------------------------------------> IMPORT COMPONENT TRADECARDS*/}

        <TradeCards />
      </header>
    </div>
  );
}
export default App;
