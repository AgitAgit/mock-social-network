import { Link, useNavigate } from "react-router-dom";

// Import icons
import { IoArrowBackOutline } from "react-icons/io5";
import { 
  MdOutlineBookmarkBorder, 
  MdOutlineArchive, 
  MdNotificationsNone, 
  MdOutlineSchedule, 
  MdOutlineAccountCircle, 
  MdOutlineLock, 
  MdOutlineAccessTime, 
  MdOutlineTextFields, 
  MdFavoriteBorder, 
  MdOutlineVolumeOff, 
  MdOutlineContentPaste, 
  MdOutlineThumbUp, 
  MdOutlineDevices, 
  MdDownload, 
  MdPeopleAlt, 
  MdCompareArrows,
  MdMessage,
  MdBlock,
  MdOutlineVisibilityOff,
  MdTag,
  MdComment,
  MdShare,
  MdPersonAdd
} from "react-icons/md";
import { AiOutlineMessage, AiOutlineTag, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { BiBlock, BiHide } from "react-icons/bi";
import { LuActivitySquare } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { IoLockClosedOutline } from "react-icons/io5";

import { CgProfile } from "react-icons/cg";
import { GiFlipFlops } from "react-icons/gi";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Searchbar from "../Searchbar/Searchbar";
import OptionTab from "./OptionTab";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { CiAt } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { TiArrowSync } from "react-icons/ti";
import { AiOutlineFontSize } from "react-icons/ai";






const AccountOptions = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-1 flex w-[100vw] flex-col p-[1.5em] text-white">
      <button onClick={() => navigate(-1)}>
        <IoArrowBackOutline
          style={{
            position: "absolute",
            top: "5px",
            left: "5px",
            color: "white",
            fontSize: "24px",
          }}
        />
      </button>
      <div className="flex flex-col justify-start items-start ml-[1em]">
        <h1 className="w-full text-center text-white w-full">Setting and activity</h1>
      </div>

          <div className="SearchbarContainer flex flex-row justify-around items-start w-full mb-[0.5em]">
          <Searchbar/>
          </div>
          <div className="YourAccountContainer flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Your account</h3>
            </div>
            <div className="flex items-center gap-[0.5em]">
            <GiFlipFlops/>
              <p className="text-gray-500">Babagram</p>
            </div>
          </div>

          <div className="AccountCenterContainer flex-col justify-start items-start mt-[0.5em] gap-[0.5em] hover:bg-slate-700 rounded-[0.2em] p-[0.5em]">
          <div className="flex flex-col items-center gap-[0.5em]">
            <div className="flex flex-row w-full justify-start items-center gap-[0.5em]">
              <div><CgProfile/></div>
              <div>
                <h3>Accounts Center</h3>
              </div>
            </div>
            <div>
          <p className="text-gray-500">Password, security, personal details, ad preferences</p>
            </div>
          </div>
          </div>

          <div className="mb-[0.5em]">
            <p>
              Manage your connected experiences and account settings across Meta technologies.
              <Link className="text-gray-500 hover:text-white">
              <button>
                Learn more</button></Link>
            </p>
          </div>
          <hr />
          <h2 className="text-gray-500">How you use babagram</h2>
 <OptionTab icon={<MdOutlineBookmarkBorder />} arrowIcon={<ArrowForwardIcon />} title="Saved" />
<OptionTab icon={<MdOutlineArchive />} arrowIcon={<ArrowForwardIcon />} title="Archive" />
<OptionTab icon={<LuActivitySquare />} arrowIcon={<ArrowForwardIcon />} title="Your Activity" />
<OptionTab icon={<BiBell />} arrowIcon={<ArrowForwardIcon />} title="Notifications" />
<OptionTab icon={<IoTimeOutline />} arrowIcon={<ArrowForwardIcon />} title="Time Management" />
<hr />
<h2 className="text-gray-500">Who can see your content</h2>
<OptionTab icon={<IoLockClosedOutline />} arrowIcon={<ArrowForwardIcon />} title="Account Privacy" />
<OptionTab icon={<MdPeopleAlt />} arrowIcon={<ArrowForwardIcon />} title="Close Friends" />
<OptionTab icon={<MdCompareArrows />} arrowIcon={<ArrowForwardIcon />} title="Crossposting" />
<OptionTab icon={<MdBlock />} arrowIcon={<ArrowForwardIcon />} title="Blocked" />
<OptionTab icon={<MdOutlineVisibilityOff />} arrowIcon={<ArrowForwardIcon />} title="Hide Story and Live" />
<hr />
<h2 className="text-gray-500">How others can interact with you</h2>
<OptionTab icon={<BiSolidMessageRoundedDots />} arrowIcon={<ArrowForwardIcon />} title="Message and story replies" />
<OptionTab icon={<CiAt />} arrowIcon={<ArrowForwardIcon />} title="Tags and Mentions" />
<OptionTab icon={<FaRegComment />} arrowIcon={<ArrowForwardIcon />} title="Comments" />
<OptionTab icon={<TiArrowSync />} arrowIcon={<ArrowForwardIcon />} title="Sharing" />
<OptionTab icon={<MdOutlineLock />} arrowIcon={<ArrowForwardIcon />} title="Restricted" />
<OptionTab icon={<MdOutlineAccessTime />} arrowIcon={<ArrowForwardIcon />} title="Limit Interactions" />
<OptionTab icon={<AiOutlineFontSize />} arrowIcon={<ArrowForwardIcon />} title="Hidden Words" />
<OptionTab icon={<MdPersonAdd />} arrowIcon={<ArrowForwardIcon />} title="Follow and Invite Friends" />
<hr />

<h2 className="text-gray-500">What you see</h2>
<OptionTab icon={<MdFavoriteBorder />} arrowIcon={<ArrowForwardIcon />} title="Favorites" />
<OptionTab icon={<MdOutlineVolumeOff />} arrowIcon={<ArrowForwardIcon />} title="Muted Accounts" />
<OptionTab icon={<MdOutlineContentPaste />} arrowIcon={<ArrowForwardIcon />} title="Suggested Content" />
<OptionTab icon={<MdOutlineThumbUp />} arrowIcon={<ArrowForwardIcon />} title="Like and Share Counts" />
<hr />
<h2 className="text-gray-500">Your app and media</h2>
<OptionTab icon={<MdOutlineDevices />} arrowIcon={<ArrowForwardIcon />} title="Device Permissions" />
<OptionTab icon={<MdDownload />} arrowIcon={<ArrowForwardIcon />} title="Archiving and Downloading" />

    </div>
  );
};

export default AccountOptions;
