import {FC} from "react";
import Link from "./Link";
const katalogSocialLinks = [
  {
   "label":"Linkedin",
    "url":"https://in.linkedin.com/in/ayush-barnwal-25796a1b3"
},
{
  "label":"Instagram",
   "url":"https://www.instagram.com/ayushbarnwal.here/"
},
{
  "label":"Twitter",
   "url":"https://x.com/theayushbarnwal"
},
{
  "label":"Webflow",
   "url":"https://ayush-barnwal.webflow.io/"
},{
  "label":"Figma",
   "url":"https://ayush-barnwal.webflow.io/#about"
},
];
const Footer: FC = () => {
  return (
  
<footer className="flex justify-between p-4 px-8   bg-black-400">
  <div className="flex gap-x-10 ml-10 py-0">
         <p className="my-3 text-neutral-400">
        Build with 💖 by Brightscout & Ayush 
        </p>
  </div>
  <div className="flex gap-x-10 mr-10 py-0">
    <div className="my-3 md:mb-0">
        <Link mode="horizontal" color="text-neutral-400" katalogLinks={katalogSocialLinks}/>
    </div>
  </div>
</footer>

  );
}

export default Footer;