
import "./App.css"
import logo from "./assets/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from "./assets/avatar1.png"
import { Button } from "@mui/material";
import Text from "./companents/Text";
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import video from "./assets/video.png"
import icon4 from "./assets/icon4.png"
import icon5 from "./assets/icon5.png"
import icn1 from "./assets/icn1.png"
import icn2 from "./assets/icn2.png"
import icn3 from "./assets/icn3.png"
import icn4 from "./assets/icn4.png"
import icn5 from "./assets/icn5.png"
import icn6 from "./assets/icn6.png"
import icon6 from "./assets/icon6.png"
import icon7 from "./assets/icon7.png"
import icon8 from "./assets/icon8.png"
import icons from "./assets/icons.png"

// import { createTheme } from '@mui/material/styles';
// const theme = createTheme({
//   status: {
//     danger: '#e53e3e',
//   },
//   palette: {
//     primary: {
//       main: '#0971f1',
//       darker: '#053e85',
//     },
//     mycolor: {
//       main: '#784F33',
//       contrastText: '#fff',
//     },
//   },
// });

function App() {
  
  return (
    <div>
<header className="md:absolute md:w-[90%] ml-[10%] grid md:grid-cols-[50%,40%,10%] place-items-center">
<img className="md:justify-self-start justify-self-center" src={logo} alt="" />
<div className="flex gap-6 ">
<ul className="flex gap-5 justify-self-center">
  <li className="text-[#737373] ">Home</li>
  <li className="text-[#737373] ">Product</li>
  <li className="text-[#737373] ">Pricing</li>
  <li className="text-[#737373] ">Contact</li>
</ul>
<SearchIcon sx={{color:'#737373'}}/>
<ShoppingCartIcon sx={{color:'#737373'}}/>
</div>
<div className="justify-self-center">
  <MenuIcon sx={{color:'#737373'}}/>
</div>
     </header>
     <section className="bg">
      <div className="w-[80%] m-auto grid md:grid-cols-2 pt-[5%]">
        <div className="w-[75%]">
        <h1 className="font-bold text-5xl text-[#252B42] mt-[30%] mb-[10%]">Help to reclaim your life and freedom </h1>
        <p className="text-[#737373] text-lg">We know how large objects will act, 
but things on a small scale.</p>
<div className="flex gap-5 my-[8%]">
     <Button sx={{backgroundColor:'#784F33'}} variant="contained">Contained</Button>
     <Button sx={{borderColor:'#784F33',color:'#784F33'}} variant="outlined" >Outlined</Button>
     </div>
        </div>
     
      <div className="">
<img src={Avatar} alt="" />
      </div> </div>
     </section>
     <section>
<Text h1='Our Practice Areas' p='Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics '/>
<div className="w-[80%] m-auto grid lg:grid-cols-3 gap-5 my-[5%]">
  <div className="text-center bg-[#F9F9F9]  p-5 rounded-lg shadow-sm">
<img className="m-auto pb-3" src={icon1} alt="" />
<p className="text-[#252B42] font-medium text-lg">Family Law</p>
  </div>
  <div className="text-center bg-[#295C7A]  p-5 rounded-lg shadow-sm">
<img className="m-auto pb-3" src={icon2} alt="" />
<p className="text-[#F9F9F9] font-medium text-lg">Business Law</p>
  </div>
  <div className="text-center bg-[#F9F9F9]  p-5 rounded-lg shadow-sm">
<img className="m-auto pb-3" src={icon3} alt="" />
<p className="text-[#252B42] font-medium text-lg">Trust & Estates</p>
  </div>
</div>
     </section>
     <section className="bg-[#FAFAFA] py-[1%]">
      <Text h1="Practice Advice" p="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "/>
<div className="w-[80%] m-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8">
  <div className="">
<div className="p-7 bg-white">
  <h2 className="text-[#252B42] font-medium text-base py-3">Frauds or Mislead</h2>
  <p className="text-[#737373] font-normal text-sm">Newton thought that 
light was made up of 
particles, but then it 
was discovered </p>
</div>
<img className="w-full" src={img1} alt="" />
  </div>
  <div className="">
<div className="p-7 bg-white">
  <h2 className="text-[#252B42] font-medium text-base py-3">Bailes & 
Warrants</h2>
  <p className="text-[#737373] font-normal text-sm">“Quantum mechanics” 
is the description of the 
behaviour of matter</p>
</div>
<img className="w-full" src={img2} alt="" />
  </div>
  <div className="">
<div className="p-7 bg-white">
  <h2 className="text-[#252B42] font-medium text-base py-3">Federal Drug 
Crimes</h2>
  <p className="text-[#737373] font-normal text-sm">They describe a 
universe consisting of 
bodies moving</p><br />
</div>
<img className="w-full" src={img3} alt="" />
  </div>
  
  <div className="">
<div className="p-7 bg-white">
  <h2 className="text-[#252B42] font-medium text-base py-3">Traffic Related 
Crimes</h2>
  <p className="text-[#737373] font-normal text-sm">They finally obtained 
a consistent description 
of the behaviour </p>
</div>
<img className="w-full" src={img4} alt="" />
  </div>
</div>
     </section>
     <section>
      <Text h1="Who We Are" p="Problems trying to resolve the conflict between the two major realms 
of Classical physics: Newtonian mechanics "/>
<div className="w-[80%] m-auto grid md:grid-cols-2 gap-[2%]">
  <div className="">
    <img src={video} alt="" />
  </div>
  <div className="">
    <Text start={true} h1="Most trusted in 
our field" p="Most calendars are designed for teams. Slate 
is designed for freelancers who want a 
simple way to plan their schedule."/>
<div className="grid grid-cols-[20%,80%] w-[70%] m-auto py-1">
<img src={icon4} alt="" />
<div className="">
  <p className='text-[#252B42] font-medium text-md'>the quick fox jumps over the lazy 
dog</p>
<p className='text-[#737373] font-normal'>Things on a very small scale ...</p>
</div>
</div>
<div className="grid grid-cols-[20%,80%] w-[70%] m-auto py-2">
<img src={icon5} alt="" />
<div className="">
  <p className='text-[#252B42] font-medium text-md'>the quick fox jumps over the lazy 
dog</p>
<p className='text-[#737373] font-normal'>Things on a very small scale ...</p>
</div>
</div>
  </div>
</div>
     </section>
     <section className="relative mt-[5%]">
      <div className="bg-[#FAFAFA] p-6 pb-[5%]">
        <div className="md:flex w-[80%] m-auto justify-between items-center">
       <div className="m-auto"><img className="m-auto" src={icn1} alt="" /></div>
       <div className="m-auto"><img className="m-auto" src={icn2} alt="" /></div>
       <div className="m-auto"><img className="m-auto" src={icn3} alt="" /></div>
       <div className="m-auto"><img className="m-auto" src={icn4} alt="" /></div>
       <div className="m-auto"><img className="m-auto" src={icn5} alt="" /></div>
       <div className="m-auto"><img className="m-auto" src={icn6} alt="" /></div>
        </div>
      </div>
      <div className="relative bg-[#252B42] p-6">
      <div className="linier w-[80%] m-auto py-3 px-10 grid md:grid-cols-2 md:absolute top-[-110%] left-[10%]">
        <p className="text-[#FFFFFF] font-normal text-[20px] w-[50%]">Subscribe For Latest 
Newsletter</p>
        <div className="mt-[3%]">
          <input placeholder="Your Email" className="p-1 w-[60%]" type="text"/>
          <Button sx={{backgroundColor:'#D0A144',color:"#ffffff",width:'30%',padding:'7px'}} variant="contained">Subscribe</Button>
        </div>
      </div>
      </div>
     </section>
     <section className="bg-[#F3F3F3] ">
      <Text h1="Get In Touch" p="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "/>
<div className="w-[80%] m-auto grid md:grid-cols-3 pb-[5%]">
  <div className="text-center p-6 bg-white px-8">
    <img className="m-auto" src={icon6} alt="" />
    <p className='text-[#252B42] font-medium text-md py-2'>georgia.young@example.com</p>
    <p className='text-[#252B42] font-medium text-md py-2'>georgia.young@ple.com</p>
    <p className='text-[#252B42] font-medium text-md py-2'>Get Support</p>
    <Button sx={{borderColor:'#D0A144',color:'#D0A144',margin:'2px 0'}} variant="outlined">Submit Request</Button>
  </div>
  <div className="text-center p-6 bg-[#252B42] py-8">
    <img className="m-auto" src={icon7} alt="" />
    <p className='text-white font-medium text-md py-2'>georgia.young@example.com</p>
    <p className='text-white font-medium text-md py-2'>georgia.young@ple.com</p>
    <p className='text-white font-medium text-md py-2'>Get Support</p>
    <Button sx={{borderColor:'#D0A144',color:'#D0A144',margin:'2px 0'}} variant="outlined">Submit Request</Button>
  </div>
  <div className="text-center p-6 bg-white ">
    <img className="m-auto" src={icon8} alt="" />
    <p className='text-[#252B42] font-medium text-md py-2'>georgia.young@example.com</p>
    <p className='text-[#252B42] font-medium text-md py-2'>georgia.young@ple.com</p>
    <p className='text-[#252B42] font-medium text-md py-2'>Get Support</p>
    <Button sx={{borderColor:'#D0A144',color:'#D0A144',margin:'2px 0'}} variant="outlined">Submit Request</Button>
  </div>
</div>

     </section>
     <section className="bg-white px-[4%] grid md:grid-cols-[60%,40%] py-4">
<Text start={true} h1='Request A Free Consultation' p='the quick fox jumps over the lazy dog' />
<div className="place-self-center"><Button sx={{backgroundColor:'#784F33'}} variant="contained">Contact Us</Button></div>

     </section>
     <footer className="footer">
      <div className="grid md:grid-cols-5 grid-cols-2 gap-[4%] px-[10%] py-[2%] justify-item-center ">
       <ul>
        <li className="text-white font-medium py-2">Company Info</li>
        <li className="text-white font-normal py-1">About Us</li>
        <li className="text-white font-normal py-1">Carrier</li>
        <li className="text-white font-normal py-1">We are hiring</li>
        <li className="text-white font-normal py-1">Blog</li>
        
       </ul>
       <ul>
        <li className="text-white font-medium py-2">Company Info</li>
        <li className="text-white font-normal py-1">About Us</li>
        <li className="text-white font-normal py-1">Carrier</li>
        <li className="text-white font-normal py-1">We are hiring</li>
        <li className="text-white font-normal py-1">Blog</li>
        
       </ul>
       <ul>
        <li className="text-white font-medium py-2">Company Info</li>
        <li className="text-white font-normal py-1">About Us</li>
        <li className="text-white font-normal py-1">Carrier</li>
        <li className="text-white font-normal py-1">We are hiring</li>
        <li className="text-white font-normal py-1">Blog</li>
        
       </ul>
       <ul>
        <li className="text-white font-medium py-2">Company Info</li>
        <li className="text-white font-normal py-1">About Us</li>
        <li className="text-white font-normal py-1">Carrier</li>
        <li className="text-white font-normal py-1">We are hiring</li>
        <li className="text-white font-normal py-1">Blog</li>
        
       </ul>
       <ul>
        <li className="text-white font-medium py-2">Company Info</li>
        <li className="text-white font-normal py-1">About Us</li>
        <li className="text-white font-normal py-1">Carrier</li>
        <li className="text-white font-normal py-1">We are hiring</li>
        <li className="text-white font-normal py-1">Blog</li>
        
       </ul>
      </div>
     </footer>
     <div className="w-[80%] m-auto md:flex justify-between p-[1%]">
      <p>Made With Love By Figmaland All Right Reserved </p>
      <div className="place-self-center">
<img src={icons} alt="" />
      </div>
     </div>
     </div>

  );
}

export default App;
