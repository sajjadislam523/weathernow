import ToggleTemperature from "@/components/ToggleTemperature";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsGearWide } from "react-icons/bs";

const Settings = () => {
    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
            <DropdownMenuTrigger asChild>
                <button className="cursor-pointer rounded-full w-6 h-6 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="cursor-pointer rounded-full"
                    >
                        <BsGearWide
                            className="text-white p-0 rounded-full"
                            size={20}
                        />
                    </motion.div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="bg-white/10 backdrop-blur-xs text-white border rounded-md p-2"
                align="end"
            >
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ToggleTemperature />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Settings;
