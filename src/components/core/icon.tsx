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
    FcViewDetails,
    FcFinePrint,
    FcServices,
    FcEditImage,
    FcVlc,
    FcApproval,
    FcOk,
    FcPrint,
    FcNext,
    FcCancel as FcCancelIcon,
    FcCopyright,
    FcCloth,
    FcRuler,
    FcFullTrash
} from 'react-icons/fc';
import { IoMdRefresh } from "react-icons/io"
import { GrRefresh } from "react-icons/gr"
import { HiOutlineFilter, HiDotsHorizontal } from "react-icons/hi"
import { GoKebabHorizontal } from "react-icons/go"
import { MdInbox, MdEdit, MdDelete } from 'react-icons/md';
import { FaRegSave } from "react-icons/fa";
import { TbDotsCircleHorizontal } from "react-icons/tb";

const iconMapping: Record<string, IconType> = {
    'dots': HiDotsHorizontal,
    'tbDotsCircleHorizontal': TbDotsCircleHorizontal,
    'inbox': MdInbox,
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
    'FcFinePrint': FcFinePrint,
    'FcServices': FcServices,
    'FcEditImage': FcEditImage,
    'FcVlc': FcVlc,
    'FcApproval': FcApproval,
    'FcOk': FcOk,
    'FcPrint': FcPrint,
    'FcCancelIcon': FcCancelIcon,
    'FcNext': FcNext,
    'FcCopyright': FcCopyright,
    'FcCloth': FcCloth,
    'FcRuler': FcRuler,
    'FcFullTrash': FcFullTrash  
};

const Icon: FC<{ iconName: string, className: string }> = ({ iconName, className }) => {
    const Icon = iconMapping[iconName]; // Get the correct icon component based on the iconName prop
    return Icon ? <Icon className={className} /> : null; // Render the icon with additional props
}

export default Icon;