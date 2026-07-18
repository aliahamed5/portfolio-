import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub, FaWindows } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiMicrosoftexcel, SiPowerbi } from "react-icons/si";
import { MdOutlineDevices, MdOutlineLeaderboard, MdOutlineTimer, MdOutlineWbIncandescent } from "react-icons/md";
import { BiCodeAlt, BiChat, BiBrain } from "react-icons/bi";
import { DiGit } from "react-icons/di";

export const skills = {
  frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] text-xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] text-xl" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DF1E] text-xl" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB] text-xl" /> }
  ],
  styling: [
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-xl" /> },
    { name: "Responsive Design", icon: <MdOutlineDevices className="text-gray-400 text-xl" /> }
  ],
  data: [
    { name: "Microsoft Excel", icon: <SiMicrosoftexcel className="text-[#217346] text-xl" /> },
    { name: "Power BI", icon: <SiPowerbi className="text-[#F2C811] text-xl" /> }
  ],
  tools: [
    { name: "Git", icon: <DiGit className="text-[#F05032] text-xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-xl" /> },
    { name: "VS Code", icon: <BiCodeAlt className="text-[#007ACC] text-xl" /> },
    { name: "Cursor AI", icon: <BiBrain className="text-indigo-400 text-xl" /> },
    { name: "Claude AI", icon: <BiChat className="text-orange-400 text-xl" /> }
  ],
  soft: [
    { name: "Communication", icon: <BiChat className="text-blue-400 text-xl" /> },
    { name: "Teamwork", icon: <MdOutlineLeaderboard className="text-green-400 text-xl" /> },
    { name: "Problem Solving", icon: <BiBrain className="text-purple-400 text-xl" /> },
    { name: "Fast Learning", icon: <MdOutlineWbIncandescent className="text-yellow-400 text-xl" /> },
    { name: "Time Management", icon: <MdOutlineTimer className="text-red-400 text-xl" /> }
  ]
};
