import Image from "next/image";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsSearch,
  BsTwitter,
} from "react-icons/bs";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BsSearch />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3 pt-2 ml-12">
          <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer translate-all w-fit">
            <BsTwitter />
          </div>

          <div className="mt-4 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-3xl px-3 py-3 w-fit"
                  key={item.title}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-base">{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-10">
              <button className="bg-[#1d9bf0]  items-center px-2 py-4 text-xl rounded-full mt-3 w-full hover:bg-[#00008B] font-semibold">
                Tweet
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-6 border-r-[.5px] border-l-[.5px] h-screen overflow-auto border-[#2f3336] ">
          <div className="flex ">
            <div>hello</div>
          </div>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
