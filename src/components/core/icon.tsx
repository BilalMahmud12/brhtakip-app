import { FC } from 'react';
import { IconType } from 'react-icons';
import { 
    FcTimeline, 
    FcDepartment, 
    FcTemplate, 
    FcBriefcase, 
    FcFolder, 
    FcShop, 
    FcTrademark, 
    FcEngineering,
    FcSupport,
    FcAddDatabase,
    FcConferenceCall,
    FcDataEncryption,
    FcDiploma1,
    FcKey,
    FcSettings,
    FcSerialTasks,
    FcCancel,
    FcViewDetails
} from 'react-icons/fc';
import { IoMdRefresh } from "react-icons/io"
import { GrRefresh } from "react-icons/gr"
import { HiOutlineFilter } from "react-icons/hi"
import { GoKebabHorizontal } from "react-icons/go"
import { MdInbox, MdEdit, MdDelete } from 'react-icons/md';
import { FaRegSave } from "react-icons/fa";

const iconMapping: Record<string, IconType> = {
    'FcTimeline': FcTimeline,
    'FcDepartment': FcDepartment,
    'FcTemplate': FcTemplate,
    'FcBriefcase': FcBriefcase,
    'FcFolder': FcFolder,
    'FcShop': FcShop,
    'FcTrademark': FcTrademark,
    'FcEngineering': FcEngineering,
    'FcSupport': FcSupport,
    'FcAddDatabase': FcAddDatabase,
    'FcConferenceCall': FcConferenceCall,
    'FcDataEncryption': FcDataEncryption,
    'FcDiploma1': FcDiploma1,
    'FcKey': FcKey,
    'FcSettings': FcSettings,
    'FcSerialTasks': FcSerialTasks,
    'FcCancel': FcCancel,
    'IoMdRefresh': IoMdRefresh,
    'GrRefresh': GrRefresh,
    'HiOutlineFilter': HiOutlineFilter,
    'MdEdit': MdEdit,
    'MdDelete': MdDelete,
    'GoKebabHorizontal': GoKebabHorizontal,
    'FcViewDetails': FcViewDetails,
    'FaRegSave': FaRegSave,
    'inbox': MdInbox, // Map the string from your array to the icon component
};

const Icon: FC<{ iconName: string, className: string }> = ({ iconName, className }) => {
    const Icon = iconMapping[iconName]; // Get the correct icon component based on the iconName prop
    return Icon ? <Icon className={className} /> : null; // Render the icon with additional props
}

export default Icon;