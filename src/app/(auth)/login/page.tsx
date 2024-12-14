"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, Input, Button, Link, Image } from "@nextui-org/react";
import { EmailIcon, LockIcon, EyeIcon, EyeSlashIcon } from "@components";

import {
  DoctorIcon,
  AmbulanceIcon,
  MicrophoneIcon,
  WritingHandIcon,
} from "@components/icons/BrandingIcons";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-primary flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 32V0h32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0">
          <DoctorIcon className="absolute w-24 h-24 text-white/40 top-[20%] left-[15%] -rotate-12" />
          <AmbulanceIcon className="absolute w-20 h-20 text-white/30 top-[30%] right-[10%] rotate-12" />
          <MicrophoneIcon className="absolute w-16 h-16 text-white/40 bottom-[30%] left-[20%] rotate-12" />
          <WritingHandIcon className="absolute w-20 h-20 text-white/30 bottom-[20%] right-[15%] -rotate-12" />
        </div>

        {/* Branding Content */}
        <div className="relative flex flex-col items-center gap-8 text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">MedAssistant</h1>
            <p className="text-xl opacity-90">
              Yapay zeka destekli hasta görüşme asistanınız
            </p>
          </div>
        </div>

        {/* Decorative Illustration */}
        <Image
          src="/login-illustration.svg"
          alt="Login"
          className="relative max-w-md w-full mt-12"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md">
          <CardBody className="space-y-8 p-6 md:p-8">
            {/* Logo and Title - Only show on mobile */}
            <div className="md:hidden flex flex-col items-center gap-4 mb-8">
              <Image
                src="/logo.svg"
                alt="MedAssistant Logo"
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold text-default-900">
                MedAssistant
              </h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-default-900">
                Hesabınıza Giriş Yapın
              </h2>
              <p className="text-sm text-default-500">
                Hasta görüşmelerinizi yönetmeye başlayın
              </p>
            </div>

            <div className="space-y-6">
              <Input
                label="Email"
                variant="bordered"
                placeholder="Email adresinizi girin"
                startContent={<EmailIcon />}
              />

              <Input
                label="Şifre"
                variant="bordered"
                placeholder="Şifrenizi girin"
                startContent={<LockIcon />}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <EyeSlashIcon /> : <EyeIcon />}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />

              <div className="flex justify-between items-center">
                <label className="text-sm">
                  <input type="checkbox" className="mr-2" />
                  Beni hatırla
                </label>
                <Link href="#" size="sm" className="text-primary">
                  Şifremi unuttum
                </Link>
              </div>

              <Button
                color="primary"
                size="lg"
                className="w-full"
                onPress={handleLogin}
              >
                Giriş Yap
              </Button>
            </div>

            <div className="text-center text-sm text-default-500">
              Hesabınız yok mu?{" "}
              <Link href="/register" className="text-primary">
                Kayıt olun
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
