import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const FeedCard: React.FC = () => {
  return (
    <div className="border  border-l-0 border-r-0 border-b-0 border-t-[1px] border-[#2f3336] p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1 rounded-full h-fit">
          <Image
            src="https://avatars.githubusercontent.com/u/101518415?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-10">
          <h5>
            {" "}
            <strong>Soumya Ranjan</strong>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut ab
            cupiditate quos rerum quaerat!
          </p>
          <div className="flex justify-between mt-5 text-lg p-2 w-[90%] ">
            {/* <div className="flex item-center gap-[.5px]">
              <BiMessageRounded />
              <p>helloword</p>
            </div> */}
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
