import { FC } from 'react';
import { IconType } from 'react-icons';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import * as fcIcons from 'react-icons/fc';
import { IoMdRefresh } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";
import { HiOutlineFilter, HiDotsHorizontal } from "react-icons/hi";
import { GoKebabHorizontal } from "react-icons/go";
import { MdInbox, MdEdit, MdDelete } from 'react-icons/md';
import { FaRegSave } from "react-icons/fa";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import HomeIcon from '@mui/icons-material/Home';

type IconComponent = IconType | OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName?: string;
};

const iconMapping: Record<string, IconComponent> = {
    'HomeIcon': HomeIcon,
    'dots': HiDotsHorizontal,
    'tbDotsCircleHorizontal': TbDotsCircleHorizontal,
    'inbox': MdInbox,
    'FcTimeline': fcIcons.FcTimeline,
    'FcDepartment': fcIcons.FcDepartment,
    'FcTemplate': fcIcons.FcTemplate,
    'FcBriefcase': fcIcons.FcBriefcase,
    'FcFolder': fcIcons.FcFolder,
    'FcShop': fcIcons.FcShop,
    'FcTrademark': fcIcons.FcTrademark,
    'FcEngineering': fcIcons.FcEngineering,
    'FcSupport': fcIcons.FcSupport,
    'FcAddDatabase': fcIcons.FcAddDatabase,
    'FcConferenceCall': fcIcons.FcConferenceCall,
    'FcDataEncryption': fcIcons.FcDataEncryption,
    'FcDiploma1': fcIcons.FcDiploma1,
    'FcKey': fcIcons.FcKey,
    'FcSettings': fcIcons.FcSettings,
    'FcSerialTasks': fcIcons.FcSerialTasks,
    'FcCancel': fcIcons.FcCancel,
    'IoMdRefresh': IoMdRefresh,
    'GrRefresh': GrRefresh,
    'HiOutlineFilter': HiOutlineFilter,
    'MdEdit': MdEdit,
    'MdDelete': MdDelete,
    'GoKebabHorizontal': GoKebabHorizontal,
    'FcViewDetails': fcIcons.FcViewDetails,
    'FaRegSave': FaRegSave,
    'FcFinePrint': fcIcons.FcFinePrint,
    'FcServices': fcIcons.FcServices,
    'FcEditImage': fcIcons.FcEditImage,
    'FcVlc': fcIcons.FcVlc,
    'FcApproval': fcIcons.FcApproval,
    'FcOk': fcIcons.FcOk,
    'FcPrint': fcIcons.FcPrint,
    'FcCancelIcon': fcIcons.FcCancel,
    'FcNext': fcIcons.FcNext,
    'FcLock': fcIcons.FcLock,
    'FcCopyright': fcIcons.FcCopyright,
    'FcCloth': fcIcons.FcCloth,
    'FcRuler': fcIcons.FcRuler,
    'FcFullTrash': fcIcons.FcFullTrash,
    'FcPlus': fcIcons.FcPlus,
    'FcInTransit': fcIcons.FcInTransit,
    'FcIdea': fcIcons.FcIdea,
    'FcAdvertising': fcIcons.FcAdvertising,
    'FcVip': fcIcons.FcVip,
    'FcHighPriority': fcIcons.FcHighPriority,
    'FcAbout': fcIcons.FcAbout,
    'FcMediumPriority': fcIcons.FcMediumPriority,
    'FcInfo': fcIcons.FcInfo,
};


const Icon: FC<{ iconName: string, className?: string }> = ({ iconName, className }) => {
    const IconComponent = iconMapping[iconName]; // Get the correct icon component based on the iconName prop
    return IconComponent ? <IconComponent className={className} /> : null; // Render the icon with additional props
};

export default Icon;
