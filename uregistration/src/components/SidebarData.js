import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";


export const SidebarData = [
  {
    title: "",
    path: "/admin/admindash",
    // image: 
  },

  {
    title: "Dashboard",
    path: "/admin/admindash",
    icon: <AiIcons.AiOutlineDashboard />,
  },

  {
    title: "Earning ",
    path: "#",
    icon: <RiIcons.RiMoneyDollarCircleLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "YouTube ",
        path: "/admin/youtube",
        icon: <AiIcons.AiFillYoutube />,
      },
      
      {
        title: "Facebook ",
        path: "/admin/facebook",
        icon: <FaIcons.FaFacebook />,
      },
      {
        title: "Instagram ",
        path: "/admin/instagram",
        icon: <AiIcons.AiFillInstagram />,
      },
      {
        title: "Twitter ",
        path: "/admin/twitter",
        icon: <AiIcons.AiOutlineTwitter />,
      },
      {
        title: "TikTok ",
        path: "/admin/tikTok",
        icon: <SiIcons.SiTiktok />,
      },
    ],
  },

  {
    title: "Earning History ",
    path: "#",
    icon: <FaIcons.FaHistory />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      
      {
        title: "YouTube Earn History  ",
        path: "/admin/youtubeearnhistory",
        icon: <AiIcons.AiFillYoutube />,
      },
      {
        title: "Facebook Earn History   ",
        path: "/admin/facebookearnhistory",
        icon: <FaIcons.FaFacebook />,
      },
      {
        title: "Instagram Earn History   ",
        path: "/admin/instagramearnhistory",
        icon: <AiIcons.AiFillInstagram />,
      },
      {
        title: "Twitter Earn History  ",
        path: "/admin/Twitterearnhistory",
        icon: <AiIcons.AiOutlineTwitter />,
      },
      {
        title: "TikTok Earn History  ",
        path: "/admin/TikTokearnhistory",
        icon: <SiIcons.SiTiktok />,
      },
    ],
  },

  {
    title: "Manage Orders",
    path: "/admin/adminmanageorders",
    icon: <FaIcons.FaFirstOrder />,
  },
  
  {
    title: "Payment Summery",
    path: "/admin/adminpaymentmanagement",
    icon: <AiIcons.AiOutlineFall />,
  },
  {
    title: "Feedback",
    path: "/admin/feedback",
    icon: <RiIcons.RiFeedbackFill />,
  },
  {
    title: "Approve Videos",
    path: "/admin/approvevideos",
    icon: <AiIcons.AiFillVideoCamera />,
  },
];
