import { Link } from "react-router-dom";
import {
  MdOutlineBookmarkBorder,
  MdOutlineArchive,
  MdOutlineLock,
  MdOutlineAccessTime,
  MdOutlineDevices,
  MdPeopleAlt,
  MdCompareArrows,
  MdBlock,
  MdOutlineVisibilityOff,
  MdPersonAdd,
} from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { IoLockClosedOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GiFlipFlops } from "react-icons/gi";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OptionTab from "./OptionTabBtn/OptionTab";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { CiAt } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { TiArrowSync } from "react-icons/ti";
import { AiOutlineFontSize } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { BsBellSlash } from "react-icons/bs";
import { TbPhotoVideo } from "react-icons/tb";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { CiMobile3 } from "react-icons/ci";
import { LiaUniversalAccessSolid } from "react-icons/lia";
import { LiaLanguageSolid } from "react-icons/lia";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { TbHomeShield } from "react-icons/tb";
import { MdSupport } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInbox } from "react-icons/ai";
import { MdOutlineVerified } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import SearchBarInput from "../SearchBarInput/SearchBarInput";
import BackPageArrow from "../BackPageArrow/BackPageArrow";

const lineStyle = "border-[0.001em] border-gray-400";
const h3Style = "p-[0.5em] text-gray-500";

