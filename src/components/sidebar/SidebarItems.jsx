"use client";
import React, { useState } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaUsersLine, FaLock } from "react-icons/fa6";
import { GiOrganigram } from "react-icons/gi";
import { MdOutlineApproval } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import { RiNewspaperFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { logOut } from "@/lib/actions";

export default function SidebarItems({ members, providers, user }) {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const path = usePathname();
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center justify-between px-4">
            <Link href={"/"} className="flex items-center">
              <Image src={"/lnkr.jpg"} width={80} height={60} alt="logo" />
            </Link>
            {user && (
              <Link
                href={"/profile"}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:border-2 border-mainColr cursor-pointer"
              >
                <FaUserTie className="text-xl hover:text-mainColor" />
              </Link>
            )}
          </div>
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          <List>
            <Link href={"/members"}>
              <ListItem
                className={`${
                  path === "/members" ? "text-mainColor font-bolder" : ""
                }`}
              >
                <ListItemPrefix>
                  <FaUsersLine className="h-5 w-5" />
                </ListItemPrefix>
                Members
                <ListItemSuffix>
                  <Chip
                    value={user ? members ? members : 0 : <FaLock />}
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </Link>
            <Link href={"/providers"}>
              <ListItem
                className={`${
                  path === "/providers" ? "text-mainColor font-bolder" : ""
                }`}
              >
                {" "}
                <ListItemPrefix>
                  <GiOrganigram className="h-5 w-5" />
                </ListItemPrefix>
                Providers
                <ListItemSuffix>
                  <Chip
                    value={user ? providers ? providers : 0 : <FaLock />}
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </Link>

            <hr className="my-2 border-blue-gray-50" />
            <Link href={"/approvals"}>
              <ListItem>
                <ListItemPrefix>
                  <MdOutlineApproval className="h-5 w-5" />
                </ListItemPrefix>
                Approvals
                <ListItemSuffix>
                  <Chip
                    value={user ? 0 : <FaLock />}
                    size="sm"
                    variant="ghost"
                    color="red"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </Link>
            <Link href={"/pricing"}>
              <ListItem>
                <ListItemPrefix>
                  <MdPriceChange className="h-5 w-5" />
                </ListItemPrefix>
                Pricing
                <ListItemSuffix>
                  <Chip
                    value={user ? 0 : <FaLock />}
                    size="sm"
                    variant="ghost"
                    color="green"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </Link>
            <Link href={"/billing"}>
              <ListItem>
                <ListItemPrefix>
                  <RiNewspaperFill className="h-5 w-5" />
                </ListItemPrefix>
                Billing
                <ListItemSuffix>
                  <Chip
                    value={user ? 0 : <FaLock />}
                    size="sm"
                    variant="ghost"
                    color="blue"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
            </Link>
            <Link href={"/settings"}>
              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
            </Link>
            {user && (
              <ListItem
                onClick={async () => {
                  await logOut();
                  router.refresh("/login");
                }}
              >
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            )}
          </List>
        </Card>
      </Drawer>
    </>
  );
}
