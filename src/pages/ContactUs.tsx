import {FC} from "react";
import Header from "../components/Header";
import CustomInput from "../components/CustomInput";

const katalogFormContact = [
  {"label":"Name",
    "placeholder":"James Robber",
    "type":"text"
  },
  {"label":"Email",
    "placeholder":"James Robber",
    "type":"text"
  },
  {"label":"Suject",
    "placeholder":"For web design work Enquire",
    "type":"text"
  },
  {"label":"Message",
    "placeholder":"Type your Message",
    "type":"textarea"
  },
]
const ContactUs: FC = () => {
  return (
    <section className="min-h-full bg-neutral-400">
    <Header  bgColor="bg-neutral-400" />
    
    <div className="grid grid-cols-2 gap-4  py-8">
      <div className="flex justify-center items-center">
        {/* Your photo profile code here */}
      </div>
      <div className="flex flex-col gap-4 right-4">
          <div className="text-6xl text-black-400 ">{"Let’s build something cool together"}</div>
          {katalogFormContact.map((form, index) => (
            <CustomInput key={index} label={form.label} placeholder={form.placeholder} type={form.type} />
          ))}
          <button className=" w-40 bg-black-400 hover:bg-black-600 text-white font-medium py-4 px-4 rounded-full">
          {"Submit"}
          </button>
        </div>
    </div>
    </section>

  );
}

export default ContactUs;