const AccountOptions = () => {
  return (
    <div className="mt-1 flex w-[100vw] flex-col p-[1.5em] text-white">
      <div className="ml-[1em] flex flex-col items-start justify-start">
        <div className="flex w-full flex-row items-center justify-between">
          <BackPageArrow top={0} left={25} />
          <h1 className="mb-[0.5em] w-full text-center text-white">
            Setting and activity
          </h1>
        </div>
      </div>
      <hr className={lineStyle} />
      <div className="SearchbarContainer mb-[0.5em] flex w-full flex-row items-start justify-around">
        <SearchBarInput />
      </div>
      <div className="YourAccountContainer flex items-center justify-between">
        <div>
          <h3 className={h3Style}>Your account</h3>
        </div>
        <div className="flex items-center gap-[0.5em]">
          <GiFlipFlops />
          <p className={h3Style}>Babagram</p>
        </div>
      </div>
      <Link to="/account-center">
        <div className="AccountCenterContainer mt-[0.5em] flex-col items-start justify-start gap-[0.5em] rounded-[0.2em] p-[0.5em] hover:bg-slate-700">
          <div className="flex flex-col items-center gap-[0.5em]">
            <div className="flex w-full flex-row items-center justify-between gap-[0.5em]">
              <div className="flex flex-row items-center gap-[0.5em]">
                <div>
                  <CgProfile />
                </div>
                <div>
                  <h3>Accounts Center</h3>
                </div>
              </div>
              <div>
                <ArrowForwardIcon />
              </div>
            </div>
            <div>
              <p className={h3Style}>
                Password, security, personal details, ad preferences
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="mb-[0.5em]">
        <p>
          Manage your connected experiences and account settings across Meta
          technologies.
          <Link className="p-[0.5em] text-gray-500 hover:text-white">
            <button>Learn more</button>
          </Link>
        </p>
      </div>
      <hr className={lineStyle} />
      <h2 className={h3Style}>How you use babagram</h2>
      <OptionTab
        icon={<MdOutlineBookmarkBorder />}
        arrowIcon={<ArrowForwardIcon />}
        title="Saved"
      />
      <OptionTab
        icon={<MdOutlineArchive />}
        arrowIcon={<ArrowForwardIcon />}
        title="Archive"
      />
      <OptionTab
        icon={<LuActivitySquare />}
        arrowIcon={<ArrowForwardIcon />}
        title="Your Activity"
      />
      <OptionTab
        icon={<BiBell />}
        arrowIcon={<ArrowForwardIcon />}
        title="Notifications"
      />
      <OptionTab
        icon={<IoTimeOutline />}
        arrowIcon={<ArrowForwardIcon />}
        title="Time Management"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Who can see your content</h2>
      <OptionTab
        icon={<IoLockClosedOutline />}
        arrowIcon={<ArrowForwardIcon />}
        title="Account Privacy"
      />
      <OptionTab
        icon={<MdPeopleAlt />}
        arrowIcon={<ArrowForwardIcon />}
        title="Close Friends"
      />
      <OptionTab
        icon={<MdCompareArrows />}
        arrowIcon={<ArrowForwardIcon />}
        title="Crossposting"
      />
      <OptionTab
        icon={<MdBlock />}
        arrowIcon={<ArrowForwardIcon />}
        title="Blocked"
      />
      <OptionTab
        icon={<MdOutlineVisibilityOff />}
        arrowIcon={<ArrowForwardIcon />}
        title="Hide Story and Live"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>How others can interact with you</h2>
      <OptionTab
        icon={<BiSolidMessageRoundedDots />}
        arrowIcon={<ArrowForwardIcon />}
        title="Message and story replies"
      />
      <OptionTab
        icon={<CiAt />}
        arrowIcon={<ArrowForwardIcon />}
        title="Tags and Mentions"
      />
      <OptionTab
        icon={<FaRegComment />}
        arrowIcon={<ArrowForwardIcon />}
        title="Comments"
      />
      <OptionTab
        icon={<TiArrowSync />}
        arrowIcon={<ArrowForwardIcon />}
        title="Sharing"
      />
      <OptionTab
        icon={<MdOutlineLock />}
        arrowIcon={<ArrowForwardIcon />}
        title="Restricted"
      />
      <OptionTab
        icon={<MdOutlineAccessTime />}
        arrowIcon={<ArrowForwardIcon />}
        title="Limit Interactions"
      />
      <OptionTab
        icon={<AiOutlineFontSize />}
        arrowIcon={<ArrowForwardIcon />}
        title="Hidden Words"
      />
      <OptionTab
        icon={<MdPersonAdd />}
        arrowIcon={<ArrowForwardIcon />}
        title="Follow and Invite Friends"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>What you see</h2>
      <OptionTab
        icon={<FaRegStar />}
        arrowIcon={<ArrowForwardIcon />}
        title="Favorites"
      />
      <OptionTab
        icon={<BsBellSlash />}
        arrowIcon={<ArrowForwardIcon />}
        title="Muted Accounts"
      />
      <OptionTab
        icon={<TbPhotoVideo />}
        arrowIcon={<ArrowForwardIcon />}
        title="Suggested Content"
      />
      <OptionTab
        icon={<IoHeartDislikeOutline />}
        arrowIcon={<ArrowForwardIcon />}
        title="Like and Share Counts"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Your app and media</h2>
      <OptionTab
        icon={<CiMobile3 />}
        arrowIcon={<ArrowForwardIcon />}
        title="Device permissions"
      />
      <OptionTab
        icon={<HiDownload />}
        arrowIcon={<ArrowForwardIcon />}
        title="Archiving and downloading"
      />
      <OptionTab
        icon={<LiaUniversalAccessSolid />}
        arrowIcon={<ArrowForwardIcon />}
        title="Accessibility and translations"
      />
      <OptionTab
        icon={<LiaLanguageSolid />}
        arrowIcon={<ArrowForwardIcon />}
        title="Language"
      />
      <OptionTab
        icon={<BsFillFileEarmarkBarGraphFill />}
        arrowIcon={<ArrowForwardIcon />}
        title="Media quality"
      />
      <OptionTab
        icon={<MdOutlineDevices />}
        arrowIcon={<ArrowForwardIcon />}
        title="App website permissions"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>For families</h2>
      <OptionTab
        icon={<TbHomeShield />}
        arrowIcon={<ArrowForwardIcon />}
        title="App website permissions"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>For professionals</h2>
      <OptionTab
        icon={<VscGraph />}
        arrowIcon={<ArrowForwardIcon />}
        title="Account type and tools"
      />
      <OptionTab
        icon={<MdOutlineVerified />}
        arrowIcon={<ArrowForwardIcon />}
        title="Babagram Verified"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Your orders and fundraisers</h2>
      <OptionTab
        icon={<TbHomeShield />}
        arrowIcon={<ArrowForwardIcon />}
        title="Fundraisers"
      />
      <OptionTab
        icon={<AiOutlineInbox />}
        arrowIcon={<ArrowForwardIcon />}
        title="Orders and payments"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>More info and support</h2>
      <OptionTab
        icon={<MdSupport />}
        arrowIcon={<ArrowForwardIcon />}
        title="Help"
      />
      <OptionTab
        icon={<MdOutlinePrivacyTip />}
        arrowIcon={<ArrowForwardIcon />}
        title="Privacy Center"
      />
      <OptionTab
        icon={<IoPersonOutline />}
        arrowIcon={<ArrowForwardIcon />}
        title="Account Status"
      />
      <OptionTab
        icon={<MdInfoOutline />}
        arrowIcon={<ArrowForwardIcon />}
        title="About"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Also from Babagram</h2>
      <OptionTab
        icon={<FaWhatsapp />}
        arrowIcon={<ArrowForwardIcon />}
        title="WhatsApp"
      />
      <OptionTab
        icon={<FaThreads />}
        arrowIcon={<ArrowForwardIcon />}
        title="Threads"
      />
      <OptionTab
        icon={<RiFacebookCircleLine />}
        arrowIcon={<ArrowForwardIcon />}
        title="Facebook"
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Login</h2>
      <OptionTab arrowIcon={<ArrowForwardIcon />} title="Add account" />
      <OptionTab
        arrowIcon={<ArrowForwardIcon />}
        title="Log out"
        navigateRoute={"/login"}
      />
    </div>
  );
};

export default AccountOptions;
