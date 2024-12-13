"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Avatar,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/login");
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <div className="cursor-pointer">
          {/* Desktop View */}
          <div className="hidden md:block">
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: "https://i.pravatar.cc/150",
              }}
              className="transition-transform"
              classNames={{
                name: "text-default-900",
                description: "text-default-700",
              }}
              description="hasta@example.com"
              name="Ahmet Yılmaz"
            />
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150"
              size="sm"
              className="transition-transform"
            />
          </div>
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="User menu"
        variant="flat"
        classNames={{
          list: "text-default-900",
        }}
      >
        <DropdownItem key="profile" href="/account">
          Hesabım
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          onPress={handleLogout}
          className="text-danger"
        >
          Çıkış Yap
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
